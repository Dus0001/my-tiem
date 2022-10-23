const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateHTML = require('./src/generateHtml');
const teamArray = [];

const createManager = () => {
    return inquirer
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
            },
    ])
    .then(managerInput => {
        let manager = new Manager(managerInput.name, managerInput.id, managerInput.email, managerInput.officeNumber);
        teamArray.push(manager);
    });
};

const addEmployee = () => {
    return inquirer
    .prompt([
        {
            type:'list',
            name:'role',
            message:'Which employee would you like to add?',
            choices:['Engineer', 'Intern'],
            validate: employeeSelection => {
                if(employeeSelection){
                    return true;
                }
                console.log('Please choose an employee.')
                return false;
            }

        },
        {
            type:'input',
            name:'name',
            message: 'Please enter the employee name.',
            validate: nameInput => {
                if(nameInput){
                    return true;
                }
                console.log('Please enter an employee name.')
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
                console.log('Please enter an email.')
                return false;
            }
        },
        {
            type:'input',
            name:'github',
            message:'Please enter employee GitHub username.',
            when: (choice) => choice.role === "Engineer",
            validate: githubInput => {
                if(githubInput){
                    return true;
                }
                console.log("Please enter a GitHub username.");
                return false;
            }
        
        },
        {
            type:'input',
            name:'school',
            message:"What is the name of the Intern's school",
            when: (choice) => choice.role === 'Intern',
            validate: schoolInput => {
                if(schoolInput){
                    return true;
                }
                console.log('Please enter a School name.');
                return false;
            }
        },
        {
            type:'confirm',
            name:'exit',
            message:'Do you want to add more teammates?',
            
        },
    ])
    .then(userInput => {
        if(userInput.role === 'Engineer'){
            let engineer = new Engineer(userInput.name, userInput.id,userInput.email,userInput.github);
            teamArray.push(engineer);
        
        } else if(userInput.role === 'Intern'){
            let intern = new Intern(userInput.name, userInput.id,userInput.email,userInput.school);
            teamArray.push(intern);
        };

        if(userInput.exit){
            return addEmployee(teamArray)
        } else {
            return teamArray;
        };
    });
    
};
const writeToFile= teamArray => {

        fs.writeFile('./dist/index.html', teamArray, err => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Check out your new page!');
        });
    
};

createManager()
.then(addEmployee)
   .then(teamArray => {
    console.log(teamArray);
    return generateHTML(teamArray)
   })
.then(index => {
    console.log(index);
    return writeToFile(index)
})