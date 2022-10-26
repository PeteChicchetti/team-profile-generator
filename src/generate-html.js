function generateSite(teamMembers) {
    const html = [];

    function generateManager(manager) {
        let managerHtml = `
        <div class="card col">
                        <div class="card-header">
                            ${manager.getName()}, ${manager.getRole()}
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${manager.getId()}</li>
                                <li class="list-group-item">Email: <span id='email'><a href='mailto:${manger.getEmail()}'> ${manger.getEmail()}</a></span></li>
                                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                            </ul>
                        </div>
                    </div>
                `
    }

}






`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    </head>
    <body>
    <!----- Jumbotron ----->    
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">My Team</h1>
            </div>
        </div>
    <!----- Team Cards -----> 
        <div class="d-flex justify-content-center"> 
                <div class="row container-fluid">
            <!----- Card 1 ----->         
                    <div class="card col">
                        <div class="card-header">
                            ${manager.getName()}, ${manager.getRole()}
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${manager.getId()}</li>
                                <li class="list-group-item">Email: ${manger.getEmail()}</li>
                                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                            </ul>
                        </div>
                    </div>
            <!----- Card 2 ----->
                    <div class="card col">    
                        <div class="card-header">
                            ${engineer.getName()}, ${engineer.getRole()}
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${engineer.getId()}</li>
                                <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                                <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
                            </ul>
                        </div>
                    </div>
            <!----- Card 3 ----->
                    <div class="card col">
                        <div class="card-header">
                            ${intern.getName()}, ${intern.getRole()}
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${intern.getId()}</li>
                                <li class="list-group-item">Email: ${intern.getEmail()}</li>
                                <li class="list-group-item">School: ${intern.getSchool()}</li>
                            </ul>
                        </div>        
                    </div>
    
                </div>
        </div>    
            
              
    
        
    </body>
    </html>`