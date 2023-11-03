# Mandalorian Store (Back-End)

# Como foi o desenvolvimento do projeto?

No back-end utilizei o Express para receber as requisições do client e armazenalas. Para manipular a criação das tabelas utilizei a biblioteca Mongoose.
O cadastro de usuarios e os pedidos estão sendo armazenados no MongoDB.
No começo do projeto, defini salvar os items adicionados ao carrinho no banco, e depois salvar-los junto ao nome e endereço do usuário na tabela de Pedidos.
Porem defini enviar dados do carrinho para a tabela Pedidos ao confirmar a compra, e no controller de Pedidos fazer a junção dos dados do carrinho com os do usuario.

# Funções basicas da API
## User Conntroller 

Função "store" de cadastro, função "update" para atualizar o cadastro e função "delete" para exclusão do usuario do banco.

## Session Controller
Função "store" de cadastro da sessão do usuario no sistema e função "validate" para validar o token e persistir o login do usuario.

## Pedido Controller
Função "store" para armazenar o pedido no banco de dados.

## Product Controller
Função "store" para armazenar os equipamentos ja fornecidos no banco de dados.
