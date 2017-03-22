
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('credit_cards', function(table)
    {
      table.increments('id').primary();
      table.string('type');
      table.integer('user_id').references('users.id');
      table.string('last_four');
      table.timestamps();
    }),

    knex.schema.createTable('users', function(table)
  {
    table.increments('id').primary();
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('password');
    table.integer('monthly_income');
    table.timestamps();
  }),

     knex.schema.createTable('fixed_expenses', function(table)
   {
     table.increments('id').primary();
     table.string('type');
     table.integer('amount');
     table.integer('user_id').references('users.id');
     table.timestamps();
   }),

   knex.schema.createTable('transactions', function(table)
 {
   table.increments('id').primary();
   table.string('date');
   table.integer('amount');
   table.string('description');
   table.integer('credit_card_id').references('credit_cards.id');
   table.integer('user_id').references('users.id');
   table.timestamps();
 })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('transactions'),
    knex.schema.dropTable('fixed_expenses'),
    knex.schema.dropTable('credit_cards'),
    knex.schema.dropTable('users')
  ])
};
