const getCPTCodes = (req, res) => {
    console.log('Getting CPT Codes');
    console.log('');
    const db = req.app.get('db');
    // const { CPT_code, CPT_type } = req.body;
    const cptcodes = db.get_cpt_codes();
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
};

module.exports = {
    getCPTCodes,
    getBilling
};