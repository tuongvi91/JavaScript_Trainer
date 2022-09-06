const inventors = [
    "Albert k Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
  ];
  
  const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
  /////////////////filter////////////////////////////////////
  // Print out an array of the inventors whose name starts with 'A'.
  result=inventors.filter(function(name){
    if (name[0]=="A"){
        return name;}
    }) ;
console.log(result);

  // Print out an array of the inventors whose name contains 'n'.
  result=inventors.filter(function(name){
    if (name.includes("n") ){
       return name; }
   }) ;
console.log(result);

  // Print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).
  result=inventors.filter(function(name){
    var i;
    for (i=0;i<name.length;i++)
    if (name[i]==name[i+1])
        {return name;}
  });
  console.log(result);
  // Print out an array of the numbers which are odd.
  result =numbers.filter(function(number){
    if (number%2 != 0) {
        return number;}
    });
console.log(result);          

  // Print out an array of the numbers that have two digits.
  result = numbers.filter(function(number){
    if (number/10 >=1) {
        return number;}
    });
console.log(result);

  // Print out an array of the numbers which are prime.
  function check_prime_number(n){
    var i;
    if (n<=1) {return false;}
    for (i=2;i<=n/2;i++)
    if (n%i==0) {return false;}
    {return true;}
  }
  result=numbers.filter(function(number){
    if (check_prime_number(number)) {
        return number;
    }
});
console.log(result);
  /////////////////MAP/////////////////////////
  // Print out the first name of each inventor.
  result=inventors.map (function(name){
    firstName="";
    for (i=name.length;i>=0;i--)
      if (name[i]==" ") 
        {for (var j=i+1;j<name.length;j++)
          firstName=firstName+name[j];
        break;}
    return firstName;
  });
  console.log(result);

  // Print out the length of every inventor's full name.
  result=inventors.map(function(name){
    return name +": "+name.length;
  });
  console.log(result);

  // Print out all the inventors' names in uppercase.
  result=inventors.map(function(name){
    return name.toUpperCase();
  });
  console.log(result);
  
  // Print out initials of all inventors(e.g. A.E., I.N., ...)
  result=inventors.map(function(name){
    var index;
    for (index=0;index<name.length;index++)
      if (name[index]==" "){
        return (name[0].toUpperCase()+"."+ name[index+1].toUpperCase()+".");
      }
  });
  console.log(result);
  
  // Print out an array of every number multiplied by 100.
  result= numbers.map(function(number){
    return number*100;
  }
  );
  console.log(result);
  
  ////////////////////////some/every/////////////////////
  // Does any inventor have the letter 'y' in their name?
  result=inventors.some(function(name){
    return name.includes("a");
});
console.log(result);

  // Does every inventor have the letter 'e' in their name?
  result=inventors.every(function(name){
    return name.includes("s");
  })
  console.log(result);

  // Does every inventor have first name that's longer than 4 characters?
  result=inventors.every(function(name){
    var count=0;
    for (end=name.length;end>=0;end--)
    if (name[end]==" ") 
      {start=end+1;
        count=name.length-start;
      }
    return count>4;
  })
  console.log(result);
    
  ////////////////////find/findIndex///////////////////////
  // Find the inventor that has a middle name.
  function count(param){
    temp=0;
    for (i=0;i<param.length;i++)
    if (param[i]==" ") {temp++};
    return temp;}
    
  result=inventors.find(function(name){
      return count(name)>=2 ;
  })
  console.log(result);
  // Bonus: Return a new array, that only has inventors without a middle name. (Hint: think about splice, if you use findIndex. But you may also use another of the methods you've learned about above.)
  //result=inventors.findIndex(function(name){
  //  return count(name)<=1;
 // })
 function find_index(n){
 findStart=inventors.findIndex(function(name){
  return count(name)<=1;
 });
 return findStart;}
 
function newArray(name){
  var arr="";
  start= find_index(inventors);
  end= name.length +1;
  arr=arr+inventors.slice(start,end);
  return arr;
}
for (i=0;i<inventors.length;i++)
console.log(newArray(inventors[i]));

  
  // Find the number divisible by 7.
  result=numbers.find(function(number){
    return number%7==0;
  })
  console.log(result);