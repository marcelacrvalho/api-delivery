const db = require('../../../db')
const bcrypt = require('bcrypt-nodejs')
const sgMail = require('@sendgrid/mail')

module.exports = {
    Query: {
        async stores() {
            return await db('stores')
        },

        async store(_, { filter }) {
            if (filter.id) {
                return await db('stores').where({ id: filter.id }).first()
            } else if (filter.email) {
                return await db('stores')
                .whereExists(db.select('*').from('users')
                .where('stores.user', `${filter.email}`)
            )}
        },
    },

    Mutation: {
        async createStore(_, { data }) {
            const store = data
            return await (await db('stores').insert(store).returning("*"))[0]
        },

        async updateStore(_, { id, data }) {
            const store = await db('stores').where({ id }).first()
            if (store) {
                const updateStore = { ...store, ...data }
                await db('stores').where({ id }).update(updateStore)
                return updateStore
            }
            return 'Usuário não encontrado'
        },

        async deleteStore(_, { filter }) {
            if (filter.id) {
                return await db('stores').where({ id: filter.id }).delete()
            }
        }
    },
}