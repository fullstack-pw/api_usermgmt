describe('User Management API Tests', () => {
    const baseUrl = 'https://api-usermgmt.fullstack.pw';
  
    it('Health Check', () => {
      cy.request(`${baseUrl}/health`)
        .its('status')
        .should('eq', 200);
    });
  
    it('Create User - Success', () => {
      cy.request('POST', `${baseUrl}/users`, {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
      })
        .its('status')
        .should('eq', 201);
    });
  
    it('Get All Users', () => {
      cy.request('GET', `${baseUrl}/users`)
        .its('body')
        .should((users) => {
          expect(users).to.be.an('array');
          expect(users).to.have.length.greaterThan(0);
        });
    });
  
    it('Get User by ID - Success', () => {
      cy.request('GET', `${baseUrl}/users/1`)
        .its('body')
        .should((user) => {
          expect(user).to.have.property('id', '1');
          expect(user).to.have.property('name', 'John Doe');
          expect(user).to.have.property('email', 'john.doe@example.com');
        });
    });
  
    it('Update User - Success', () => {
      cy.request('PUT', `${baseUrl}/users/1`, {
        id: '1',
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
      })
        .its('status')
        .should('eq', 200);
  
      cy.request('GET', `${baseUrl}/users/1`)
        .its('body')
        .should((user) => {
          expect(user).to.have.property('name', 'Jane Doe');
        });
    });
  
    it('Delete User - Success', () => {
      cy.request('DELETE', `${baseUrl}/users/1`)
        .its('status')
        .should('eq', 204);
  
      cy.request({
        method: 'GET',
        url: `${baseUrl}/users/1`,
        failOnStatusCode: false,
      })
        .its('status')
        .should('eq', 404);
    });
  
    it('Create User - Validation Error', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/users`,
        body: {
          name: 'Missing ID',
        },
        failOnStatusCode: false,
      })
        .its('status')
        .should('eq', 400);
    });
  
    it('Get User by ID - Not Found', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/users/999`,
        failOnStatusCode: false,
      })
        .its('status')
        .should('eq', 404);
    });
  });
  