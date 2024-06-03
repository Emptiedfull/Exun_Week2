const Submit = document.getElementById('Submit');
console.log('running')

Submit.addEventListener('click', function() {
    event.preventDefault();
    const fields = document.querySelectorAll('.field')
    for (let i = 0; i<fields.length;i++){
       
        if (fields[i].value == ''){

            alert('Please fill all fields')
            return
        }   
    }

    const regex = /^\S+@\S+\.\S+$/
    if (!regex.test(fields[1].value)){
        alert('Please enter a valid email')
        return
    }

    alert(`Name: ${fields[0].value}, Email: ${fields[1].value}, Message: ${fields[2].value}`)
    
})