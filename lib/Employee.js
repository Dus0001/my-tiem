class Employee {
    constructor(name = '', id, email) {
        
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName() {
        if(this.name){
            return this.name
        }
        console.log('Name error')
    }

    getID() {
        if(this.id){
            return this.id
        }
        console.log('ID error')
    }

    getEmail() {
        if(this.email){
            return this.email
        }
        console.log('Email error')
    }

    getRole() {
     return 'Employee'   
    }
}

module.exports = Employee;