class User {
    constructor(name) {
        this.name = name + "_stuff";
        this.friends = [];
    }

    addAge(age) {
        if (age < 0) {
            throw new Error("impossible");
        }
        this.age = age;
    }

    addFriend(friend) {
        if (!this.friends.find(fr => fr.name === friend.name)) {
            this.friends.push(friend.name);
            console.log(friend);
            if (friend.addFriend) {
                friend.addFriend(this.name);
            }
        } else {
            return; // already friends
        }

    }
}

module.exports = User;