const generateHTML = teamData => {
    
    function renderManager(manager){
        return `
        <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">School: ${manager.getSchool()}</li>
            </ul>
        </div>
    </div>
        `

    };

    function renderEngineer(engineer){
       return `
        <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">School: ${engineer.getSchool()}</li>
            </ul>
        </div>
    </div>
        `

    };

    function renderIntern(intern){
        return `
        <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
        `
    };



 const createTeamCard = (teamData) => {
    let teamCard = [];

    for(i=0; i < teamData.length; i++) {
        if(teamData.getrole() === 'Manager'){
            const managerCard = renderManager(teamData[i]);
            teamCard.push(managerCard);
        };
        if(teamData.getrole() === 'Engineer'){
            const engineerCard = renderEngineer(teamData[i]);
            teamCard.push(engineerCard);
        };
        if(teamData.getrole() === 'Intern'){
            const internCard = renderIntern(teamData[i]);
            teamCard.push(internCard);
        };
    };

 };

 const renderFinalHTML = (employeeCard) => {`

 `};

 const employeeCard = teamCard.join('')
 const finalHtml = renderFinalHTML(employeeCard);
 return finalHtml;

};

 module.exports = generateHTML();