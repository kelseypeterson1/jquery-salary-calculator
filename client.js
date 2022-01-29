$(document).ready(readyNow);

function readyNow() {
    $('input').on('click', emptyInput);
    $('#submit').on('click', addEmployee);
}

let deleteButton = "<button id=deleteButton>delete</button>"

function addEmployee() {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();
    
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

function deleteEmployee () {
    $(this).row.empty();
}