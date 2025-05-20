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

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                                        |PARA ... `MOTIVO/VALOR`                                  |
|--------------------|---------------------------------------------------------------------------|----------------------------------------                 |
|Usuário             | Cadastrar Itens                                                           | Venda, reciclagem, doação                               |
|Usuário             | Gerenciar meus dados                                                      | Alterar valores incorretos                              |
|Usuário             | Deletar minha conta                                                       | Por falta de uso                                        |
|Usuário             | Reativar/Recupar minha conta                                              | Permitir o acesso à conta                               |
|Usuário             | Checar minha lista de compras                                             | Checar o que foi adicionado no carrinho                 |
|Usuário             | Avaliar o Produto/Persona                                                 | Relatar a experiência                                   |
|Usuário             | Desejo vender/reciclar meus itens                                         | Se desfazer dos produtos                                |
|Sistema             | Proporcionar a ediçao/exclusão dos itens oferecidos                       | Permitir que o usuário gerencie os itens postados       |
|Sistema             | Listar ofertas postadas pelos usuários                                    | Facilitar a visualização do que procura                 |
|Sistema             | Fornecer filtros avançados de pesquisa                                    | Viabilizar a busca de itens do usuário                  |
|Sistema             | Disponibilidade de ver itens próximos do usuário através da geolocalização| Praticidade no momento da utilização/visualização do app|
|Sistema             | Fornecer trocar de mensagens entre usuários da aplicação                  | Fornecer maior interação entre usuários                 |
|Sistema             | Notificar usuários sobre descontos/novidades do app                       | Aumentar o engajamento da aplicação                     |

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


### Requisitos Não Funcionais
 
| ID      | Descrição do Requisito                                                                     | Prioridade |
| ------- | ------------------------------------------------------------------------------------------ | ---------- |
| RNF-001 | Controle de acesso baseado em funções.                                                     | ALTA       |
| RNF-002 | Criptografia de dados dos usuários.                                                        | ALTA       |
| RNF-003 | Conformidade com a LGPD para proteção de dados.                                            | ALTA       |
| RNF-004 | Otimização de imagens para carregamento rápido.                                            | MÉDIA      |
| RNF-005 | Implementação de cache para melhorar a velocidade das consultas.                           | MÉDIA      |
| RNF-006 | Suporte a leitores de tela e acessibilidade visual.                                        | MÉDIA      |
| RNF-007 | Ajuste de contraste e tipografia para melhor legibilidade.                                 | MÉDIA      |
| RNF-008 | Registro de logs de atividades para auditoria e recuperar-se rapidamente de falhas.        | MÉDIA      |
| RNF-009 | Monitoramento de falhas e disponibilidade do sistema.                                      | MÉDIA      |
| RNF-010 | O sistema deve possuir testes de integração para validar a comunicação entre seus módulos. | ALTA       |
| RNF-011 | O sistema deve ser multiplataforma.                                                        | ALTA       |
| RNF-012 | O sistema deve possuir uma interface intuitiva e de fácil navegação para o usuário.        | MÉDIA      |
| RNF-013 | O sistema deve ser capaz de lidar com um grande número de requisições de usuários.         | ALTA       |
| RNF-014 | O site deve ser compatível com os principais navegadores web.                              | ALTA       |
| RNF-015 | Deve haver um sistema de backup de todos os dados da plataforma.                           | ALTA       |
| RNF-016 | A plataforma deve oferecer um suporte ao cliente eficiente.                                | ALTA       |



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
