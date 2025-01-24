describe('Testar login', () => {
  const apiUrl = 'https://serverest.dev/login';

  it('Deve realizar login com sucesso', () => {
    const credentials = {
      email: 'leonardo@teste.com',
      password: 'senha'
    };

    cy.request({
      method: 'POST',
      url: apiUrl,
      body: credentials,
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq('Login realizado com sucesso');
      expect(response.body.authorization).to.match(/^Bearer .+/);
    });
  });

  it('Deve retornar 401 para e-mail ou senha inválidos', () => {
    const invalidCredentials = {
      email: 'invalido@teste.com',
      password: 'senhaerrada'
    };

    cy.request({
      method: 'POST',
      url: apiUrl,
      body: invalidCredentials,
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.eq('Email e/ou senha inválidos');
    });
  });
});