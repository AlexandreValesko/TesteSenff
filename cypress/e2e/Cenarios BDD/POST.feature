Funcionalidade: Criar um objeto na API

Cenário: Criar um novo objeto

Dado que eu tenho um endpoint de API RESTful em https://restful-api.dev/objects
E eu tenho os seguintes dados para criar um objeto:
{
    "name": "Playstation 5",
    "data":{
        "year": 2021,
        "price": 599.99
    }
}
Quando eu enviar uma solicitação POST para o endpoint
Então eu devo receber um status de resposta 200 OK
E eu devo receber os dados do objeto criado.