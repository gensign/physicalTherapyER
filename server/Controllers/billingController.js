const getCPTCodes = async (req, res) => {
    console.log('Getting CPT Codes');
    console.log('');
    const db = req.app.get('db');
    // const { CPT_code, CPT_type } = req.body;
    const cptcodes = await db.get_cpt_codes();
    console.log('CPT codes: ', cptcodes);
    console.log('');
    res.status(200).send(cptcodes);
};

// getSingleCPTcode = async(req, res) => {
//     console.log('Getting Single CPT code');
//     console.log('');
//     const db =req.app.get('db');
//     const
// };

const getBilling = async (req, res) => {
    console.log('billing');
    console.log('');
    const db = req.app.get('db');
    const billing = db.get_bill();
    console.log('Billing: ', billing);
    console.log('');
    res.status(201).send('billing');
};

const addBilling = (req, res) => {
    console.log('Adding a Bill');
    console.log('');
    const db = req.app.get('db');
    const { cpt_code, cpt_type, units, pt_id } = req.body;
    console.log('cpt_code: ', cpt_code);
    console.log('');
};

module.exports = {
    getCPTCodes,
    getBilling,
    addBilling
};