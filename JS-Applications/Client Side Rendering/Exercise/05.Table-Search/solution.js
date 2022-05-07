import { html, render } from './node_modules/lit-html/lit-html.js';

const root = document.querySelector(`tbody`);
document.getElementById(`searchBtn`).addEventListener(`click`, onSearch);
const input = document.getElementById(`searchField`);

const template = (student) => html `
   <tr class=${student.match ? 'select' : ''}>
      <td>${student.studentData.firstName} ${student.studentData.lastName}</td>
      <td>${student.studentData.email}</td>
      <td>${student.studentData.course}</td>
   </tr>`

let students = null;

start();

async function start() {
    const res = await fetch('http://localhost:3030/jsonstore/advanced/table');
    const data = await res.json();

    students = Object.values(data).map(s => ({ studentData: s, match: false }));

    update();
}

function update() {
    render(students.map(template), root);
}

function onSearch() {
    const value = input.value.trim().toLocaleLowerCase();

    for (let student of students) {
        student.match = Object.values(student.studentData).some(v => value && v.toLocaleLowerCase().includes(value));
    }

    update();
    input.value = '';
}