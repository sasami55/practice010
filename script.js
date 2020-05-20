
// 関数コンストラクタ

var john = {
  name : 'John',
  yearOfBirth : 1980,
  job : 'teacher'
}

var Person = function (name , yearOfBirth , job , gender) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.gender = gender;
}

Person.prototype.calculateAge = function () {
  console.log (2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person ('John' , 1980 , 'teacher' , 'male');
var jane = new Person ('Jane' , 1999 , 'designer' , 'female');
var mark = new Person ('Mark' , 1940 , 'retired');

john.calculateAge ();
jane.calculateAge ();
mark.calculateAge ();

console.log(john);
console.log(jane);
console.log(mark);

console.log(jane.job);

console.log(john.lastName);
console.log(jane.lastName);

console.log ('---------------------------------------------------------');

// Object.create

var personProto = {
  calculateAge : function () {
    console.log (2016 - this.yearOfBirth);
  }
};

var john = Object.create (personProto);
john.name = 'John',
john.yearOfBirth = 1980,
john.job = 'teacher'

var jane = Object.create (personProto , {
  name : { value : 'Jane' },
  yearOfBirth : { value : 1999 },
  job : { value : 'designer' }  
});

console.log ('---------------------------------------------------------');

// Primitives vs objects

var a = 29;
var b = a;
a  = 33;
console.log(a , b);

var obj1 = {
  name : 'John',
  age : 33
}

var obj2 = obj1;
obj1.age = 88;
console.log(obj1);
console.log(obj2);

var age = 22;
var obj = {
  name : 'AAA',
  city : 'Lisbon'
}

function change(a , b) {
  a = 33;
  b.city = 'Canada';
}

change(age , obj);

console.log(age);
console.log(obj.city);

console.log ('---------------------------------------------------------');

var years = [1990 , 1950 , 1998 , 2001 , 1967];

function arrayCalc(arr , fn) {
  var arrRes = [];
  for (var i = 0 ; i < arr.length ; i++) {
    arrRes.push (fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2020 - el;
}

function isFullAge (el) {
  return el >= 18;
}

function maxHeartRate (el) {
  if (el >=18 && el <= 81){
    return Math.round (206.9 - (0.67 * el) ) ;
  } else {
    return -1;
  }
}

var ages = arrayCalc (years , calculateAge);
var fullAges = arrayCalc (ages , isFullAge);
var mHR = arrayCalc (ages , maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(mHR);

console.log ('---------------------------------------------------------');

function interviewQuestion (job) {
  if (job === 'designer') {
    return function (name) {
      console.log(name + 'what UX design is?')
    } 
  } else if (job === 'teacher') {
    return function (name) {
      console.log(name + 'what subject do you teach?')
    }
  } else {
    return function (name) {
      console.log(name + 'what do you do?')
    }
  }
}

var teacherQuestion = interviewQuestion ('teacher');
teacherQuestion ('John');
interviewQuestion ('designer')('Mark');

console.log ('---------------------------------------------------------');

function game () {
  var score = Math.random() * 10 ;
  console.log (score >= 5);
}
game();

(
  function () {
    var score = Math.random() * 10 ;
    console.log (score >= 5);
  }
) ();
// console.log (score);


(
  function (goodLuck) {
    var score = Math.random() * 10 ;
    console.log (score >= 5 - goodLuck);
  }
) (5);

console.log ('---------------------------------------------------------');

function retirement (retirementAge) {
  var a = ' years left until retirement'
  return function (yearOfBirth) {
    var age = 2016 - yearOfBirth ;
    console.log ( (retirementAge - age) + a)
  }
}
var retirementUS = retirement (66);
retirementUS (1990);

console.log ('---------------------------------------------------------');

var john = {
  name : 'John',
  age : 28,
  job : 'teacher',
  presentation : function (style , timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ' Ladies and Gentlemen . My name is ' +  this.name)
    } else if (style === 'friendly') {
      console.log('Good ' + timeOfDay + ' Hey . My name is ' +  this.name)
    }
  }
}

var emily = {
  name : 'Emily',
  age : 35,
  job : 'designer'
}

john.presentation('formal' , 'morning');
emily.presentation = john.presentation;
emily.presentation('friendly' , 'afternoon');
john.presentation.call(emily , 'friendly' , 'afternoon');
// john.presentation.apply(emily , ['friendly' , 'afternoon'])

var johnFriendly = john.presentation.bind(john , 'friendly')
johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily , 'formal');
emilyFormal('night');


var years = [1990 , 1950 , 1998 , 2001 , 1967];

function arrayCalc(arr , fn) {
  var arrRes = [];
  for (var i = 0 ; i < arr.length ; i++) {
    arrRes.push (fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2020 - el;
}

function isFullAge (limit , el) {
  return el >= limit;
}

var ages = arrayCalc (years , calculateAge);
var fullJapan = arrayCalc (ages , isFullAge.bind(this , 20))

var fullAges = arrayCalc (ages , isFullAge);
console.log(ages);
console.log(fullJapan);
