
exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
        table.increments("id");

        table
            .text("username")
            .notNullable()
            .unique();

        table
            .text("password")
            .notNullable()
            .unique();
    }
  
)};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
};
