const {
    types,
    unprotect,
} = require("mobx-state-tree");
const {
    autorun,
} = require("mobx");

function mv(fnc) {
    return function() {
        console.log("\n\n");
        fnc();
    };
}

const mdl = types.model({
    firstName: types.string,
    lastName: types.string,
    nickname: types.maybeNull(types.string),
}).views((self) => ({
    get fullName() {
        return `${self.firstName} ${self.lastName}`;
    },
    get preferredName() {
        return self.nickname ? self.nickname : `${self.firstName} ${self.lastName}`;
    }
})).actions(function mdlActions(self) {
    function setFirstName(name) {
        self.firstName = name;
    }

    function setLastName(name) {
        self.lastName = name;
    }

    function setNickname(name) {
        self.nickname = name;
    }


    return {
        setFirstName,
        setLastName,
        setNickname,
    };
});

const mdlInstance = mdl.create({
    firstName: "John",
    lastName: "Doe",
});

autorun(() => {
    console.log("FULLNAME CHANGE: ", mdlInstance.fullName);
});

autorun(() => {
    console.log("PREFERRED NAME CHANGE: ", mdlInstance.preferredName);
});

setTimeout(mv(() => mdlInstance.setFirstName("Jane")), 2000);
setTimeout(mv(() => mdlInstance.setNickname("XebianTechie2019")), 4000);
setTimeout(mv(() => mdlInstance.setFirstName("Steve")), 10000);
setTimeout(mv(() => mdlInstance.setFirstName("Christy")), 11000);
setTimeout(mv(() => mdlInstance.setFirstName("Bill")), 12000);










setTimeout(mv(() => unprotect(mdlInstance)), 15000);
setTimeout(mv(() => {mdlInstance.nickname = "XebianGeek2019";}), 16000);
