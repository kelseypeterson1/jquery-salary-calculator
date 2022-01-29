$(document).ready(readyNow);

function readyNow() {
    $('input').on('click', emptyInput)
    $('#submit').on('click', addEmployee)
}

function addEmployee() {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();
    
    $('#tableContent').append("<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + id + "</td><td>" + title + "</td><td>" + annualSalary + "</td></tr>")
    refreshInputBoxes();
}

function emptyInput() {
    $(this).val('');
    $(this).toggleClass('writing-input');
}

function refreshInputBoxes() {
    $('#firstName').val('First Name');
    $('#lastName').val('Last Name');
    $('#id').val('ID');
    $('#title').val('Title');
    $('#annualSalary').val('Annual Salary');
}