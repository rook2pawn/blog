module.exports = exports = function() {
    var store = {};
    var create = function(id,data) {
        store[id] = data;
    }
    var read = function(id) {
        return store[id]
    }
    var update = function(id,data) {
        store[id] = data
    }
    var delete = function(id) {
        delete store[id]
    }
    return {
        create : create,
        read : read,
        update : update,
        delete : delete
    }
}
