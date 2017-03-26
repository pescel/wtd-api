process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should;
var expect = chai.expect;
var chaiHttp = require('chai-http');
var app = require('../server.js');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

chai.use(chaiHttp);

describe('Server', () => {
  it('should exist', () => {
    expect(app).to.exist;
  });
});

describe('GET /users', () => {
  beforeEach((done) => {
    const users = [
      {
        first_name: 'Liz',
        last_name: 'Lemon',
        email: 'hugepizzafangirl@thegirlieshow.com',
        password: 'nerdz',
        monthly_income: 45000
      },
      {
        first_name: 'Jenny',
        last_name: 'Slate',
        email: 'marceltheshell@aol.com',
        password: 'doorbellsnmore',
        monthly_income: 20000
      }
    ]

    database('users').insert(users)
    .then(() => { done(); })
  });

  afterEach((done) => {
    done();
  });

  it('should return all users', function(done) {
    chai.request(app)
    .get('/users')
    .end(function(err, res) {
      if (err) { done(err); }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body.last_name).to.be('Lemon');
      done();
    });
  });
});

describe('POST /users', () => {
  afterEach((done) => {
    done();
  });

  it('should add a new user', (done) => {
    chai.request(app)
    .post('/users')
    .send({
      first_name: 'Joe',
      last_name: 'Fox',
      email: 'NY152@aol.com',
      password: 'brinkley',
      monthly_income: 1000000
    })
    .end((err, res) => {
      if(err) { done(err); }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body[0]).to.have.property('first_name');
      expect(res.body[0]).to.have.property('last_name');
      expect(res.body[0]).to.have.property('email');
      expect(res.body[0]).to.have.property('password');
      expect(res.body[0]).to.have.property('monthly_income');
      done();
    });
  });
});

describe('GET /credit_cards', () => {
  beforeEach((done) => {
    const cards = [
      { id: 1,
        type: 'Amex',
        user_id: 1,
        last_four: '1234'
      },
      {
        id: 2,
        type: 'Visa',
        user_id: 2,
        last_four: '4321'
      }
    ]
    database('credit_cards').insert(cards)
      done();
  });

  it('should return all credit cards', (done) => {
    chai.request(app)
    .get('/credit_cards')
    .end((err, res) => {
      if (err) { done(err); }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      done();
    });
  });
});

describe('GET /fixed_expenses', () => {
  beforeEach((done) => {
    const expense = [
      {
        id: 1,
        type: 'fruit of the month subscription',
        amount: 4000,
        user_id: 1
      },
      {
        id: 2,
        type: 'gym membership',
        amount: 10000,
        user_id: 2
      }
    ]
    database('fixed_expenses').insert(expense)
    done();
  });
  afterEach((done) => {
    done();
  });

  it('should return all fixed expenses', (done) => {
    chai.request(app)
    .get('/fixed_expenses')
    .end((err, res) => {
      if (err) { done(err); }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body[0]).to.have.property('id');
      expect(res.body[0]).to.have.property('type');
      expect(res.body[0]).to.have.property('amount');
      expect(res.body[0]).to.have.property('user_id');
      done();
    });
  });
});

describe('GET /users/1', () => {
  beforeEach((done) => {
    user = [
      {
        first_name: 'Jerome',
        last_name: 'Iginla',
        email: 'jiginla12@denveravs.com',
        password: 'flames',
        monthly_income: 870000
      },
      {
        first_name: 'Rick',
        last_name: 'Nash',
        email: 'rnashnyc@nyrangers.com',
        password: 'iluvhockey',
        monthly_income: 930000
      }
    ]

    database('users').insert(user)
     done();
  });
  afterEach((done) => {
    done();
  });

  context('if user is valid', () => {
    it('should display users', (done) => {
      chai.request(app)
      .get('/users/1')
      .send({id: 1})
      .end((err, res) => {
        if (err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body[0]).to.have.property('first_name');
        expect(res.body[0]).to.have.property('last_name');
        expect(res.body[0]).to.have.property('email');
        expect(res.body[0]).to.have.property('password');
        expect(res.body[0]).to.have.property('monthly_income');
        done();
      });
    });
  });

  context('user is not found', () => {
    it('should return a 404', (done) => {
      chai.request(app)
      .get('/users/1')
      .end(function(err, res) {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done();
      });
    });
  });
});

describe('PUT /users/1', () => {
  afterEach((done) => {
    app.locals.user = [{
      id: 12,
      first_name: 'Clementine',
      last_name: 'Kruczynski',
      email: 'agentorange@aol.com',
      password: 'montauk',
      monthly_income: 40000
    }];
    done();
  });
  context('if user is valid', () => {
    it.skip('should update a user', (done) => {
      chai.request(app)
      .put('/users/1')
      .send({
        first_name: 'Ruth',
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.should.have.property('first_name');
        res.body.name.should.equal('Ruth');
        done();
      });
    });
  });

  context('if user is not found', () => {
    it('should have a 404 error status', (done) => {
      chai.request(app)
      .get('/users/1')
      .end(function(err, res) {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done();
      });
    });
  });
});

describe('GET /users/1/credit_cards', () => {
  beforeEach((done) => {
    const userCard = [
      {
        id: 1,
        type: 'MasterCard',
        user_id: 1,
        last_four: '8080'
      },
      {
        id: 2,
        type: 'Visa',
        user_id: 2,
        last_four: '0808'
      }
    ]
    database('credit_cards').insert(userCard)
    done();
  });
  afterEach((done) => {
    done();
  });

  context('if user id is valid', (done) => {
    it('should display users credit cards', function(done) {
      chai.request(app)
      .get('/users/1/credit_cards')
      .send({id: 1})
      .end((err, res) => {
        if (err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body[0]).to.have.property('type');
        expect(res.body[0]).to.have.property('last_four');
        done();
      });
    });
  });

  context('if user is not found', () => {
    it('should return 404 status', (done) => {
      chai.request(app)
      .get('/users/1/credit_cards')
      .end(function(err, res) {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done();
      });
    });
  });
});

describe('GET /users/1/fixed_expenses', () => {
  beforeEach((done) => {
    const userExpense = [
      {
        id: 1,
        type: 'amazon prime',
        amount: 1000,
        user_id: 1
      },
      {
        id: 2,
        type: 'car payment',
        amount: 30000,
        user_id: 2
      }
    ]
    database('fixed_expenses').insert(userExpense)
    done();
  });

  afterEach((done) => {
    done();
  });

  context('if users expense is valid', () => {
    it('should display users fixed expenses', (done) => {
      chai.request(app)
      .get('/users/1/fixed_expenses')
      .end((err, res) => {
        if (err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body[0]).to.have.property('type');
        expect(res.body[0]).to.have.property('amount');
        done();
      });
    });
  });

  context('if users expense is not found', () => {
    it('should return 404 status', (done) => {
      chai.request(app)
      .get('/users/1/fixed_expenses')
      .end(function(err, res) {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done();
      });
    });
  });
});

describe('POST /users/1/fixed_expenses', () => {
  afterEach((done) => {
    app.locals.expense = [{
      type: 'landscaping',
      amount: 7000,
      user_id: 1
    }]
    done();
  });

  context('if user is valid', () => {
    it('should add a new fixed expense', (done) => {
      chai.request(app)
      .post('/users/1/fixed_expenses')
      .send({type: 'hulu', amount: 1400})
      .end((err, res) => {
        if(err) { done(err); }
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a('array');
          expect(res.body[0]).to.have.property('type');
          expect(res.body[0].type).to.equal('hulu');
          done();
      });
    });
  });

  context('if user is not found', () => {
    it('should return 404 status', (done) => {
      chai.request(app)
      .get('/users/1/fixed_expenses')
      .end(function(err, res) {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done();
      });
    });
  });
});

describe('PUT /fixed_expenses/1', () => {
  afterEach( (done) => {
    app.locals.expense = [{
      id: 1,
      type: 'pet food',
      amount: 3500,
      user_id: 1
    }];
    done();
  })

  context('if fixed expense is valid', () => {
    it.skip('should update fixed expense', (done)  => {
      chai.request(app)
      .put('/fixed_expenses/1')
      .send({
        type: 'cat food',
        amount: 2000
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('type');
        res.body.name.should.equal('cat food');
        res.body.should.have.property('amount');
        res.body.channel.should.equal(2000);
        done();
      });
    });
  });

  context('if fixed expense is not found', () => {
    it('should return 404 status', (done) => {
      chai.request(app)
      .get('/fixed_expenses/1')
      .end(function(err, res) {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done();
      });
    });
  });
});

describe('POST /credit_cards', () => {
  afterEach((done) => {
    app.locals.cards = [];
    done();
  });

  it('should add a credit card', (done) => {
    chai.request(app)
    .post('/credit_cards')
    .send({
      type: 'Visa',
      user_id: 1,
      last_four: 5555
    })
    .end((err, res) => {
      if(err) { done(err); }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body[0]).to.have.property('type');
      expect(res.body[0]).to.have.property('last_four');
      done();
    });
  });
});

describe('PUT /credit_cards/1', () => {
  afterEach((done) => {
    app.locals.card = [{
      id: 1,
      type: 'Capitol One',
      user_id: 1,
      last_four: 3333
    }]
    done();
  });

  context('if credit card is valid', () => {
    it.skip('should update a credit card', (done) => {
      chai.request(app)
      .put('/credit_cards/1')
      .send({
        type: 'Visa',
        last_four: 2222
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        expect(res.body[0]).to.have.property('type');
        done();
      });
    });
  });

  context('if credit card is not found', () => {
    it('should return a 404 status', (done) => {
      chai.request(app)
      .get('/credit_cards/1')
      .end(function(err, res) {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done();
      });
    });
  });
});
