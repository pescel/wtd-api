process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../app');

chai.use(chaiHttp);


describe('Server', () => {
  it('should exist', () => {
    expect(app).to.exist;
  });
});

describe('GET /users', function() {
  const users = [{ id: 1
                   first_name: 'Liz',
                   last_name: 'Lemon',
                   email: 'hugepizzafangirl@thegirlieshow.com',
                   password: 'nerdz',
                   monthly_income: 45000 },
                   { id: 2
                     first_name: 'Jenny',
                     last_name: 'Slate',
                     email: 'marceltheshell@aol.com',
                     password: 'doorbellsnmore',
                     monthly_income: 20000
                   }]

  app.locals.folders = users
  done();
});
