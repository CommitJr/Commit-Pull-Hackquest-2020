
exports.up = function(knex) {
  return knex.schema.createTable('commits', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.string('branch').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('commits');
};
