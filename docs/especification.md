# Especificações do Projeto
 
Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais, além das restrições do projeto.
 
A especificação do projeto foi realizada utilizando técnicas como a criação de personas, histórias de usuários e levantamento de requisitos, gerada pelos integrantes do grupo através de um brainstorming, onde cada um contribuiu com suas ideias. Para garantir a compreensão do contexto, foi utilizada a técnica de **Mapeamento de Personas** e **Histórias de Usuário**, além da categorização detalhada dos requisitos funcionais e não funcionais.
 
## Personas
 
#### Maria
 
- **Idade**: 26 anos
- **Profissão**: Advogada
- **Motivação**: Manter sua casa organizada.
- **Necessidade**: Encontrar uma maneira simples e rápida de se desfazer de itens usados (por meio de venda, doação ou envio para reciclagem) sem prejudicar o meio ambiente.
 
#### Walter Lopes
 
- **Idade**: 32 anos
- **Profissão**: Profissional de TI
- **Motivação**: Vender seus móveis e utensílios pessoais de maneira consciente
- **Necessidade**: Vender utensílios de maneira rápida.
 
#### Mariana Oliveira
 
- **Idade:** 29 anos
- **Profissão:** Estudante
- **Motivação:** Economizar dinheiro.
- **Necessidade:** Encontrar móveis e eletrodomésticos usados em boas condições por preços acessíveis.
 
#### Roberto Carlos
 
- **Idade:** 50 anos
- **Profissão:** Proprietário de uma pequena rede de lojas de móveis usados.
- **Motivação:** Integrar a sua empresa a práticas ecológicas e sociais.
- **Necessidade:** Expandir seu negócio de forma sustentável.
 
#### João da Silva
 
- **Idade:** 50 anos
- **Profissão:** Desempregado
- **Motivação:** Melhorar sua qualidade de vida sem precisar gastar dinheiro com itens essenciais.
- **Necessidade:** Conseguir móveis e utensílios domésticos gratuitamente.
 
#### Pedro Paulo
 
- **Idade:** 26 anos
- **Profissão:** Artesão e empreendedor sustentável
- **Motivação:** Promover a sustentabilidade através da criação de móveis feitos com garrafas PET.
- **Necessidade:** Encontrar um fluxo constante de materiais recicláveis e alcançar mais clientes interessados em seus produtos sustentáveis.
 
#### João Ferreira
 
- **Idade:** 40 anos
- **Profissão:** Coordenador de uma cooperativa de reciclagem
- **Motivação:** Facilitar a coleta de materiais recicláveis e conectar-se a fornecedores e clientes.
- **Necessidade:** Encontrar e organizar rotas de coleta de materiais recicláveis na região.
 
#### Ricardo Lima
 
- **Idade:** 42 anos
- **Profissão:** Coletor autônomo de recicláveis
- **Motivação:** Ampliar sua clientela e garantir uma fonte constante de materiais recicláveis.
- **Necessidade:** Ter um sistema que mostre pontos de coleta de itens recicláveis e facilite o contato com doadores.
 
#### Ramon Felipe
 
- **Idade:** 25 anos
- **Profissão:** Dono de um brechó - Autônomo
- **Motivação:** Ampliar seus meios de venda
- **Necessidade:** Aumentar a cartela de clientes e doar roupas que estão sem utilidade no seu estoque.
 
#### Laura Vitória
 
- **Idade:** 25 anos
- **Profissão:** Dono de um restaurante - Autônoma
- **Motivação:** Buscar informações sobre descarte correto
- **Necessidade:** Orientar vizinhos sobre como/onde descartar corretamente para evitar acúmulo de lixo em terrenos vazios.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID     | Descrição do Requisito                                 | Prioridade |
| ------ | ------------------------------------------------------ | ---------- |
| RF-001 | Cadastro via formulário                                | ALTA       |
| RF-002 | Painel de gerenciamento de dados do usuário            | ALTA       |
| RF-003 | Deletar conta de usuário                               | MÉDIA      |
| RF-004 | Login e recuperação de senha por email                 | ALTA       |
| RF-005 | Carrinho de compras                                    | MÉDIA      |
| RF-006 | Permitir avaliação e comentários nas transações        | ALTA       |
| RF-007 | Cadastro de produtos para venda/reciclagem/doação      | ALTA       |
| RF-008 | Edição e remoção de produtos cadastrados               | ALTA       |
| RF-009 | Listagem de produtos por usuário e por categoria       | ALTA       |
| RF-010 | Filtros avançados para pesquisa de produtos            | ALTA       |
| RF-011 | Geolocalização para visualização de itens próximos     | ALTA       |
| RF-012 | Sistema de mensagens entre usuários                    | ALTA       |
| RF-013 | Notificações sobre interações na plataforma            | MEDIA      |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva | MÉDIA | 
|RNF-002| A aplicação deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
