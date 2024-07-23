const _ = require('lodash')



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
  function getFirstNames(obj){
    
    return   _.map(members,member => member.name.split(' ')[0]);
  }
  console.log(getFirstNames(members));
  
   //2.Make everyone's last names in UPPERCASE in given array of objects

   function changeToUpperCase(obj){
    return _.map(members, member => {
        const [firstName, lastName] = member.name.split(' ');
        return { ...member, name: `${firstName} ${lastName.toUpperCase()}` };
      });
   }

   console.log(changeToUpperCase(members));

//3. Get entries where age is between 41-60

function getAgeRange(obj){
    return _.filter(members, member => member.age >= 41 && member.age <= 60);
}

console.log(getAgeRange(members));

//4. Get average age
function getAverageAge(obj){
    return _.meanBy(members, 'age');
}
console.log(getAverageAge(members));


//5.  Get Person with maximum age 
function getMaxAge(obj){
    return _.reduce(obj,((max,curr)=>{
        return curr.age && curr.age > max.age ? curr : max
    }));
}
console.log(getMaxAge(members));

 //6. Divide persons in three groups

 function divideGroups(obj){
    return _.reduce(members,(result, member) => {
        if (member.age === undefined) {
          (result.noAge = result.noAge || []).push(member);
        } else if (member.age < 35) {
          (result.young = result.young || []).push(member);
        } else {
          (result.old = result.old || []).push(member);
        }
        return result;
      }, {} )
 }

 console.log(divideGroups(members))

 //7. add a new member to same members array instance at index 2
 