const Model = require('./Model');

module.exports = class BankAccount extends Model {
    constructor(data) {
        super();
        this.id = data?.id;
        this.person_id = data?.person_id;
        this.type = data?.type;
        this.bank_code = data?.bank_code;
        this.agency = data?.agency;

        this.tableName = 'contact';
    }

    attributes() {
        return ['id', 'type', 'bank_code', 'agency'];
    }
}
