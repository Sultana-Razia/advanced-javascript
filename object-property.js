const output = [];
const students = [
    {id: 21, name: 'Mili'},
    {id: 31, name: 'Ety'},
    {id: 41, name: 'Roji'},
    {id: 51, name: 'Mampi'},
]
for(let i = 0; i < students.length; i++){
    const element = students[i];
    const result = element.name;
    output.push(result);
}
console.log(output);

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
// console.log(names);
// console.log(ids);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
console.log(bigger);
console.log(biggerOne);