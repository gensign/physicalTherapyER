const getAllpt = async (req, res) => {
    console.log('Getting All pt');
    console.log('');
    const db = req.app.get('db');
    const pts = await db.find_all_patients();
    console.log('patients: ', pts);
    console.log('');
    res.status(200).send(pts);
};

// currently not working
const getSinglept = async (req, res) => {
    console.log('Getting Single Pt');
    console.log('');
    const db = req.app.get('db');
    const { pt_id } = req.body;
    console.log('pt ID: ', pt_id);
    console.log('');
    const singlePt = await db.find_single_patient([pt_id]);
    console.log('singel Patient: ', singlePt);
    console.log('');
    res.status(200).send(singlePt);
};

// currently not working
const getUserspt = async (req, res) => {
    console.log('Getting Users patients');
    console.log('');
    const db = req.app.get('db');
    const { user_id } = req.body;
    console.log('user ID: ', user_id);
    console.log('');

};

const addpt = (req, res) => {
    console.log('Adding a patient');
    console.log('');
    const db = req.app.get('db');
    const { pt_code, user_id } = req.body;
    console.log('pt_code: ', pt_code);
    console.log('');
    const addPt = db.add_patient([pt_code, user_id]);
    console.log('Patient: ', addPt);
    console.log('');
    res.status(200).send(addPt);
};

const deletept = async (req, res) => {
    console.log('Deleting patient');
    console.log('');
    const db = req.app.get('db');
    const { pt_id } = req.params;
    console.log('pt_id: ', pt_id);
    console.log('');
};

module.exports = {
    getAllpt,
    getSinglept,
    getUserspt,
    addpt,
    deletept
};