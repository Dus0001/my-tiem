const generateHTML = teamData => {
    
    function renderManager(manager){

    };

    function renderEngineer(engineer){

    };

    function renderIntern(intern){

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