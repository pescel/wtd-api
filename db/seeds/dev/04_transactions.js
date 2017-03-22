exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('transactions').insert({
      id: 1,
      date: '2017-04-05',
      description: 'at least 45 notebooks in assorted colors',
      credit_card_id: 1,
      user_id: 2
    }),
    knex('transactions').insert({
      id: 2,
      date: '2017-06-02',
      description: 'just a lot of cheese',
      credit_card_id: 2,
      user_id: 3
    })
  ]);
};
