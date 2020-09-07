const fs = require('fs');
const User = require('./user.js');

const callbackFn = () => {
    console.log("success");
}

const firstUser = new User('Petras');
firstUser.addAge(55);
const secondUser = new User('Jonas');
firstUser.addFriend(secondUser);

fs.writeFile('users.txt', JSON.stringify(firstUser), {}, callbackFn);