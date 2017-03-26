const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const md5 = require('md5');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', process.env.PORT || 3000);

// Retrieve all users
app.get('/users', (request, response) => {
  database('users').select()
  .then((users) => {
    response.send(users);
  })
  .catch((error) => {
    response.status(500).send(error);
  });
});

app.get('/credit_cards', (request, response) => {
  database('credit_cards').select()
  .then((credit_cards) => {
    response.send(credit_cards);
  })
  .catch((error) => {
    response.status(500).send(error);
  });
});

app.get('/fixed_expenses', (request, response) => {
  database('fixed_expenses').select()
  .then((fixed_expenses) => {
    response.send(fixed_expenses);
  })
  .catch((error) => {
    response.status(500).send(error)
  });
});

// Retrieve a specific user
app.get('/users/:id', (request, response) => {
  database('users').where('id', request.params.id).select()
  .then((user) => {
    if(user.length == 0) {
      response.sendStatus(404)
    } else {
      response.send(user);
    }
  })
  .catch((error) => {
    response.status(500).send(error)
  });
});

app.get('/users/:user_id/credit_cards', (request, response) => {
  database('credit_cards').where('user_id', request.params.user_id).select()
  .then((credit_cards) => {
    console.log(credit_cards)
    if(credit_cards.length == 0) {
      response.sendStatus(404)
    } else {
      response.send(credit_cards);
    }
  })
  .catch((error) => {
    response.status(500).send(error)
  });
});

app.get('/users/:user_id/transactions', (request, response) => {
  database('transactions').where('user_id', request.params.user_id).select()
  .then((transactions) => {
    if(user.length == 0) {
      response.sendStatus(404)
    } else {
      response.send(user);
    }
  })
  .catch((error) => {
    response.status(500).send(error)
  });
});

app.get('/users/:user_id/fixed_expenses', (request, response) => {
  database('fixed_expenses').where('user_id', request.params.user_id).select()
  .then((fixed_expenses) => {
    if(fixed_expenses.length == 0) {
      response.sendStatus(404)
    } else {
      response.send(fixed_expenses);
    }
  })
    .catch((error) => {
    response.status(500).send(error)
  });
});

// Create a new user
app.post('/users', (request, response) => {
  let user = request.body

  database('users').insert(user).returning('*')
  .then((user) => {
    response.status(200).send(user);
  })
  .catch((error) => {
    response.status(500).send(error);
  });
});

app.post('/credit_cards', (request, response) => {
  let creditCard = request.body

  database('credit_cards').insert(creditCard).returning('*')
  .then((creditCard) => {
    response.status(200).send(creditCard);
  })
  .catch((error) => {
      response.status(500).send(error)
  });
});

app.post('/users/:user_id/fixed_expenses', (request, response) => {
  let expense = request.body
  expense.user_id = request.params.user_id
  database('fixed_expenses').insert(expense).returning("*")
  .then((expense) => {
    if(expense.length == 0) {
      response.sendStatus(404)
    } else {
      response.send(expense);
    }
  })
  .catch((error) => {
    response.status(500).send(error)
  });
});

// Update a specific user
app.put('/users/:id', (request, response) => {
  let user = request.body

  database('users').where('id', request.params.id)
  .update(user)
  .then(() => {
    if(user.length == 0) {
      response.sendStatus(404)
    } else {
      response.send(user);
      }
    })
    .catch((error) => {
    response.status(500).send(error)
  });
});

app.put('/fixed_expenses/:id', (request, response) => {
  let expense = request.body

  database('fixed_expenses').where('id', request.params.id)
    .update(expense)
    .then(() => {
      response.send(expense);
    })
  .catch((error) => {
    if(response == undefined) {
      response.status(404).send(error)
    }
  });
});

app.put('/credit_cards/:id', (request, response) => {
  let card = request.body

  database('credit_cards').where('id', request.params.id)
    .update(card)
    .then(() => {
      response.send(card);
    })
  .catch((error) => {
    if(response == undefined) {
      response.status(404).send(error)
    }
  });
});

// Updates a specific fixed_expense row
app.put('/fixed_expenses/:id', (request, response) => {
  let expense = request.body

  database('fixed_expenses').where('id', request.params.id).select()
  .update(expense)
  .then(() => {
    response.send(expense);
  })
  .catch(function(error) {
    if(response == undefined) {
      response.status(404).send(error)
    }
  });
});

// Destroy a specific user
app.delete('/transactions/:id', (request, response) => {
  database('transactions').where('id', request.params.id)
  .del()
  .then(() => {
    response.send(request.params.id);
  })
  .catch((error) => {
    if(response == undefined) {
      response.status(404).send(error)
    }
  });
});

app.delete('/fixed_expenses/:id', (request, response) => {
  database('fixed_expenses').where('id', request.params.id)
  .del()
  .then(() => {
    response.send(request.params.id);
  })
  .catch((error) => {
    if(response == undefined) {
      response.status(404).send(error)
    }
  });
});

app.delete('/credit_cards/:id', (request, response) => {
  database('fixed_expenses').where('credit_card_id', request.params.id)
  .del()
  .then(() => {
    database('credit_cards').where('id', request.params.id).del()
  })
  .then(() => {
    response.send(request.params.id);
  })
  .catch((error) => {
    if(response == undefined) {
      response.status(404).send(error)
    }
  });
});

app.listen(app.get('port'), () => {
  console.log(`running on ${app.get('port')}.`);
})

module.exports = app
