const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);

        this.github = github;

    }

    getGitHub() {
        if (this.github) {
            return this.github
        }
        console.log('GitHub error');
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer