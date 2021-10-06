var persons = []; 
var salaries = []; 

function addSalary(){
    var person = $("employees").value;
    persons.push(person); 

    var salary = prompt("Please enter salary for " + person);
    while(validEntry(salary)){
        salary = prompt("Please enter a valid number: "); 
    }
    salaries.push(salary); 
}

function displayResults(){
    alert("displayResults" + persons);
    //const title1 = document.createElement("h2");
    //title1.textContent = "The average salary is: ";
    //const node1 = document.createTextNode("The average salary is: ");
    //title1.appendChild(node1);
    //const results = $("results");
    //results.appendChild(title1);

    //add h2 title for average salary
    var results = $("results"); 
    var title1 = document.createElement("h2"); 
    title1.textContent = "The average salary is: ";
    results.appendChild(title1); 
    //results.insertBefore(title1, document.getElementById("average")); 

    //find the average salary & display to <p>
    var sum = 0; 
    for(var i = 0; i < salaries.length; i++){
        sum += salaries[i]; 
    }
    var average = sum/salaries.length; 

    alert("displayResults: average " + average);
    $("average").innerHTML = average; 

    //add h2 title for highest salary
    var title2 = document.createElement('h2'); 
    title2.textContent = "The hightest salary is: ";
    results.insertBefore(title2, $("highest")); 

    //find the highest salary & display to <p>
    salaries.sort(function(a,b){return a - b}); 
    var highest = salaries[salaries.length-1];
    $("highest").innerHTML = highest; 
    alert("displayResults: highest " + highest);
}

function displaySalary(){
    //get the names and values from the arrays and display them as rows
    for(var i = 0; i < persons.length; i++){
        for(var j = 0; j < salaries.length; j++){
            var table = $('results_table');
            var row = table.insertRow(0);
            alert("displaySalary row");
            var cellName = row.insertCell(0);
            var cellSalary = row.insertCell(1);
            cellName.innerHTML = persons[i];
            cellSalary.innerHTML = salaries[j];
            //alert("displaySalary cellName" + cellName);
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

var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function(){
    $('addSalary').onclick = addSalary; 
    $('displayResults').onclick = displayResults; 
    $('displaySalary').onclick = displaySalary; 
}

