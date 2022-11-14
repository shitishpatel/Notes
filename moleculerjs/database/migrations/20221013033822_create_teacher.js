/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('teacher',(table)=>{
        table.increments('id'); //primary key auto increament
        table.string('first_name').notNullable(); //not null field
        table.string('last_name').notNullable();
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('teacher');
  
};
