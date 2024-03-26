const express = require('express');
const router = express.Router();

const PersonController = require(`./controller/PersonController`);
const BankAccountController = require(`./controller/BankAccountController`);
const ContactController = require(`./controller/ContactController`);


// Persons ----------------------------------------------------------------
router.get('/person/:id', async (req, res) => {
    // const person = await (new PersonController()).find({ key: 'id', value: req.params.id })
    res.render('person', { person: {} });
});

router.post('/person', async (req, res) => {
    const response = await (new PersonController()).save({ ...req.body });
    res.send(response);
});

router.get('/persons', async (req, res) => {
    const response = await (new PersonController()).list();
    res.send(response);
});


// BankAccounts ----------------------------------------------------------------
router.get('/bankAccount/:id', async (req, res) => {
    const person = await (new BankAccountController()).find({ key: 'id', value: req.params.id })
    res.render({ person: person });
});

router.post('/bankAccount', async (req, res) => {
    const response = await (new BankAccountController()).save({ ...req.body });
    res.send(response);
});

router.get('/bankAccount', async (req, res) => {
    const response = await (new BankAccountController()).list();
    res.send(response);
});


// Contacts ----------------------------------------------------------------
router.get('/contact/:id', async (req, res) => {
    const person = await (new ContactController()).find({ key: 'id', value: req.params.id })
    res.render({ person: person });
});

router.post('/contact', async (req, res) => {
    const response = await (new ContactController()).save({ ...req.body });
    res.send(response);
});

router.get('/contacts', async (req, res) => {
    const response = await (new ContactController()).list();
    res.send(response);
});


module.exports = router;