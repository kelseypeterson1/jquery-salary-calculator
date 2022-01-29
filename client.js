$(document).ready(readyNow);

function readyNow() {
    $('input').on('click', emptyInput);
    $('#submit').on('click', addEmployee);
}

let deleteButton = "<button id=deleteButton>delete</button>"
let totalMonthlySalary = 0;

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

    $('#deleteButton').on('click', deleteEmployee)
}

function emptyInput() {
    $(this).val('');
    $(this).addClass('writing-input');
}

function refreshInputBoxes() {
    $('#firstName').val('First Name');
    $('#lastName').val('Last Name');
    $('#id').val('ID');
    $('#title').val('Title');
    $('#annualSalary').val('Annual Salary');
}

function deleteEmployee() {
    let annualSalary = ($(this).closest('td').prev().text());
    let monthlySalary = Number(annualSalary / 12);
    let newTotalSalary = oldTotalSalary - monthlySalary;
    updateTotal(newTotalSalary);
    $(this).parents('tr').empty();
}

function updateTotal(monthlyTotal) {
    monthlyTotal = Math.round(monthlyTotal);
    $('#totalMonthly').text('Total Monthly: $' + monthlyTotal);
}
