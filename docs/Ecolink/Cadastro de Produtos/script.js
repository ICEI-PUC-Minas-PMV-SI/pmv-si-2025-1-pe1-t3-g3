const form = document.getElementById('productForm');
const lista = document.getElementById('listaProdutos');

// Função para carregar produtos salvos no localStorage //
function carregarProdutos() {
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

  produtos.forEach(produto => {
    adicionarProdutoNaLista(produto);
  });
}

// Função para adicionar produto visualmente na lista //
function adicionarProdutoNaLista(produto) {
  const li = document.createElement('li');
  li.innerHTML = `
    <strong>${produto.nome}</strong><br>
    <em>${produto.descricao}</em><br>
    Tipo: ${produto.tipo}<br>
    Valor: ${produto.tipo === 'Doação' ? 'Gratuito' : `R$ ${parseFloat(produto.valor).toFixed(2)}`}
  `;
  lista.appendChild(li);
}

// Evento de envio do formulário //
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const descricao = document.getElementById('descricao').value;
  const tipo = document.querySelector('input[name="tipo"]:checked').value;
  const valor = document.getElementById('valor').value;

  const novoProduto = { nome, descricao, tipo, valor };

   // Adiciona produto à lista visível //
  adicionarProdutoNaLista(novoProduto);

  // Salva no localStorage //
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  produtos.push(novoProduto);
  localStorage.setItem('produtos', JSON.stringify(produtos));

  form.reset();
  document.querySelector('input[value="Venda"]').checked = true;
});

// Carrega produtos ao iniciar a página //
window.addEventListener('DOMContentLoaded', carregarProdutos);

const form = document.getElementById('productForm');
const lista = document.getElementById('listaProdutos');
const preview = document.getElementById('preview');
const inputImagens = document.getElementById('imagens');

// Mostrar pré-visualização das imagens //
inputImagens.addEventListener('change', () => {
  preview.innerHTML = "";
  const arquivos = inputImagens.files;

  if (arquivos.length > 10) {
    alert("Máximo de 10 imagens permitido.");
    inputImagens.value = "";
    return;
  }

  Array.from(arquivos).forEach((file, index) => {
    if (file.size > 10 * 1024 * 1024) {
      alert(`Imagem "${file.name}" excede 10MB.`);
      inputImagens.value = "";
      preview.innerHTML = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
});

// Carregar produtos salvos //
function carregarProdutos() {
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

  produtos.forEach(produto => {
    adicionarProdutoNaLista(produto);
  });
}

// Adicionar produto visualmente //
function adicionarProdutoNaLista(produto) {
  const li = document.createElement('li');
  li.innerHTML = `
    <strong>${produto.nome}</strong><br>
    <em>${produto.descricao}</em><br>
    Tipo: ${produto.tipo}<br>
    Valor: ${produto.tipo === 'Doação' ? 'Gratuito' : `R$ ${parseFloat(produto.valor).toFixed(2)}`}
    <div style="margin-top:10px; display:flex; flex-wrap:wrap; gap:8px;">
      ${produto.imagens.map(img => `<img src="${img}" style="width:60px;height:60px;object-fit:cover;border-radius:5px;">`).join("")}
    </div>
  `;
  lista.appendChild(li);
}

// Envio do formulário //
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const descricao = document.getElementById('descricao').value;
  const tipo = document.querySelector('input[name="tipo"]:checked').value;
  const valor = document.getElementById('valor').value;

  const arquivos = inputImagens.files;
  if (arquivos.length > 10) {
    alert("Você pode enviar no máximo 10 imagens.");
    return;
  }

  const imagensBase64 = [];

  const promises = Array.from(arquivos).map(file => {
    return new Promise((resolve, reject) => {
      if (file.size > 10 * 1024 * 1024) {
        reject(`Imagem "${file.name}" excede 10MB`);
      }

      const reader = new FileReader();
      reader.onload = function (e) {
        imagensBase64.push(e.target.result);
        resolve();
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  });

  Promise.all(promises).then(() => {
    const novoProduto = { nome, descricao, tipo, valor, imagens: imagensBase64 };

    adicionarProdutoNaLista(novoProduto);

    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.push(novoProduto);
    localStorage.setItem('produtos', JSON.stringify(produtos));

    form.reset();
    preview.innerHTML = "";
    document.querySelector('input[value="Venda"]').checked = true;
  }).catch(erro => {
    alert("Erro ao carregar imagens: " + erro);
  });
});

window.addEventListener('DOMContentLoaded', carregarProdutos);
