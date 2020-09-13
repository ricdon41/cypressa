/// <reference types="cypress" />

describe('check student image and model box', ()=>{
    
    it('grad', ()=>{
        cy.goto('artmouthcvpa')
        cy.goto('grad')
        cy.get('.grid-container > div').each(($element, $index, $array)=>{
            cy.get('.grid-container > div').then(($ele)=>
            {
                cy.get($ele[$index]).should('have.class','box-container').click(); 
                cy.checkmodal();
                cy.go('back');
            })
         })

        })

it('undergrad', ()=>{
        cy.visit('https://artmouthcvpa.com')
        cy.goto('undergrad')
        cy.get('.grid-container > div').each(($element, $index, $array)=>{
            cy.get('.grid-container > div').then(($ele)=>
            {
                cy.get($ele[$index]).should('have.class','box-container').click(); 
                cy.checkmodal();
                cy.go('back');
            })
         })  

       
    })


    it('alumni', ()=>{
        cy.visit('https://artmouthcvpa.com')
        cy.goto('alumni')
        cy.get('.grid-container > div').each(($element, $index, $array)=>{
            cy.get('.grid-container > div').then(($ele)=>
            {
                cy.get($ele[$index]).should('have.class','box-container').click(); 
                cy.checkmodal();
                cy.go('back');
            })
         })  

       
})
})