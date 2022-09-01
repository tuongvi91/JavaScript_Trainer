
function fibonacci(m){
  if (m==1 || m==2) {return 1;}
  else {return fibonacci(m-1)+fibonacci(m-2);} 
}

/////////////////////////////////////////////////////Exercise 1//////////////////////////////////////////////////
  // Write function have one paramiter(n). Return the sequence of Fibonacci numbers in the interval n.
  // input: 4
  // output:1 1 2 3 
 
  function findFibonacciSequence(n){
    var arr=[]; var i;
    for (i=0;i<n;i++)
      arr[i]=fibonacci(i+1);
    return arr;}

   console.log(findFibonacciSequence(4));
 
  /////////////////////////////////////////////////////Exercise 2//////////////////////////////////////////////////
  // Write function have one paramiter(n). Return n numbers of Fibonacci number.
  // input: 6
  // output:1 1 2 3 5 8
  function find_n_numbers_of_Fibo_num(n){
    var count=0;var array=[];var i;
    while (count<n){
        for (i=0;i<n;i++){
          array[i]=fibonacci(i+1);
          count++;}
    }
   return array;
  }
  console.log(find_n_numbers_of_Fibo_num(6));
  
  
  /////////////////////////////////////////////////////Exercise 3//////////////////////////////////////////////////
  // Write function have one paramiter(n). Return the nth of Fibonacci number.
  // input: 4
  // output:3
  
  function find_the_nth_Fibo_number(n){
    return(fibonacci(n));}
  console.log(find_the_nth_Fibo_number(4));
  
  /////////////////////////////////////////////////////Exercise 4//////////////////////////////////////////////////
  // Write function have one paramiter(n). Check prime number
  // input: 4
  // output:false
  
  function check_prime_number(n){
    var i;
    for (i=2;i<=n/2;i++)
    if (n%i==0) {return false;}
    {return true;}
  }
   console.log(check_prime_number(4));
  

  /*function swap(&x,&y) {
    var z;
    z=x;
    x=y;
    y=z;
  }*/
  /////////////////////////////////////////////////////Exercise 5//////////////////////////////////////////////////
  // input: [2,1,7,2,6,9,1,99,12,56]
  // output:[1,1,2,2,6,7,9,12,56,99]
 
 function sorting_ascending(array){ 
  var i,j;var temp;var n=array.length;
    for (i=0;i<n-1;i++){
      for (j=i+1;j<n;j++)
        if (array[i]>array[j]) {
          temp=array[i];
          array[i]=array[j];
          array[j]=temp;
        }
    }
  return array;
  }
  var arr=[2,1,7,2,6,9,1,99,12,56];
  console.log(sorting_ascending(arr));
 
  
  /////////////////////////////////////////////////////Exercise 6//////////////////////////////////////////////////
  // input: [2,1,7,2,6,9,1,99,12,56]
  // output:[99,56,12,9,7,6,2,2,1,1]
  
  function sorting_descending(array){ 
    var i,j;var temp;var n=array.length;
      for (i=0;i<n-1;i++){
        for (j=i+1;j<n;j++)
          if (array[i]<array[j]) {
            temp=array[i];
            array[i]=array[j];
            array[j]=temp;
          }
      }
     return array;
  }
  console.log(sorting_descending(arr));
    
  /////////////////////////////////////////////////////Exercise 7//////////////////////////////////////////////////
  // Given a string is the path of a file in the computer. The correct path is a path that has no leading and trailing slashes (/) and only one slash in between folders to separate it. Please remove the extra slashes to get a correct path
  // input:  ////laptrinh//////code//////javascript/////
  // output: laptrinh/code/javascript

  /*function remove_the_extra_slashes(string_7){
    var length_string_7=string_7.length;
    var i,j;
    while(string_7[0]=="/" ){
      for (i=0;i<length_string_7;i++)
      {string_7[i]=string_7[i+1];
      length_string_7--;}
    }
   
    while(string_7[length_string_7-1]=="/" ){
      for (i=length_string_7;i>=0;i--)
      {string_7[i]=string_7[i-1];
      length_string_7--;}
    }

   for (i=0;i<length_string_7;i++){
      if ((string_7[i]=="/") && (string_7[i+1]=="/")){
        for (j=i;j<length_string_7-1;j++)
        string_7[j]=string_7[j+1];
        i--;
      }
    }
    return string_7;
    }
  console.log (remove_the_extra_slashes("////laptrinh//////code//////javascript/////"));
*/
