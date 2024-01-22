const users = [
    {
        id: 1,
        username: "bsmithw3",
        email: "bsmith@mail.com",
        password: "bsmithw3_2023",
        name: "Brandon Smith"
    },
    {
        id: 2,
        username: "swoow3",
        email: "swoo@mail.com",
        password: "swoo_w3schools",
        name: "Samantha Woo"
    }
]

// Check if username exists, then if the password matches
exports.loginAuthCheck = (req, res) => {
    for (let user of users) {
        if (req.body.username == user.username) {
            if (req.body.password === user.password) {
                return res.send("Login successful");
            } else {
                return res.send("Login failed");
            }
        }
    }
    res.send("Username not found");
}

// Make sure that the username doesn't already exist
// Check if all fields exist
// Add the user to users array
exports.registerNewUser = (req, res) => {
    for (let user of users) {
        if (req.body.username == user.username) {
            return res.send("Sorry, that username already exists.  Please choose a new username!");
        }
    }

    if (req.body.username && req.body.email && req.body.password && req.body.name) {
        let newUser = {
            id : Number(users[users.length - 1].id) + 1,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        }
        users.push(newUser);
        return res.send("User registered");
    } else {
        return res.send("You need a username, email, password, and name field.")
    }
};
    
exports.showAllUsers = (req, res) => {
    res.json(users);
};