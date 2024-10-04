const { databases } = require('../config/appwrite');

const databaseId = 'apathbandava';
const collectionId = 'services';

exports.createService = async (req, res) => {
    const { name, description, location } = req.body;
    try {
        const service = await databases.createDocument(databaseId, collectionId, 'unique()', {
            name,
            description,
            location,
            user: req.user,
        });
        res.json(service);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getServices = async (req, res) => {
    try {
        const services = await databases.listDocuments(databaseId, collectionId);
        res.json(services.documents);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateService = async (req, res) => {
    const { name, description, location } = req.body;
    try {
        const service = await databases.updateDocument(databaseId, collectionId, req.params.id, {
            name,
            description,
            location,
        });
        res.json(service);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteService = async (req, res) => {
    try {
        await databases.deleteDocument(databaseId, collectionId, req.params.id);
        res.json({ msg: 'Service removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
