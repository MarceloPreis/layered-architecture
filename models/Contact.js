const Model = require('./Model');

module.exports = class Contact extends Model {
    constructor(data) {
        super();
        this.id = data?.id;
        this.address = data?.address;
        this.phone = data?.phone;
        this.email = data?.email;

        this.tableName = 'contact';
    }

    attributes() {
        return ['id', 'address', 'phone', 'email'];
    }
}
