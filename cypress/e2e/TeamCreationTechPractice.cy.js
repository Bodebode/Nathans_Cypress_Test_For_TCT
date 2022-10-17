// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

///// <reference  types ="cypress"/>

it('Loads the team creation tech website', () => {
  cy.visit('http://www.teamcreationtech.com')
})

it('Verifies that the Portfolio link is functions as intended', () => {
  cy.get('#main-nav > .bit-menu-post-id-15923 > a > span').click() // Clicks on the Portfolio header
})

it('Verifies that the Services link is functions as intended', () => {
  cy.get('#main-nav > .bit-menu-post-id-17023 > a > span').click() //Clicks on the 'Services' header
})

it('Verifies that the About us header is functions as intended', () => {
  cy.get('#main-nav > .bit-menu-post-id-15172 > a > span').click() //Clicks on the 'About us' header
})

it('Verifies that the Career link is functions as intended', () => {
  cy.get('#main-nav > .bit-menu-post-id-17000 > a > span').click() //Clicks on the 'Career' header
})

it('Verifies that the Contact Us link is functions as intended', () => {   //Clicks on the 'Contact Us' header
  cy.get('#main-nav > .current-menu-item > a > span')
})

// it('Verifies that the "Get in touch" button functions as intended', () => {
//     cy.get('#qfy-btn-634d8b932f3c49931 > .vc_general') //NOTE: The Get in touch button does not have a consitent element id/name. Defect
// })

it('User Subscribes with a valid email, this should PASS',
    () => {
      cy.visit('http://www.teamcreationtech.com')

      cy.get('#iphorm_96_1_634dc30ce2e9f').type('nathan@hotmail.com')

      cy.get('#iphorm-634dc30ce2e9f > div > div.iphorm-elements.iphorm-elements-96.iphorm-clearfix > table > tbody > tr:nth-child(1) > td:nth-child(2) > div > div > button > span > em').click()

      cy.get('textarea').contains('success')
    })


 it('User Subscribes with a second valid email containing numbers and symbols, this should PASS',
    () => {
  cy.visit('http://www.teamcreationtech.com')

  cy.get('#iphorm_96_1_634dc30ce2e9f').type('nathan123!$@googlemail.com')

  cy.get('#iphorm-634dc30ce2e9f > div > div.iphorm-elements.iphorm-elements-96.iphorm-clearfix > table > tbody > tr:nth-child(1) > td:nth-child(2) > div > div > button > span > em').click()

  cy.get('textarea').contains('success')
})


 it('User Subscribes with an invalid email, this should FAIL',
     () => {
cy.visit('http://www.teamcreationtech.com')

cy.get('#iphorm_96_1_634dc30ce2e9f').type('12335.,!£$%gibberish')

cy.get('#iphorm-634dc30ce2e9f > div > div.iphorm-elements.iphorm-elements-96.iphorm-clearfix > table > tbody > tr:nth-child(1) > td:nth-child(2) > div > div > button > span > em').click()

cy.get('textarea').contains('success')
})


 it('User Subscribes with another invalid email, this should FAIL',
    () => {
      cy.visit('http://www.teamcreationtech.com')

      cy.get('#iphorm_96_1_634dc30ce2e9f').type('£££££££££££££££££{Enter}')

      //cy.get('#iphorm-634dc30ce2e9f > div > div.iphorm-elements.iphorm-elements-96.iphorm-clearfix > table > tbody > tr:nth-child(1) > td:nth-child(2) > div > div > button > span > em').click()

      cy.get('textarea').contains('success')
    })

it('User Subscribes with a third invalid email, this should FAIL',
    () => {
      cy.visit('http://www.teamcreationtech.com')

      cy.get('#iphorm_96_1_634dc30ce2e9f').type('£££££££££$$$$$££££&&&&********qwertyuiioplkjhgfdsazxcvbnm,../0987654321{Enter}')

      //cy.get('#iphorm-634dc30ce2e9f > div > div.iphorm-elements.iphorm-elements-96.iphorm-clearfix > table > tbody > tr:nth-child(1) > td:nth-child(2) > div > div > button > span > em').click()

      cy.get('textarea').contains('success')
    })