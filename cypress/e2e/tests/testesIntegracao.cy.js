import * as postObject from '../requests/postObject.request'

describe('Testes de integração', () => {
    it('Criar um produto com (POST)', () => {
        postObject.addObject().should((response) => {
        expect(response.status).to.eq(200);
		expect(response.body.name).to.eq("Playstation 5")
		expect(response.body.data.price).to.eq(599.99)
		expect(response.body.data.year).to.eq(2021)
        })
    });

    it('Criar um produto (POST) e Atualizar com (PUT)', () => {
        let id
        postObject.addObject().then((resAddObject) => {
            expect(resAddObject.status).to.eq(200)
            expect(resAddObject.body.name).to.eq('Playstation 5')
            id = resAddObject.body.id

            cy.request({
                method: 'PUT',
                url: `https://api.restful-api.dev/objects/${id}`,
                body: {
                    "name": "Playstation 5 Deluxe",
                    "data": {
                       "year": 2021,
                       "price": 599.99,
                       "color": "White"
                    }}
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.name).to.eq('Playstation 5 Deluxe')
            })
        })
    })

    it('Criar um produto (POST) e deletar com (DELETE)', () => {
        let id
        postObject.addObject().then((resAddObject) => {
            expect(resAddObject.status).to.eq(200);
		    expect(resAddObject.body.name).to.eq("Playstation 5")
		    expect(resAddObject.body.data.price).to.eq(599.99)
		    expect(resAddObject.body.data.year).to.eq(2021)
            id = resAddObject.body.id
        cy.request({
            method: 'DELETE',
            url: `https://api.restful-api.dev/objects/${id}`,
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            expect(response.body.message).to.include('deleted') 
        })
    
        })
    });
    it('Criar um produto (POST) e modificar com o (PATCH)', () => {
        let id
        postObject.addObject().then((resAddObject) => {
            expect(resAddObject.status).to.eq(200);
		    expect(resAddObject.body.name).to.eq("Playstation 5")
		    expect(resAddObject.body.data.price).to.eq(599.99)
		    expect(resAddObject.body.data.year).to.eq(2021)
            id = resAddObject.body.id
        cy.request({
            method: 'PATCH',
            url: `https://api.restful-api.dev/objects/${id}`,
            body: {
                "name": "XBOX series X"
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq('XBOX series X')
        })

        })
    });
})