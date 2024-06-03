const sample = "Abcd"

const accum = (x)=>{
    const y = x.toLowerCase()
    let arr = y.split('')
    arr = arr.map((val,i)=>{
        return val.toUpperCase() + val.repeat(i)
    })
    return arr.join('-') 
}

console.log(accum(sample))