var persons = []; 
var salaries = []; 

function addSalary(){
    var person = document.getElementById("employees").value;
    persons.push(person); 

    var salary = prompt("Please enter salary for " + person);
    while(validEntry(salary)){
        salary = prompt("Please enter a valid number: "); 
    }
    salaries.push(salary); 
}

function displayResults(){
    //add h2 title for average salary
    const results = document.getElementById("results"); 
    var title1 = document.createElement('h2'); 
    title1.textContent = "The average salary is: ";
    results.insertBefore(title1, document.getElementById("average")); 

    //find the average salary & display to <p>
    var sum = 0; 
    for(var i = 0; i < salaries.length; i++){
        sum += salaries[i]; 
    }
    var average = sum/salaries.length; 
    document.getElementById("average").innerHTML = average; 

    //add h2 title for highest salary
    var title2 = document.createElement('h2'); 
    title2.textContent = "The hightest salary is: ";
    results.insertBefore(title2, document.getElementById("highest")); 

    //find the highest salary & display to <p>
    salaries.sort(function(a,b){return a - b}); 
    var highest = salaries[salaries.length-1];
    document.getElementById("highest").innerHTML = highest; 
}

function displaySalary(){
    //get the names and values from the arrays and display them as rows
    for(var i = 0; i < persons.length; i++){
        for(var j = 0; j < salaries.length; j++){
            var table = document.getElementById("results_table");
            var row = table.insertRow(0);
            var cellName = row.insertCell(0);
            var cellSalary = row.insertCell(1);
            cellName.innerHTML = persons[i];
            cellSalary.innerHTML = salaries[j];
        }
    }
}

function validEntry(entry){
    //data validation for add function
    var valid = false; 
    if(isNaN(entry) || entry == null){
        valid = true; 
    }
    return valid; 
}

//Make application move the cursor to the name field 
//when the application starts and after a name and salary have been added, 
//or when the the user clicks the add button.  

window.onload = function(){
    document.getElementById('addSalary').onclick = addSalary; 
    document.getElementById('displayResults').onclick = displayResults; 
    document.getElementById('displaySalary').onclick = displaySalary; 
}

alert("Persons: " + persons);