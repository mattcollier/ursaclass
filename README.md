# ursaclass
Testing ursa in an ES6 class

##OSX Dependencies
```
brew install openssl
```

##io.js Dependencies
```
npm install pangyp -g
```

##Instructions
- clone this repository
- cd ursaclass
- npm install --ignore-scripts
- cd node_modules/ursa
- pangyp rebuild
- cd ../..
- node main

If it runs properly you will see: 'Crypto Key Size:  3072'

If it does not work properly, you may see an error like this: http://hastebin.com/ujosomufav.pl
