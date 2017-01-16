const firebase = require('firebase-admin');

firebase.initializeApp({
    credential: firebase.credential.cert(JSON.parse(process.env.FIREBASE_AUTH_DATA)),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    databaseAuthVariableOverride: {
        uid: process.env.FIREBASE_USER
    }
});

throw new Error("Not implemented.");