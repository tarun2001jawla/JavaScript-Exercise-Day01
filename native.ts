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
//1.Get array of first names of everyone
const tFirstNameArray: string[] = members.map(member => member.name.split(' ')[0]);
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
  
  //4.  Get Person with maximum age 
  const tPersonWithMaxAge: TMember = tMembers.reduce((max, curr) => {
    return (curr.age !== undefined && (max.age === undefined || curr.age > max.age)) ? curr : max;
  });
  console.log(tPersonWithMaxAge);

  // 6. Divide persons in three groups
  interface TGroupedMembers {
    noAge: TMember[];
    young: TMember[];
    old: TMember[];

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
  