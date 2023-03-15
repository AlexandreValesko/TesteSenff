Funcionalidade: Alterar um Objeto com metodo PUT

Cenário: Alterar um objeto com o método PUT na API https://restful-api.dev/

Dado que eu tenho acesso à API https://restful-api.dev/
E eu tenho um objeto existente com ID válida
E eu quero alterar o valor do campo "name" para "Playstation 5 Deluxe"
Quando eu faço uma requisição PUT para a URL "/objects/id" com o corpo:
{
    "name": "Playstation 5 Deluxe",
    "data":{
        "year": 2021,
        "price": 599.99
    }
}
Então a resposta deve ter o código de status "200"
E o objeto atualizado deve ter o valor do campo "name" igual a "Playstation 5 Deluxe"