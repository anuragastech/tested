
// var i=0;

var ca = [];
// Declare an empty array to store incomes

function addincome() {
    var cat = document.sample.catogary.value;
    var income = document.sample.incomes.value;

    var table = document.getElementById("dataTable");
    var newRow = table.insertRow(table.rows.length);

    var categoryCell = newRow.insertCell(0);
    categoryCell.innerHTML = cat;

    var incomeCell = newRow.insertCell(1);
    incomeCell.innerHTML = income;

    // Calculate the sum of incomes


    // Store the value in the array
    ca.push(income);

    var sum0 = 0;
    for (var i = 0; i < ca.length; i++) {
        sum0 += parseFloat(ca[i]);
    }

    // Display the sum of incomes
    var sumCell = newRow.insertCell(2);
    // sumCell.innerHTML = "Sum is " + sum0;

    document.sample.catogary.value = "";
    document.sample.incomes.value = "";
    // up(sum0);
    // totel(sum0)

    var sumofincome = newRow.reduce(function (total, current) {
        return total + current;
    })


    document.getElementById('text1').innerHTML = 'Total Income is: ' + sumofincome + '/-';
}

// *****2





var na = [];
// var i = 0; 

function addexpense() {
    var cat2 = document.sample1.catogary1.value;
    var expense = document.sample1.expense.value;

    var table2 = document.getElementById("dataTable1");
    var newRow2 = table2.insertRow(table2.rows.length);

    var categoryCell2 = newRow2.insertCell(0);
    categoryCell2.innerHTML = cat2;

    var expenseCell2 = newRow2.insertCell(1);
    expenseCell2.innerHTML = expense;


    na.push(expense); // Store the value in the array
    // Calculate the sum 
    var sum = 0;

    for (var i = 0; i < na.length; i++) {
        sum += parseFloat(na[i]);
    }

    // Display the sum
    var sumCell1 = newRow2.insertCell(2);
    sumCell1.innerHTML = "Sum is " + sum;




    document.getElementById("a").value = "";
    // up(sum);
    totel(sum)
}


function totel(sum, sum0) {

    // var x =newRow.insertCell(2);
    // sumCell.innerHTML = "Sum is " + sum0;
    // var j =newRow2.insertCell(2);
    // sumCell1.innerHTML = "Sum is " + sum;

    // const xvalues =[x,j];
    update(sum, sum0);



}



// function addexpense() {
//     na[i] = document.getElementById("a").value; 
//     i++;                                        
//     document.getElementById("a").value = "";  


//     // Clear the input field
// }




const z = document.getElementById("pie-chart");

// z.style.height="200px";
// z.style.width="400px";

function update(sum0, sum) {
    new Chart(z, {
        type: 'pie',
        data: {
            labels: ["income", "expense"],
            datasets: [{
                backgroundColor: ["#e63927", "#25692d"],

                data: [sum, sum0],
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Pie Chart for Action Panel'
            },
            responsive: true,
        }
    });

}

