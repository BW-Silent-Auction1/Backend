
exports.up = function(knex) {
  return knex.schema.createTable('bids', tbl => {
      tbl.increments();
      tbl.integer('user_id').unsigned().notNullable();
      tbl.foreign('user_id').references('users.id');
      tbl.integer('auctions_id').unsigned().notNullable();
      tbl.foreign('auctions_id').references('auctions.id');
      tbl.integer('amount').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('bids');
};
