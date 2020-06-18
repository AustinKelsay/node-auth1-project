const db = require("./dbConfig");


module.exports = {
    find,
    findByUsername,
    add,
    update,
    remove
}

//resolves to an array of schemes
function find() {
    return db("users");
}

//resolves to a single scheme or null if the id is invalid
function findByUsername(un) {
    return db('users').where({ username: un }).first();
}

function add(user) {
   return db("users").insert(user);
}

function update(changes, id) {
    return db("users").where({ id }).update(changes);
}
  
function remove(id) {
    return db("users").where({ id }).delete();
}
