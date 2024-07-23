const members = [
    {name: 'Aman Makhija', age: 20},
    {name: 'Suresh Jsharma', age: 40},
    {name: 'Vijay Sahu', age: 41},
    {name: 'Rakesh Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];


//1.Get array of first names of everyone
 const firstNameArray = members.map(member => member.name.split(' ')[0]);
 console.log(firstNameArray);

 //2.Make everyone's last names in UPPERCASE in given array of objects
 const UpperCaseArray = members.map(member => {
  const [firstName, lastName] = member.name.split(' ');
  return { ...member, name: `${firstName} ${lastName.toUpperCase()}` };
});

console.log(UpperCaseArray);


//3. Get entries where age is between 41-60

const agedMembers = members.filter(member=>{
  return member.age >= 41 && member.age <= 60;
})
console.log("Members with age between age 41 & 60 are:",agedMembers);

//4. Get average age


const membersWithAges = members.filter(member => member.age !== undefined);
const ages = membersWithAges.map(member=>{
  return member.age;
})
console.log(ages);

const sumAge = ages.reduce((acc, age)=>{
  return (acc + age);
})

const averageAge = sumAge/ages.length;
console.log(averageAge)

//5.  Get Person with maximum age

const personWithMaxAge = members.reduce((max,curr)=>{
  return curr.age && curr.age>max.age ? curr : max;
})
console.log(personWithMaxAge);

//6. Divide persons in three groups



const groupedMembers = members.reduce((result, member) => {
  if (member.age === undefined) {
    (result.noAge = result.noAge || []).push(member);
  } else if (member.age < 35) {
    (result.young = result.young || []).push(member);
  } else {
    (result.old = result.old || []).push(member);
  }
  return result;
}, {});

console.log("The divided group is:\n", groupedMembers);

//7. add a new member to same members array instance at index 2
const index =2;
const newMember = {name: 'Tarun Jawla', age : 23};
members.splice(index,0,newMember);
console.log(members);

//8.extract first and second element using destructing
const [first,second] = members;
console.log(first,second);

//9. Create a new array instance adding a new member at index 0, and keeping existing afterwards
const newMembers = [{name: 'Jane Doe', age: 203}, ...members];
console.log(newMembers);


//10.  Extract properties of object using destructuring
//const {name,age} = members[0];

// console.log(name,age);

//11.Rename extracted property of object while destructing
const {name:firstName,age:age1} = members[0];
console.log(firstName,age1);

//12. Destructure any property of an object and use spread operator to get remaining properties in an object
const {name,...rest} = members[0];
console.log(rest);

//13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
const newMember1 = {...members[0],name:'Tarun'};
console.log(newMember1);


    