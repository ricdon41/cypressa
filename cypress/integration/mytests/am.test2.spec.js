/// <reference types="cypress" />

describe('check connection between student pages and link page  ', ()=>{

// checking graduate pages    
    it('check the grad pages', ()=>{
        cy.goto('artmouthcvpa')
        cy.goto('grad')
        cy.checkStudents()
            
    })

//checking undergrad pages
    it('check the undergrad pages', ()=>{
        cy.goto('undergrad')
        cy.checkStudents()
            
    })
// checking alumni pages 
    it('check the alumni pages', ()=>{
        cy.goto('alumni')
        cy.checkStudents()
    })
})