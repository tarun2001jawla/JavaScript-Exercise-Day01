interface TMember {
    name: string;
    age?: number;
  }
  
  const tMembers: TMember[] = [
    { name: 'Aman Makhija', age: 20 },
    { name: 'Suresh Jsharma', age: 40 },
    { name: 'Vijay Sahu', age: 41 },
    { name: 'Rakesh Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swpril Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
  ];
  
  // 1. Get array of first names of everyone
  const tFirstNameArray: string[] = tMembers.map(member => member.name.split(' ')[0]);
  console.log(tFirstNameArray);
  
  // 2. Make everyone's last names in UPPERCASE in given array of objects
  const tUpperCaseArray: TMember[] = tMembers.map(member => {
    const [firstName, lastName] = member.name.split(' ');
    return { ...member, name: `${firstName} ${lastName.toUpperCase()}` };
  });
  console.log(tUpperCaseArray);
  
  // 3. Get entries where age is between 41-60
  const tAgedMembers: TMember[] = tMembers.filter(member => {
    return member.age !== undefined && member.age >= 41 && member.age <= 60;
  });
  console.log("Members with age between age 41 & 60 are:", tAgedMembers);
  

  
  // 5. Get Person with maximum age
  const tPersonWithMaxAge: TMember = tMembers.reduce((max, curr) => {
    return (curr.age !== undefined && (max.age === undefined || curr.age > max.age)) ? curr : max;
  });
  console.log(tPersonWithMaxAge);
  
  // 6. Divide persons in three groups
  interface TGroupedMembers {
    noAge?: TMember[];
    young?: TMember[];
    old?: TMember[];
  }
  
  const tGroupedMembers: TGroupedMembers = tMembers.reduce((result: TGroupedMembers, member) => {
    if (member.age === undefined) {
      (result.noAge = result.noAge || []).push(member);
    } else if (member.age < 35) {
      (result.young = result.young || []).push(member);
    } else {
      (result.old = result.old || []).push(member);
    }
    return result;
  }, {});
  console.log("The divided group is:\n", tGroupedMembers);
  
  // 7. Add a new member to same members array instance at index 2
  const tIndex: number = 2;
  const tNewMember: TMember = { name: 'Tarun Jawla', age: 23 };
  tMembers.splice(tIndex, 0, tNewMember);
  console.log(tMembers);
  
  // 8. Extract first and second element using destructuring
  const [tFirst, tSecond]: TMember[] = tMembers;
  console.log(tFirst, tSecond);
  
  // 9. Create a new array instance adding a new member at index 0, and keeping existing afterwards
  const tNewMembers: TMember[] = [{ name: 'Jane Doe', age: 203 }, ...tMembers];
  console.log(tNewMembers);
  
  // 10. Extract properties of object using destructuring
  // const { name, age } = tMembers[0];
  // console.log(name, age);
  
  // 11. Rename extracted property of object while destructuring
  const { name: tFirstName, age: tAge1 } = tMembers[0];
  console.log(tFirstName, tAge1);
  
  // 12. Destructure any property of an object and use spread operator to get remaining properties in an object
  const { name: tNameToRemove, ...tRest } = tMembers[0];
  console.log(tRest);
  
  // 13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
  const tNewMember1: TMember = { ...tMembers[0], name: 'Tarun' };
  console.log(tNewMember1);