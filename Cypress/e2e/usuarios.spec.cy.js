describe('Gerenciar usuários', () => {
  const apiUrl = 'https://serverest.dev/usuarios';
  
  it('Deve listar os usuários cadastrados', () => {
    cy.request({
      method: 'GET',
      url: apiUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.quantidade).to.be.a('number');
      expect(response.body.usuarios).to.be.an('array');
      expect(response.body.usuarios.length).to.be.greaterThan(0);
      expect(response.body.usuarios[0]).to.have.all.keys('nome', 'email', 'password', 'administrador', '_id');
      expect(response.body.usuarios[0].administrador).to.be.oneOf(['true', 'false']);
    });
  });

  it('Deve cadastrar um novo usuário com sucesso', () => {
    const uniqueEmail = `joao.silva+${Date.now()}@qa.com.br`;
    const newUser = {
      nome: 'João da Silva',
      email: uniqueEmail,
      password: 'senha123',
      administrador: 'false',
    };

    cy.request({
      method: 'POST',
      url: apiUrl,
      body: newUser,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cadastro realizado com sucesso');
      expect(response.body).to.have.property('_id');
    });
  });
});