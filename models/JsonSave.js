const fs = require("fs");
const { collect } = require("collect");

module.exports = class JsonSave {

    filePath = '../files/'

    constructor() {
    }

    create(tableName, data) {
        data.id = generator.uuid();
        const fileData = fs.readFileSync(this.filePath + tableName)
        
        fs.writeFileSync(this.filePath + tableName, JSON.stringify(fileData));
        
        return data;
    }

    findOne(tableName, data) {
        const fileData = fs.readFileSync(this.filePath + tableName)
        return collect(fileData).where(data.key, data.value).first() || false        
    }

    findMany(tableName, data) {
        const fileData = fs.readFileSync(this.filePath + tableName)
        return collect(fileData).where(data.key, data.value) || false
    }

    list(tableName) {
        return fs.readFileSync(this.filePath + tableName)
    }

}