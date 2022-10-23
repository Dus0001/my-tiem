const Employee = require('../lib/Employee')

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    
    }

    getofficeNumber() {
        if(this.officeNumber) {
            return this.officeNumber
        }
        console.log('Office number error')
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;