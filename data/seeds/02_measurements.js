exports.seed = function (knex) {
  return knex('measurements')
    .del()
    .then(function () {
      return knex('measurements').insert([
        { measurement_type: 'grams', measurement_amount: 10 },
        { measurement_type: 'ounces', measurement_amount: 4 },
        { measurement_type: 'cups', measurement_amount: 2 },
      ]);
    });
};
