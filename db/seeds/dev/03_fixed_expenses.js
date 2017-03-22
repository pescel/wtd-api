exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('fixed_expenses').insert({
      id: 1,
      type: 'rent',
      amount: 50000,
      user_id: 2
    }),
    knex('fixed_expenses').insert({
      id: 2,
      type: 'netflix',
      amount: 1200,
      user_id: 3
    })
  ]);
};
