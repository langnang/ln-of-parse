axios
    .all([
        axios.get(), axios.get()
    ])
    .then(axios.spread(function (acct, perms) {
        // 两个请求现在都执行完成
    }));