const axios = require('axios');

// console.log(axios);

axios.get("./assets/json/ln.json")
    .then(function (resolve) {
        console.log(resolve);
    }).catch(function (reject) {
        console.log(reject);
    })