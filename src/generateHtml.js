const renderManager = function(manager) {
        return `
        <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
        `
};
    

const renderEngineer= function(engineer) {
       return `
        <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">GitHub: ${engineer.github}</li>
            </ul>
        </div>
    </div>
        `
};

const renderIntern = function(intern) {
        return `
        <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${intern.name}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
        `
};



createTeamCard = (teamArray) => {
    let teamCard = [];
    
    for(let i=0; i<teamArray.length; i++ ){
        if(teamArray[i].getRole() === 'Manager'){
            const manager = renderManager(teamArray[i]);
            teamCard.push(manager);
        } else if(teamArray[i].getRole() === 'Engineer'){
            const engineer = renderEngineer(teamArray[i]);
            teamCard.push(engineer);
        } else if(teamArray[i].getRole() === 'Intern'){
            const intern = renderIntern(teamArray[i]);
            teamCard.push(intern);
        }
    };
    

   const employeeCard = teamCard.join('');
   const finalHTML = renderFinalHTML(employeeCard)
   return finalHTML;
};

function renderFinalHTML(employeeCard) {
    return `
 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>My Team</title>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
     <link rel="stylesheet" href="./style.css">
 </head>
 <body>
     <header class="bg-danger">
         <h1 class="text-center text-white">My Team</h1>
     </header>
     <main>
         <div class="container">
             <div class="row">
                 <div class="row team-area col-12 d-flex justify-content-center">
                     ${employeeCard}
                     
                     
                 </div>
                 </div>
             </div>
         </div>
 
     </main>
     
 </body>
 </html>
`};

 module.exports = createTeamCard;