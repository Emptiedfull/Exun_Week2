//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

const diff = (a,b)=>{
    res = a.filter((x)=>{
        return !b.includes(x)
    })
    return res
}

console.log(diff([1,2,1,3,2,4],[1,2]))