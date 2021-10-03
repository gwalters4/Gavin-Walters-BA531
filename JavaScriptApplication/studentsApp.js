const students = require('./studentModule');
const studentsEndpoint = './api/students';
const gradesEndpoint = './api/grades';

let roster =[];
function getStudents(){
    students.getData(studentsEndpoint)
    .then(function(response){
        response.array.forEach(item => {
            roster.push(students.Students(item.firstName, item.lastName, item.Id))
        });
        console.log(roster);
    }).catch(function(error){
    });
}
function calcMaxPPG(id){
    students.calcAverage(gradesEndpoint + '/' + id)
    console.log('Average for student ', id, 'is ', average);
}
getStudents();