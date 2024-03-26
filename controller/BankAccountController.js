const Controller = require(`./Controller`);
const BankAccount = require(`../models/BankAccount`);

module.exports = class BankAccountController extends Controller {
    constructor() {
        super();
        this.model = new BankAccount();
    }

    findByPerson(personId) {
        return this.Database.findMany({ key: 'person_id', value: personId })
    }
} 