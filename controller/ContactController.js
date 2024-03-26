const Controller = require(`./Controller`);
const Contact = require(`../models/Contact`);

module.exports = class ContactController extends Controller {
    constructor() {
        super();
        this.model = new Contact();
    }

    findByPerson(personId) {
        return this.Database.findMany({ key: 'person_id', value: personId })
    }
} 