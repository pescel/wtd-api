exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('users').insert({
      id: 2,
      first_name: 'Amy',
      last_name: 'Poehler',
      email: 'parksnrec@gmail.com',
      password: 'sebastian',
      monthly_income: 1000000
    }),
    knex('users').insert({
      id: 3,
      first_name: 'Patton',
      last_name: 'Oswald',
      email: 'ratatatatouille@hotmail.com',
      password: 'remy',
      monthly_income: 800000
    })
  ]);
};
