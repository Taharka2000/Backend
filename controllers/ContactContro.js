const Contact = require("../Models/Contact");

module.exports.addContact = async (req, res) => {
    try {
        const contact = await Contact.create(req.body); // Créer un nouveau contact à partir des données reçues dans la requête
        res.status(200).json(contact); 
    } catch (err) {
        console.error('Error in addContact function:', err);
        res.status(500).json({ error: 'Internal Server Error' }); 
    }
};

module.exports.findContact = async (req, res) => {
    try {
        const contact = await Contact.find({}); 
        res.json(contact); 
    } catch (err) {
        console.error('Error in findContact function:', err);
        res.status(500).json({ error: 'Internal Server Error' }); // En cas d'erreur, retourner une erreur 500 avec un message d'erreur
    }
};

module.exports.findByIdContact = async (req, res) => {
    const id = req.params.id;
    try {
        const contact = await Contact.findById(id); // Trouver un contact par son ID
        if (!contact) {
            return res.status(404).json({ message: "Contact not found" }); // Si le contact n'est pas trouvé, retourner une erreur 404
        }
        res.json(contact); // Si le contact est trouvé, le retourner en tant que réponse JSON
    } catch (err) {
        console.error('Error in findByIdContact function:', err);
        res.status(500).json({ error: 'Internal Server Error' }); // En cas d'erreur, retourner une erreur 500 avec un message d'erreur
    }
};

module.exports.updateContact = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedContact = await Contact.findByIdAndUpdate(id, req.body, { new: true }); // Mettre à jour le contact avec les nouvelles données
        if (!updatedContact) {
            return res.status(404).json({ message: "Contact not found" }); // Si le contact n'est pas trouvé, retourner une erreur 404
        }
        res.json(updatedContact); // Retourner le contact mis à jour en tant que réponse JSON
    } catch (err) {
        console.error('Error in updateContact function:', err);
        res.status(500).json({ error: 'Internal Server Error' }); // En cas d'erreur, retourner une erreur 500 avec un message d'erreur
    }
};
module.exports.deleteContact = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedContact = await Contact.findByIdAndDelete(id); // Recherchez le contact par son ID et supprimez-le
        if (!deletedContact) {
            return res.status(404).json({ message: "Contact not found" }); // Si le contact n'est pas trouvé, retournez une erreur 404
        }
        res.json({ message: "Contact deleted successfully" }); // Si le contact est supprimé avec succès, retournez un message de succès
    } catch (err) {
        res.status(500).json({ message: err.message }); // En cas d'erreur, retournez une erreur 500 avec le message d'erreur
    }
};