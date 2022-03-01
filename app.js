const fs = require('fs');
const genders = ['M','F'];
const maleNames = ['Robert','Rysio','Leon','Michal', 'Jakub'];
const femaleNames = ['Ola', 'Ewa', 'Paulina', 'Anna','Krystyna'];
const lastNames = ['Kowalski', 'Nowak', 'Majonez', 'Keczup', 'Kot'];
const ages = ['18','22', '30'];
randChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const people = [];

for (i = 0; i < 20; i++) {
  let person = {};

  person.gender = randChoice(genders);

  if(person.gender === 'F') {
    person.name = randChoice(femaleNames);
  } else {
    person.name = randChoice(maleNames);
  }

  person.lastname = lastNames[Math.floor(Math.random() * lastNames.length)];

  person.age = Math.floor(Math.random() * (78 - 18 + 1) + 18);

  people.push(person);
};

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });