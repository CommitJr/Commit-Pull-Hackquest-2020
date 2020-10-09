
exports.up = function(knex) {
  return knex.schema.createTable('commits', table => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('descricao').notNullable();
    table.int('branch_id').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('commits');
};
