const Model = require('./Model');

module.exports = class Person extends Model {
    constructor(data) {
        super();
        this.id = data?.id;
        this.name = data?.name;
        this.birthDate = data?.birthDate;
        this.cpf = data?.cpf;

        this.tableName = 'person.json';
    }

    attributes() {
        return ['id', 'name', 'birthDate', 'cpf']
    }
}