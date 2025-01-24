describe('Testar fluxo de login, adicionar produto e limpar lista', () => {
    it('Deve realizar login, adicionar o produto correto ao carrinho e depois limpar a lista', () => {
  
      cy.visit('https://front.serverest.dev/login');
  
      cy.get('[data-testid="email"]')
        .type('leonardo@teste.com');
  
      cy.get('[data-testid="senha"]')
        .type('senha');
  
      cy.get('[data-testid="entrar"]').click();
  
      cy.url().should('not.include', '/login');
  
      cy.visit('https://front.serverest.dev/home');
  
      cy.contains('Sleek Ceramic Towels')
        .parent()
        .find('[data-testid="adicionarNaLista"]')
        .click();
  
      cy.url().should('include', '/minhaListaDeProdutos');
  
      cy.get('[data-testid="shopping-cart-product-name"]').should('contain.text', 'Sleek Ceramic Towels');
  
      cy.get('[data-testid="limparLista"]').click();
  
      cy.get('[data-testid="shopping-cart-product-name"]').should('not.exist');
    });
  });  