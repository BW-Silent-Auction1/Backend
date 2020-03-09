
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {
          name: "whale whip", 
          item_description: 'Used to lasso up whales',
          auctions_id: "1",
        },
        {
          name: "compass", 
          item_description: 'Shows directions',
          auctions_id: "1",
        },
        {
          name: "Fine rope", 
          item_description: 'Good on a boat',
          auctions_id: "1",
        },
        {
          name: "Hammerhead shark tooth", 
          item_description: 'Sharp',
          auctions_id: "2",
        },
        {
          name: "Piece of a used sail", 
          item_description: 'Not much, but maybe useful for the true whale fan',
          auctions_id: "3",
        },
      ]);
    });
};
