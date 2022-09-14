
exports.up = function(knex) {
    return knex.schema.createTable('orders',function(table){
        table.increments('id').primary()
        table.integer('store').unsigned().notNullable()
        table.integer('user').unsigned().notNullable()
        table.integer('product').unsigned().notNullable()
        table.string('coupom')
        table.double('totalPrice')
        table.boolean('active').defaultTo(true)
        table.string('ship').defaultTo('Entrega')

        table.foreign('store').references('id').inTable('stores').onDelete('cascade').onUpdate('cascade')
        table.foreign('user').references('id').inTable('users').onDelete('cascade').onUpdate('cascade')
        table.foreign('product').references('id').inTable('products').onDelete('cascade').onUpdate('cascade')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('stores')
};
