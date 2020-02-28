
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('username', 128).notNullable().unique();
        tbl.string('password', 128).notNullable();
        tbl.string('email', 255).notNullable().unique();
        tbl.string('picture-url', 512)
    })
    .createTable('auctions', tbl => {
        tbl.increments();
        tbl.string('auction_title', 128).notNullable();
        tbl.string('auction_description', 1028).notNullable();
        tbl.integer('user_id').unsigned()
        tbl.foreign('user_id').references('users.id');
        tbl.text('starttime').defaultTo("2020-02-28 13:30:00").notNullable();
        tbl.text('endtime').notNullable();
        tbl.boolean('isActive').defaultTo(true).notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('auctions').dropTableIfExists('users');
};