// Initializing jQuery
$(document).ready(readyNow);

// jQuery functions to trigger on click
function readyNow() {
    $('input').on('click', emptyInput);
    $('#submit').on('click', addEmployee);
}

let deleteButton = "<button class=\"deleteButton\">delete</button>"
let totalMonthlySalary = 0;

// Clicking the add employee button will trigger this function
// It creates a new row of employee information based on inputs and creates a delete button
// It also triggers the function to clear the inputs and refresh the monthly total
function addEmployee() {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let annualSalary = Number($('#annualSalary').val());
    
    let monthlySalary = annualSalary / 12;
    totalMonthlySalary += monthlySalary

    updateTotal(totalMonthlySalary);
    $('#tableContent').append("<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + id + "</td><td>" + title + "</td><td>" + annualSalary + "</td><td>" + deleteButton + "</td></tr>")
    refreshInputBoxes();

    $('.deleteButton').on('click', deleteEmployee)
}

// Empties input fields
// Changes the input fields' font color to gray
function refreshInputBoxes() {
    $('#firstName').val('First Name');
    $('#lastName').val('Last Name');
    $('#id').val('ID');
    $('#title').val('Title');
    $('#annualSalary').val('Annual Salary');
    $('input').removeClass();
}

// Triggered when a delete button is pressed
// Removes employee's row
// Re-calculates monthly total
function deleteEmployee() {
    let annualSalary = ($(this).closest('td').prev().text());
    let monthlySalary = Number(annualSalary / 12);
    totalMonthlySalary -= monthlySalary; // NEED TO UPDATE
    updateTotal(totalMonthlySalary);
    $(this).parents('tr').empty();
}

// Rounds monthly total to the nearest dollar
function updateTotal(monthlyTotal) {
    totalMonthlySalary = Math.round(monthlyTotal);
    $('#totalMonthly').text('Total Monthly: $' + totalMonthlySalary);
}

// Triggered when user clicks input field
// Empties input field and reverts the font color to black
function emptyInput() {
    $(this).val('');
    $(this).addClass('writing-input');
}