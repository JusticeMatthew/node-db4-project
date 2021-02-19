exports.seed = function (knex) {
  return knex('instructions')
    .del()
    .then(function () {
      return knex('instructions').insert([
        {
          instruction_verbage: 'Then add some of this',
          instruction_step: 2,
          measurement_id: 3,
          ingredient_id: 1,
          recipe_id: 1,
        },
        {
          instruction_verbage: 'Mix this stuff in first',
          instruction_step: 1,
          measurement_id: 2,
          ingredient_id: 2,
          recipe_id: 1,
        },
        {
          instruction_verbage: 'This is the first one for recipie 2',
          instruction_step: 1,
          measurement_id: 1,
          ingredient_id: 3,
          recipe_id: 2,
        },
      ]);
    });
};
