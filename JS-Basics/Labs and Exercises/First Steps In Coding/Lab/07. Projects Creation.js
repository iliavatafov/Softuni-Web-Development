function projectsCreation(input) {
    
    let architechtName = input[0];
    let numberOfProjects = parseInt(input[1]);
    let timeForOneProject = 3;
    let totalHours = numberOfProjects * timeForOneProject;
    console.log(`The architect ${architechtName} will need ${totalHours} hours to complete ${numberOfProjects} project/s.`);

}