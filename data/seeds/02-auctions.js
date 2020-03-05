
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('auctions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('auctions').insert([
        { 
          auction_title: "The whale lover's auction", 
          auction_description: 'A collection of items that any whale lover would love', 
          user_id: "1",
          current_price: "1000"
        },
        { 
          auction_title: "Shark Tooth Collection", 
          auction_description: 'A collection of shark teeth.', 
          user_id: "1",
          current_price: "45000"
        },
        { 
          auction_title: "Odds and bits", 
          auction_description: 'A collection of items that any whale lover would love', 
          user_id: "2",
        }
      ]);
    });
};

// tbl.increments();
// tbl.string('auction_title', 128).notNullable();
// tbl.string('auction_description', 1028).notNullable();
// tbl.integer('user_id').unsigned()
// tbl.foreign('user_id').references('users.id');
// tbl.text('starttime').defaultTo(Date.now()).notNullable();
// tbl.text('endtime').notNullable(Date.now() + (1000 * 60 * 5));
// tbl.integer('current_price').defaultTo(0);
// tbl.boolean('isActive').defaultTo(true).notNullable()
