const getCPTCodes = async (req, res) => {
    console.log('Getting CPT Codes');
    console.log('');
    const db = req.app.get('db');
    const cptcodes = await db.get_cpt_codes();
    console.log('CPT codes: ', cptcodes);
    console.log('');
    res.status(200).send(cptcodes);
};

const getBilling = async (req, res) => {
    console.log('billing');
    console.log('');
    const db = req.app.get('db');
    const {pid, id} = req.params;
    console.log('id: ', id);
    console.log('');
    const billing = await db.get_bill([pid, id]);
    console.log('Billing: ', billing);
    console.log('');
    res.status(200).send('billing');
};

const addBilling = async (req, res) => {
    console.log('Adding a Bill');
    console.log('');
    const db = req.app.get('db');
    const { pid } = req.params;
    console.log('pid: ', pid);
    console.log('');
    const { cpt_code, units } = req.body;
    console.log('cpt_code: ', cpt_code);
    console.log('');
    const addBill = await db.create_bill([parseInt(cpt_code), parseInt(units), parseInt(pid)]);
    console.log('addBill: ', addBill);
    console.log('');
    res.status(200).send(addBill);
};

module.exports = {
    getCPTCodes,
    getBilling,
    addBilling
};