var fs = require('fs')
module.exports = exports = function() {
    var store = {};
    var _create = function(id,data) {
        store[id] = data;
    }
    var _read = function(id) {
        return store[id]
    }
    var _update = function(id,data) {
        store[id] = data
    }
    var _delete = function(id) {
        delete store[id]
    }
    return {
        create : _create,
        read : _read,
        update : _update,
        delete : _delete
    }
}
