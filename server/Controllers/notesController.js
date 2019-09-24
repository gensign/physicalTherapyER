const getAllNotes = (req, res) => {
    console.log('Getting All notes');
    console.log('');
    const db = req.app.get('db');
    const getNotes = db.get_all_notes();
    console.log('All notes: ', getNotes);
    console.log('');
    res.status(200).send(getNotes);
};

const getSingleNote = async (req, res) => {
    console.log('Getting Single Note');
    console.log('');
    const db = req.app.get('db');
    const { id } = req.params
    const getSingleNote = await db.get_single_note([id]);
    console.log('SingleNote: ', getSingleNote);
    console.log('');
    res.status(200).send(getSingleNote);
};

const addNote = async (req, res) => {
    console.log('Adding Note');
    console.log('');
    const db = req.app.get('db');
    const { pid } = req.params
    console.log('pid: ', pid);
    console.log('');
    const { subjective, objective, assessment, plan } = req.body;
    console.log('subjective: ', subjective);
    console.log('');
    const addNote = await db.create_note([pid, subjective, objective, assessment, plan]);
    console.log('Add Note: ', addNote);
    console.log('');
    res.status(200).send(addNote);
};

const updateNote = async (req, res) => {
    console.log('Updating Note');
    console.log('');
    const db = req.app.get('db');
    const { id } = req.params;
    console.log('id: ', id);
    console.log('');
    if (id < 0) {
        return res.status(404).send('Data not found');
    }
    console.log('Data Found');
    console.log('');
    const { subjective, objective, assessment, plan } = req.body;
    const editNote = await db.edit_note([subjective, objective, assessment, plan, id]);
    console.log('editNote: ', editNote);
    console.log('');
    res.status(200).send(editNote);
};

const deleteNote = async (req, res) => {
    console.log('Deleting Note');
    console.log('');
    const db = req.app.get('db');
    const { id } = req.params;
    console.log('id: ', id);
    console.status('');
    const deleteNote = await db.delete_note([id]);
    console.log('deleteNote: ', deleteNote);
    console.log('');
    res.sendStatus(200);
};

module.exports = {
    getAllNotes,
    getSingleNote,
    addNote,
    updateNote,
    deleteNote
};