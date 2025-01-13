function showTable(){
    table = document.getElementsByClassName('showTable')[0];
    my = document.getElementById("settings");
    runSim = document.getElementById("runSim")

    isActive = table.classList.contains('active');
    if(!isActive){my.innerText = "Menu" 
    runSim.innerText = "LOLLLLLL"}else{my.innerText = "Settings" 
    runSim.innerText = "Run Sim"}
    
    table.classList.toggle('active');
    // runSim.classList.toggle('active');
    // debugger;
}