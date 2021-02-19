exports.seed = function (knex) {
  return knex('recipies')
    .del()
    .then(function () {
      return knex('recipies').insert([
        { recipe_name: 'Matts famous pizza' },
        { recipe_name: 'Vegan sloppy joes' },
        { recipe_name: 'Mushroom soup' },
      ]);
    });
};
