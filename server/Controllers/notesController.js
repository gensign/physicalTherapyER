const getAllNotes = (req, res) => {
    console.log('Getting All notes');
    console.log('');
};

const getSingleNote = async(req, res) => {
    console.log('Getting Single Note');
    console.log('');
};

const addNote = (req, res) => {
    console.log('Adding Note');
    console.log('');
};

const updateNote = async(req, res) => {
    console.log('Updating Note');
    console.log('');
};

const deleteNote = async(req, res) => {
    console.log('Deleting Note');
    console.log('');
}

module.exports = {
    getAllNotes,
    getSingleNote,
    addNote,
    updateNote,
    deleteNote
};