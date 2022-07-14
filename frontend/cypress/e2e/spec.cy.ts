describe('Website Loads', () => {
  it('Visits the site and makes sure its loaded', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('Website is connected to the backend :D', () => {
  it('detects if the app is conneected', () => {
    cy.contains('backend :D')
  })
})

describe('File load works and upload', () => {
  it('clicks upload is clickable ', () => {
    cy.get('input[type=file]').selectFile('file.json')
  })
  it('file upload works', () => {
    cy.get('input[type=file]').selectFile('file.json')
  })
})

describe('Get stats from file upload', () => {
  it('detect if file upload worked and retrieves data', () => {
    cy.contains('Filename: file.json')
  })
})

