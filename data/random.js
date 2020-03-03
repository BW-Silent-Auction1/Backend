
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('username', 128).notNullable().unique();
        tbl.string('password', 128).notNullable();
        tbl.string('email', 255).notNullable().unique();
        tbl.string('picture-url', 512)
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users")
  };
  

  
exports.up = function(knex) {
    return knex.schema.createTable('auctions', tbl => {
        tbl.increments();
        tbl.string('auction-title', 128).notNullable();
        tbl.string('auction-description', 1028).notNullable();
        tbl.integer('user-id').unsigned().notNullable();
        tbl.foreign('user-id').references('users.id');
        tbl.text('starttime').defaultTo("2020-02-28 13:30:00").notNullable();
        tbl.text('endtime').notNullable();
    })
  };
  
  exports.down = function(knex) {
    knex.schema.dropTableIfExists("auctions");
  };

  
exports.up = function(knex) {
    return knex.schema.table('auctions', tbl => {
        tbl.boolean('isActive').notNullable().defaultTo(true);
    })
  
};

exports.down = function(knex) {
  return knex.schema.table('auctions', tbl => {
      tbl.dropColumn('isActive');
  })
};
  