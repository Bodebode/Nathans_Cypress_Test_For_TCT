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
    cy.get('#main-nav > .bit-menu-post-id-15172 > a > span').click() //Clicks on the 'Services' header
})

it('Verifies that the Career link is functions as intended', () => {
    cy.get('#main-nav > .bit-menu-post-id-17000 > a > span').click() //Clicks on the 'Services' header
})

it('Verifies that the Contact Us link is functions as intended', () => {
    cy.get('#main-nav > .current-menu-item > a > span')
})

// it('Verifies that the "Get in touch" button functions as intended', () => {
//     cy.get('#qfy-btn-634d8b932f3c49931 > .vc_general') //NOTE: The Get in touch button does not have a consitent element id/name. Defect
// })

// it('User Subscribes with a valid email, this should PASS', () => {
//   cy.visit('http://www.teamcreationtech.com')

//   cy.get('#iphorm_96_1_634d9a515557c').type('nathan@hotmail.com')

//   cy.get(
//     '#iphorm-634d9a515557c > .iphorm-inner > .iphorm-elements > .leftright > tbody > :nth-child(1) > [width="0"] > .iphorm-submit-wrap > .iphorm-submit-input-wrap > .iphorm-submit-element > span > em'
//   ).click()

//   cy.get('textarea').contains('success text')
// })

// it('User Subscribes with a second valid email containing numbers and symbols, this should PASS', () => {
//     cy.visit('http://www.teamcreationtech.com')

//     cy.get('#iphorm_96_1_634d9a515557c').type('testemail123&*@goolgle.com')

//     cy.get(
//         '#iphorm-634d9a515557c > .iphorm-inner > .iphorm-elements > .leftright > tbody > :nth-child(1) > [width="0"] > .iphorm-submit-wrap > .iphorm-submit-input-wrap > .iphorm-submit-element > span > em'
//     ).click()

//     cy.get('textarea').contains('success text')
// })

// it('User Subscribes with an invalid email, this should FAIL')
// cy.visit('http://www.teamcreationtech.com')

// cy.get('#iphorm_96_1_634d9a515557c').type('invalidl123&*gibberish')

// cy.get(
//     '#iphorm-634d9a515557c > .iphorm-inner > .iphorm-elements > .leftright > tbody > :nth-child(1) > [width="0"] > .iphorm-submit-wrap > .iphorm-submit-input-wrap > .iphorm-submit-element > span > em'
// ).click()

// cy.get('textarea').contains('fail text')

// it('User Subscribes with a second invalid email, this should FAIL')
