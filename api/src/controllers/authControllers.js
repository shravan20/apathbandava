const { account } = require('../config/appwrite');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await account.create('unique()', email, password, name);
        const session = await account.createSession(email, password);
        res.json({ token: session.$id });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const session = await account.createSession(email, password);
        res.json({ token: session.$id });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
