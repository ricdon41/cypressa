// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })



Cypress.Commands.add("goto", (page)=>{
    if(page=='artmouthcvpa'){
        cy.visit('https://artmouthcvpa.com')
        cy.url().should('eq','https://artmouthcvpa.com/')
    }

    if (page=='faculty')
    {
        cy.get('#nav-placeholder > div > div:nth-child(5)').click()
        cy.url().should('include','faculty')
    }

    if (page== 'honoring'){
        cy.get('#nav-placeholder > div > div:nth-child(7)').click()
        cy.url().should('include','marc')

    }

    if(page=='community'){
        cy.get('#nav-placeholder > div > div:nth-child(6)').click()
        cy.url().should('include','community')
    }

    if(page=='index'){
        cy.get('.nav_menu_icon').click()
        cy.url().should('include', 'index.html')
    }

    if (page=='about'){
        cy.get('#nav-placeholder > div > div:nth-child(3)').click()
        cy.url().should('include','about')

    }

    if(page=='undergrad'){
        cy.get('#s-disappear').click()
        cy.get('#nav-placeholder > div > div.navbar_items.nav_dropdown.sub_items_showing > div:nth-child(2)').click()
        cy.url().should('include', 'undergrad')
    }
    
    if(page=='grad'){
        cy.get('#s-disappear').click()
        cy.get('#nav-placeholder > div > div.navbar_items.nav_dropdown.sub_items_showing > div:nth-child(3)').click()
        cy.url().should('include', 'graduate')
     }

    if(page=='alumni'){
        cy.get('#s-disappear').click()
        cy.get('#nav-placeholder > div > div.navbar_items.nav_dropdown.sub_items_showing > div:nth-child(4)').click()
        cy.url().should('include', 'alumni')
    }

})

Cypress.Commands.add('checkStudents',()=>{

    cy.get('.grid-container > div').each(($element, $index, $array)=>{
        cy.get('.grid-container > div').then(($ele)=>
        {
            cy.get($ele[$index]).should('have.class','box-container').click(); cy.go('back');
        })
     })  
  
})


Cypress.Commands.add('checkmodal',()=>{
    cy.get('.wrapper > div').not('div.quote').each(($element, $index, $array)=>{
        cy.get('.wrapper > div.box').not('div.quote').then(($ele)=>{
            cy.get($ele[$index]).not('.quote').click().then(()=>{
                cy.get('#close').click();
            })
           
        })

    }) 
})
