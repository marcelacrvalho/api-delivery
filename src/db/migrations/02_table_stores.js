
exports.up = function(knex) {
    return knex.schema.createTable('stores',function(table){
        table.increments('id').primary()
        table.integer('user').unsigned().notNullable()
        table.boolean('active').defaultTo(true)
        table.double('deliveryTime').defaultTo(0.3)
        table.double('withdrawalTime').defaultTo(0.3)
        table.boolean('isOpen').defaultTo(false)

        table.foreign('user').references('id').inTable('users').onDelete('cascade').onUpdate('cascade')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('stores')
};
