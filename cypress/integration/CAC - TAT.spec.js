/// <reference types="Cypress" />

describe('CAT - TAT', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
      })
      
    it('Verify title', () =>  {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    
    it('fill the required fields and send the form', () =>  {
        const longText = "TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE "        
        cy.get('#firstName').type('THOMAS')
        cy.get('#lastName').type('D BRUCE')
        cy.get('#email').type('thomasdbruce@gmail.com')
        cy.get('#open-text-area').type(longText, { delay: 0 })
        cy.get('button[type="submit"]').click()
        cy.get('span[class="success"]').should('be.visible')
    })

    it('validate error message with invalid email', () => {
        const longText = "TESTE"        
        cy.get('#firstName').type('THOMAS')
        cy.get('#lastName').type('D BRUCE')
        cy.get('#email').type('thomasdbruce...com')
        cy.get('#open-text-area').type(longText, { delay: 0 })
        cy.get('button[type="submit"]').click()
        cy.get('span[class="error"]').should('be.visible')
    });

    it('validate invalid input on telephone field', () => {
        const longText = "TESTE"
        cy.get('#phone').type('THOMAS').should('have.value', '')
    });

    it('validate error message when phone is requerid but not inputed', () => {
        cy.get('#firstName').type('THOMAS')
        cy.get('#lastName').type('D BRUCE')
        cy.get('#email').type('thomasdbruce@gmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Teste', { delay: 0 })
        cy.get('button[type="submit"]').click()
        cy.get('span[class="error"]').should('be.visible')
    })

    it('validate error message when phone is requerid but not inputed', () => {
        const name = "THOMAS"
        const lastname = "D BRUCE"
        const email = "thomasdbruce@gmail.com"
        cy.get('#firstName')
            .type(name)
            .should('have.value', name)
            .clear()
            .should('have.value', '')
        cy.get('#lastName')
            .type(lastname)
            .should('have.value', lastname)
            .clear()
            .should('have.value', '')
        cy.get('#email')
            .type(email)
            .should('have.value', email)
            .clear()
            .should('have.value', '')        
    })
})