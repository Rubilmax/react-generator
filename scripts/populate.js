require('dotenv').config();

const firebase = require('firebase/app');
require('firebase/firestore');

console.log('Starting firebase...');

firebase.initializeApp({
  apiKey: 'AIzaSyAJpUfYAe46sGj3GZeAzpAJr7OCxDuflFI',
  authDomain: 'balance-b7333.firebaseapp.com',
  databaseURL: 'https://balance-b7333.firebaseio.com',
  projectId: 'balance-b7333',
  storageBucket: 'balance-b7333.appspot.com',
  messagingSenderId: '282059513800',
  appId: '1:282059513800:web:4683da2fdee5e03649aafd',
  measurementId: 'G-955DXM1L4M',
});

const mockData = require('./database.populate.json');

const getPathsValues = (obj, currentPath) =>
  Object.keys(obj).reduce(
    (paths, key) => ({
      ...paths,
      ...(typeof obj[key] === 'object' && typeof obj[key][Object.keys(obj[key])[0]] === 'object'
        ? getPathsValues(obj[key], `${currentPath}/${key}`)
        : { [`${currentPath}/${key}`]: obj[key] }),
    }),
    {},
  );

console.log('Populating development database...');

const flatData = getPathsValues(mockData, '');

Object.keys(flatData).forEach(async (path) => {
  await firebase.firestore().doc(`dev/localhost${path}`).set(flatData[path]);
});
