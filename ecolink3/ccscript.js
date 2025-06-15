const removeButtons = document.querySelectorAll('.remove');
const couponDisplay = document.getElementById('cupom');
const addCouponButton = document.querySelector('.add');


var cp
addCouponButton.addEventListener('click', () => {
        
        const couponCode = prompt('Digite seu código de cupom:');
        if (couponCode && couponCode.toUpperCase() === 'CUPOM') { // Código de cupom de exemplo
            couponDisplay.innerHTML = `<span></span> CUPOM-10%`;
           cp = 0.90
            updateCartTotals();
        } else if (couponCode) {
            alert('Cupom inválido.');
            couponDisplay.innerHTML = `<span></span>`; // Limpa o cupom se for inválido
            updateCartTotals(); // Recalcula caso um cupom válido tenha sido aplicado anteriormente
        }
    });

//Calcular Valor e Quantidade//
var qt = window.document.getElementById('qtd')
var vl = window.document.getElementById('valor')
var tt = window.document.getElementById('total')
var final = window.document.getElementById('final')

var sm = 1
var val = 100
var som = sm * val
var fin = som

valor.innerHTML=`<span>R$${val}</span>`
qtd.innerHTML=`<span>${sm}</span>`
total.innerHTML=`<span>R$ ${som}</span>`
final.innerHTML=`R$ ${fin}`
function diminuir(){
if (sm > 1 ) {
   
    sm--
    som = sm * val
    fin = som
    

}
if(cp==0.9){
 fin= som *cp
}

qtd.innerHTML=`<span>${sm}</span>`
total.innerHTML=`<span>R$ ${som}</span>`
final.innerHTML=`R$ ${fin}`
}

function aumentar(){
if (sm >0){
 sm++
    som = sm * val
    fin = som
}if(cp==0.9){
 fin= som *cp
}
qtd.innerHTML=`<span>${sm}</span>`
total.innerHTML=`<span>R$ ${som}</span>`
final.innerHTML=`R$ ${fin}`
}


//Animação ao clicar. {
var a = window.document.getElementById('pay')
    a.addEventListener('click', clicar)
    a.addEventListener('mouseenter', entrar)
    a.addEventListener('mouseout', sair)
    
    function clicar(){
        a.style.background = '#1F3D23'
    }
    function entrar(){
        
        a.style.background = 'green'
        
    }
    function sair(){
        
        a.style.background = '#1F3D23'
    }
//--------------------------------------------------//}
//Remover Produtos
removeButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const rowToRemove = event.target.closest('tr');
            if (rowToRemove) {
                
                rowToRemove.remove();
                updateElementReferences();
                updateCartTotals();
            }
        });
    });

