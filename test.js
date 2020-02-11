let myFetch = require("./umd");

myFetch.get();

myFetch.init({
    adress: "https://require.in/users?page2",
    key: 1234
});

myFetch.get("1").then(result => console.log(result))