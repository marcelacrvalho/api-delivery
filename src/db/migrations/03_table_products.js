
exports.up = function(knex) {
    return knex.schema.createTable('products',function(table){
        table.increments('id').primary()
        table.integer('store').unsigned().notNullable()
        table.string('name').notNullable()
        table.double('price').notNullable().defaultTo(0.0)
        table.string('description').notNullable()
        table.string('picture')

        table.foreign('store').references('id').inTable('stores').onDelete('cascade').onUpdate('cascade')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('stores')
};
