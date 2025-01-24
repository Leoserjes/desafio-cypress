describe('Testar login no front-end', () => {
    beforeEach(() => {
      cy.visit('https://front.serverest.dev/login');
    });
  
    it('Deve preencher o campo de email', () => {
      const email = 'leonardo@teste.com';
      
      cy.get('[data-testid="email"]').type(email);
  
      cy.get('[data-testid="email"]').should('have.value', email);
    });
  
    it('Deve preencher o campo de senha', () => {
      const senha = 'senha';
  
      cy.get('[data-testid="senha"]').type(senha);
  
      cy.get('[data-testid="senha"]').should('have.value', senha);
    });
  
    it('Deve submeter o formulário de login com sucesso', () => {
      const email = 'leonardo@teste.com';
      const senha = 'senha';
  
      cy.get('[data-testid="email"]').type(email);
      cy.get('[data-testid="senha"]').type(senha);
  
      cy.get('[data-testid="entrar"]').click();
  
      cy.url().should('include', '/home');
    });
  
    it('Deve mostrar erro de login com dados inválidos', () => {
      const emailInvalido = 'invalido@teste.com';
      const senhaInvalida = 'senhaerrada';
  
      cy.get('[data-testid="email"]').type(emailInvalido);
      cy.get('[data-testid="senha"]').type(senhaInvalida);
  
      cy.get('[data-testid="entrar"]').click();
  
      cy.get('.alert.alert-secondary.alert-dismissible')
        .should('be.visible')
        .and('contain.text', 'Email e/ou senha inválidos');
    });
  });  