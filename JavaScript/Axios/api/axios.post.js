axios.post("./package.json", {})
    .then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    })