Funcionalidade: Modificar um objeto usando o PATCH

Cenário: Modificar um objeto com uma id válida

Dado que eu tenha acesso à API https://restful-api.dev/
E tenha um objeto existente com o ID válida
E deseje modificar o atributo "name" para "Xbox serie X"

Quando eu enviar uma solicitação PATCH para a URL "/objects/id"
E incluir no corpo da solicitação o seguinte JSON:
{
  "name": "Xbox serie X"
}
Então a API deve retornar um código de status 200 OK
E o objeto com o ID válida deve ter o atributo "name" modificado para "Xbox serie X"