
exports.up = function(knex) {
  return knex.schema.alterTable('auctions', tbl => {
      tbl.integer('current_price').defaultTo(0);
      tbl.integer('starttime').defaultTo(Date.now()).alter();
      tbl.integer('endtime').defaultTo(Date.now() + (1000 * 60 * 5)).alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('auctions', tbl => {
      tbl.dropColumn('current_price');
      tbl.text('starttime').defaultTo("2020-02-28 13:30:00").notNullable();
      tbl.text('endtime').notNullable();
  })
};
