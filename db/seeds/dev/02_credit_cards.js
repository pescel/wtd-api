exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('credit_cards').insert({
      id: 1,
      type: 'Amex',
      user_id: 2,
      last_four:'0000'
    }),
    knex('credit_cards').insert({
      id: 2,
      type: 'Visa',
      user_id: 3,
      last_four: '0001'
    })
  ]);
};
