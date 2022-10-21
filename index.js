const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const teamArray = [];

const createManager = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name:'name',
            message: 'Enter the name of the Team Manager.',
            validate: nameInput => {
                if(nameInput){
                    return true;
                } 
                console.log('Please enter a name.')
                return false;
            }
        },
        {
            type: 'input',
            name: "id",
            Message: 'What is the ID# of the manager?',
            validate: idInput => {
                if(idInput) {
                    return true;
                }
                console.log('Please enter an id.')
                return false;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the Manager's email address.",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                }
                console.log('Please enter an email.')
                return false;
            }
        },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Enter the Manager's office number.",
                validate: officeNumberInput => {
                    if(officeNumberInput){
                        return true;
                    }
                    console.log('Please enter an office number.')
                    return false;
                }
            }
    ])
    .then(managerInput => {
        let manager = new Manager(managerInput.name, managerInput.id, managerInput.email, managerInput.officeNumber);
        teamArray.push(manager);
    });
};

const addEmployee = () => {
    inquirer
    .prompt([
        {
            type:'choice',
            name:'employee',
            message:'Which employee would you like to add?',
            choices:['Engineer', 'Intern'],
            validate: employeeSelection =>{
                if(employeeSelection){
                    return true;
                }
                console.log('Please choose an employee.')
                return false;
            }

        },
        {
            type:'input',
            name:'id',
            message:'Please enter an employee ID number.',
            validate: idInput => {
                if(idInput){
                    return true;
                }
                console.log('Please enter an ID number')
                return false;
            }
            
        },
        {
            type:'input',
            name:'email',
            message:'Please enter an employee email address',
            validate: emailInput =>{
                if(emailInput){
                    return true;
                }
                console.log('Please enter an email ')
                return false
            }
        },
        {
            type:'input',
            name:'github',
            message:'Please enter employee GitHub username.',
            when: (choice) => choice.employee === "Engineer",
            validate: githubInput => {
                if(githubInput){
                    return true
                }
                console.log("Please enter a GitHub username.");
                return false;
            }
        
        },
        {
            type:'input',
            name:'school',
            message:"What is the name of the Intern's school",
            when: (choice) => choice.employee === 'Intern',
            validate: schoolInput => {
                if(schoolInput){
                    return true
                }
                console.log('Please enter a School name.')
                return false
            }
        },
        {
            type:'confirm',
            name:'exit',
            message:'Do you want to add more teammates?',
            default: false,
        },
    ])
    .then(userInput => {
        if(userInput.employee === 'Engineer'){
            let engineer = new Engineer(userInput.employee, userInput.id,userInput.email,userInput.github);
            teamArray.push(engineer);
        
        } else if(userInput.employee === 'Intern'){
            let intern = new Intern(userInput.employee, userInput.id,userInput.email,userInput.github);
            teamArray.push(intern);
        };

        if(userInput.exit){
            return this.addEmployee
        } else {
            return teamArray;
        }
    });
    
}

createManager()
.then(addEmployee);