const DB = require('../models/JsonSave')

module.exports = class Controller {
    
    Database = new DB();
    
    constructor() { }

    save(data) {
        data = this.model.serialize(data);
        if (data.id)
            return this.update(data);

        return this.create(data);
    }

    create(data) {
        return this.Database.create(this.model.tableName, data);
    }

    find(data) {
        return this.Database.findOne(this.model.tableName, data)
    }

    update(data) {
    }

    delete(data) {
    }

    list() {
        return this.Database.list(this.model.tableName);
    }
}