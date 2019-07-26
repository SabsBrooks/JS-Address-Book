"use strict";

class AddressBook {
    constructor() {
    this.contacts = [];
    }

    add(name, email, phone, relation) {
        let newContact = new Contact(name, email, phone, relation);
        this.contacts.push(newContact);
    }

    delete(name) {
        const index = this.contacts.findIndex(contact => {
            return contact.name === name;
        });
        if (index >= 0) {
            this.contacts.splice(index, 1);
        }
    }

    print() {
        for (let i = 0; i < this.contacts.length; i++) { // can also use for each and for of
            console.log(this.contacts[i]);
        }
    }
}

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this. relation = relation;
    }
}

const addressBook = new AddressBook();
addressBook.add("Kristina", "@gmail.com", 1234567890, "My love");
addressBook.add("Oakley", "none", 10101010, "My dog");
addressBook.print();
addressBook.delete("Oakley");
addressBook.print();

