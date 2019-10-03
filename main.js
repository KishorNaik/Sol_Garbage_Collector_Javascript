var userObj = {
    firstName: "Kishor",
    lastName: "Naik",
    onDisplay: function () {
        console.log(this.firstName);
        console.log(this.lastName);
    }
}

userObj.onDisplay();

//userObj = undefined; // Remove Object from Memory

// Run time Exception
userObj.onDisplay();



