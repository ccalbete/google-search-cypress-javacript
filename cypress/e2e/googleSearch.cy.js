
import GoogleSearchPage from '../support/pages/googleSearchPage'

const googleSearchPage = new GoogleSearchPage()
describe('Google search', () => {
  beforeEach(() => {
    cy.goToGoogle()
  })

  it('Search "selenium" and open the result in a new tab', () => {
    cy.fixture('googleSearchData').then((testData) => {
      googleSearchPage.getInputSearch().type(testData.textToSearch)
      googleSearchPage.getSecondSuggestionSearch().invoke('removeAttr', 'target').click();
      cy.title().should('include', 'selenium ide');
    });
   
  })

})