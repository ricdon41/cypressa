/// <reference types="cypress" />

describe('artmouth cvpa navbar test', () =>{


    it('Checking nav functioning', () => {
        cy.goto('artmouthcvpa')
        
        cy.goto('honoring'); cy.go('back')
        cy.goto('community'); cy.go('back')
        cy.goto('faculty'); cy.go('back')
        cy.goto('about'); cy.go('back')
        cy.goto('index'); cy.go('back')
        cy.goto('undergrad'); cy.go('back')
        cy.goto('alumni'); cy.go('back')
        cy.goto('grad'); cy.go('back')
        
        cy.goto('about'); cy.go('back')
        cy.goto('about'); cy.go('back')
        cy.goto('faculty'); cy.go('back')
        cy.goto('community'); cy.go('back')
        cy.goto('honoring'); cy.go('back')
        cy.goto('index'); cy.go('back')
        cy.goto('undergrad'); cy.go('back')
        cy.goto('alumni'); cy.go('back')
        cy.goto('grad'); cy.go('back')
        
        cy.goto('faculty'); cy.go('back')
        cy.goto('faculty'); cy.go('back')
        cy.goto('about'); cy.go('back')
        cy.goto('community'); cy.go('back')
        cy.goto('honoring'); cy.go('back')
        cy.goto('index'); cy.go('back')
        cy.goto('undergrad'); cy.go('back')
        cy.goto('alumni'); cy.go('back')
        cy.goto('grad'); cy.go('back')
        
        cy.goto('community'); cy.go('back')
        cy.goto('community'); cy.go('back')
        cy.goto('faculty'); cy.go('back')
        cy.goto('about'); cy.go('back')
        cy.goto('honoring'); cy.go('back')
        cy.goto('index'); cy.go('back')
        cy.goto('undergrad'); cy.go('back')
        cy.goto('alumni'); cy.go('back')
        cy.goto('grad'); cy.go('back')
        
        cy.goto('honoring'); cy.go('back')
        cy.goto('honoring'); cy.go('back')
        cy.goto('community'); cy.go('back')
        cy.goto('faculty'); cy.go('back')
        cy.goto('about'); cy.go('back')
        cy.goto('index'); cy.go('back')    
        cy.goto('undergrad'); cy.go('back')
        cy.goto('alumni'); cy.go('back')
        cy.goto('grad'); cy.go('back')
    })



    it('checking student submenu', ()=>
    {
        cy.goto('undergrad');
        cy.goto('undergrad'); cy.go('back')
        cy.goto('alumni'); cy.go('back')
        cy.goto('grad'); cy.go('back')
        cy.goto('index'); cy.go('back')
        
        cy.goto('alumni');
        cy.goto('alumni'); cy.go('back')
        cy.goto('undergrad'); cy.go('back')
        cy.goto('grad'); cy.go('back')
        cy.goto('index'); cy.go('back')
        
        cy.goto('grad');
        cy.goto('grad'); cy.go('back')
        cy.goto('undergrad'); cy.go('back')
        cy.goto('alumni'); cy.go('back')
        cy.goto('index'); cy.go('back')
    })


})