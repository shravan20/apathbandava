const { Client, Databases, Account } = require('appwrite');

const client = new Client();
client
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID);

const databases = new Databases(client);
const account = new Account(client);

module.exports = { client, databases, account };
