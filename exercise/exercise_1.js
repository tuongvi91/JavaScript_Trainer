
function fibonacci(m){
  if (m==1 || m==2) {return 1;}
  else {return fibonacci(m-1)+fibonacci(m-2);} 
}

/////////////////////////////////////////////////////Exercise 1//////////////////////////////////////////////////
  // Write function have one paramiter(n). Return the sequence of Fibonacci numbers in the interval n.
  // input: 4
  // output:1 1 2 3 
 
  function fibonacci_numbers(n){
    var arr=[]; var i;
    for (i=0;i<n;i++)
      arr[i]=fibonacci(i+1);
    for (i=0;i<n;i++)
      console.log(arr[i]);}
  fibonacci_numbers(4);
 
  /////////////////////////////////////////////////////Exercise 2//////////////////////////////////////////////////
  // Write function have one paramiter(n). Return n numbers of Fibonacci number.
  // input: 6
  // output:1 1 2 3 5 8
  function n_numbers_of_Fibo_num(n){
    var count=0;var array=[];var i;
    while (count<n){
        for (i=0;i<n;i++){
          array[i]=fibonacci(i+1);
          count++;}
    }
    for (i=0;i<count;i++)
      console.log(array[i]);
  }
  n_numbers_of_Fibo_num(6);
  
  
  /////////////////////////////////////////////////////Exercise 3//////////////////////////////////////////////////
  // Write function have one paramiter(n). Return the nth of Fibonacci number.
  // input: 4
  // output:3
  
  function the_nth_Fnumber(n){
    console.log(fibonacci(n));}
  the_nth_Fnumber(4);
  
  /////////////////////////////////////////////////////Exercise 4//////////////////////////////////////////////////
  // Write function have one paramiter(n). Check prime number
  // input: 4
  // output:false
  
  function prime_number(n){
    var i;
    for (i=2;i<=n/2;i++)
    if (n%i==0) {return false;}
    {return true;}
  }
   console.log(prime_number(4));
  

  /*function swap(&x,&y) {
    var z;
    z=x;
    x=y;
    y=z;
  }*/
  /////////////////////////////////////////////////////Exercise 5//////////////////////////////////////////////////
  // input: [2,1,7,2,6,9,1,99,12,56]
  // output:[1,1,2,2,6,7,9,12,56,99]
 
 function asc_sort(array5){ 
  var i,j;var temp;var n=array5.length;
    for (i=0;i<n-1;i++){
      for (j=i+1;j<n;j++)
        if (array5[i]>array5[j]) {
          temp=array5[i];
          array5[i]=array5[j];
          array5[j]=temp;
        }
    }
    for (i=0;i<n;i++)
    console.log(array5[i]);
  }
  asc_sort([2,1,7,2,6,9,1,99,12,56]);
 
  
  /////////////////////////////////////////////////////Exercise 6//////////////////////////////////////////////////
  // input: [2,1,7,2,6,9,1,99,12,56]
  // output:[99,56,12,9,7,6,2,2,1,1]
  
  function desc_sort(array6){ 
    var i,j;var temp;var n=array6.length;
      for (i=0;i<n-1;i++){
        for (j=i+1;j<n;j++)
          if (array6[i]<array6[j]) {
            temp=array6[i];
            array6[i]=array6[j];
            array6[j]=temp;
          }
      }
      for (i=0;i<n;i++)
      console.log(array6[i]);
  }
  desc_sort([2,1,7,2,6,9,1,99,12,56]);
    
  /////////////////////////////////////////////////////Exercise 7//////////////////////////////////////////////////
  // Given a string is the path of a file in the computer. The correct path is a path that has no leading and trailing slashes (/) and only one slash in between folders to separate it. Please remove the extra slashes to get a correct path
  // input:  ////laptrinh//////code//////javascript/////
  // output: laptrinh/code/javascript

  function remove_the_extra_slashes(string_7){
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

