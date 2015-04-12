"use strict";

var v8  = require('v8');
v8.setFlagsFromString('--harmony_classes');
v8.setFlagsFromString('--harmony_object_literals');
v8.setFlagsFromString('--harmony_tostring');

var
  NoxiousCrypto = require('./NoxiousCrypto'),
  myObject = { path: './privatekey.json'},
  myCrypto = new NoxiousCrypto(myObject);

console.log('Crypto Key Size: ', myCrypto.keySize);
