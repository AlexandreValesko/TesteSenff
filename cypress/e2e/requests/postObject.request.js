/// <reference types="Cypress" />

function addObject() {
    return  cy.request({
        method: 'POST',
        url: 'https://api.restful-api.dev/objects',
        body: {
            "name": "Playstation 5",
            "data": {
               "year": 2021,
               "price": 599.99
            }
         }
     })
}

export {addObject};