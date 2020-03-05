
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: "david", email: 'david@gmail.com', password: "$2a$10$zQjCUT08c8MXqtDKNR5S9eYlXIhfIODj0cl7xx/xpp7xbb2CLoceS"},
        {username: "sable", email: 'sable@gmail.com', password: "$2a$10$zQjCUT08c8MXqtDKNR5S9eYlXIhfIODj0cl7xx/xpp7xbb2CLoceS"},
        {username: "eric", email: 'eric@gmail.com', password: "$2a$10$zQjCUT08c8MXqtDKNR5S9eYlXIhfIODj0cl7xx/xpp7xbb2CLoceS"},
        {username: "jesus", email: 'jesus@gmail.com', password: "$2a$10$zQjCUT08c8MXqtDKNR5S9eYlXIhfIODj0cl7xx/xpp7xbb2CLoceS"}
      ]);
    });
};
