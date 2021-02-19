exports.seed = function (knex) {
  return knex('ingredients')
    .del()
    .then(function () {
      return knex('ingredients').insert([
        { ingredient_name: 'salt' },
        { ingredient_name: 'pepper' },
        { ingredient_name: 'thyme' },
      ]);
    });
};
