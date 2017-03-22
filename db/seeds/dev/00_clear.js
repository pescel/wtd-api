exports.seed = function(knex, Promise) {
  return knex('transactions').del()
  .then(() => {
    return knex('fixed_expenses').del()
  })
  .then(() => {
    return knex('credit_cards').del()
  })
  .then(() => {
    return knex('users').del()
  })
}
