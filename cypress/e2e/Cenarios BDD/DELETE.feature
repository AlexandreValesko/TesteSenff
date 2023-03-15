Funcionalidade: Deletar objeto com DELETE

Cenário: Deletar um objeto com uma id válida

Dado que eu tenho um endpoint de API RESTful em https://restful-api.dev/objects
E que eu tenho um objeto existente com um id válido
Quando eu enviar uma solicitação DELETE para a URL da API que corresponde ao objeto com o ID fornecido
Então o objeto deve ser removido com sucesso
E a resposta da API deve incluir um código de status HTTP 200 OK.