//Create function fib that returns n'th element of Fibonacci sequence (classic programming task).


const fib = (n)=>{
    if (n<=1){
        return n;
    }   

    
    let x = [0,1];


    for (let i =2; i<=n; i++){
       x[i] = x[i-1]+x[i-2];                        
    }
    console.log(x)
    return x[n];
}
