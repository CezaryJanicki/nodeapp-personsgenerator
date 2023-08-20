const fs = require('fs');

const genders = ['M', 'F'];

const maleNames = [
  'Marek',
  'Wiliam',
  'Dariusz',
  'Lukasy',
  'Stefan',
  'Jarek',
  'Zugmunt',
];
const femaleNames = [
  'Magda',
  'Eliza',
  'Nina',
  'Joanna',
  'Roberta',
  'Ewa',
  'Karolina',
];
const FemaleLastNames = [
  'Matysek',
  'Janicka',
  'Biernak',
  'Filipowicy',
  'Grzesiak',
  'Mirka',
  'Slesinska',
  'Potocka',
];

const MaleLastNames = [
    'Matysek',
    'Janicki',
    'Biernak',
    'Filipowicz',
    'Grzesiak',
    'Mirek',
    'Slesinski',
    'Potocki',
  ];

const randChoice = (arr) => {
  let randName = Math.floor(Math.random() * (arr.length));
  const name = arr[randName];
  return name;
};

let people = [];

for (let i = 0; i < 20; i++) {
  const randGender = randChoice(genders);

  let name = '';
  let lastName = '';

  if (randGender === 'M') {
    name = randChoice(maleNames);
    lastName = MaleLastNames[Math.floor(Math.random() * (MaleLastNames.length - 1))];
  } else {
    name = randChoice(femaleNames);
    lastName = FemaleLastNames[Math.floor(Math.random() * (FemaleLastNames.length - 1))];
  }

  const age = Math.floor(Math.random() * (78 - 18) + 18);

  const idGenerator = {
    gender: randGender,
    name: name,
    lastName: lastName,
    age: age,
  };

  people.push(idGenerator);
  console.log(idGenerator);
}

const peopleJSON = JSON.stringify(people);

fs.writeFile('people.json', peopleJSON, (err) => {
  if (err) throw console.log('Something went wrong');
  console.log('File has been successfully generated! Check people.json');
});