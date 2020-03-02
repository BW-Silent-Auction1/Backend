// id, name, item-description, auctions-id, picture-id

exports.up = function(knex) {
  return knex.schema.createTable('pictures', tbl => {
      tbl.increments();
      tbl.string('url', 1024).notNullable()
  })
  .createTable('items', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
      tbl.string('item_description', 255);
      tbl.integer('auctions_id').unsigned();
      tbl.foreign('auctions_id').references('auctions.id');
      tbl.integer('pictures_id').unsigned();
      tbl.foreign('pictures_id').references('pictures.id')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('items').dropTableIfExists('pictures');
};
