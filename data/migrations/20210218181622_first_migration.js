exports.up = function (knex) {
  return knex.schema
    .createTable('recipies', (t) => {
      t.increments('recipe_id');
      t.string('recipe_name', 128).notNullable().unique();
    })
    .createTable('instructions', (t) => {
      t.increments('instruction_id');
      t.string('instruction_verbage').notNullable();
      t.integer('instruction_step').notNullable();
      t.integer('measurement_id')
        .unsigned()
        .notNullable()
        .references('measurement_id')
        .inTable('measurements');
      t.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients');
      t.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipies');
    })
    .createTable('ingredients', (t) => {
      t.increments('ingredient_id');
      t.string('ingredient_name', 128);
    })
    .createTable('measurements', (t) => {
      t.increments('measurement_id');
      t.string('measurement_type', 32);
      t.float('measurement_amount');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('measurements')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipies');
};
