class GoogleSearchPage {

    getInputSearch(){
        return cy.get('#APjFqb')
    }

    getSecondSuggestionSearch(){
        return cy.get('#ERWdKc')
    }
}

export default GoogleSearchPage