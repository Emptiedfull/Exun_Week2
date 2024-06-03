const Submit = document.getElementById('Submit');
console.log('running')

Submit.addEventListener('click', function () {
    if (form.checkValidity()) {
        event.preventDefault();
        const fields = document.querySelectorAll('.field')

        alert(`Name: ${fields[0].value}, Email: ${fields[1].value}, Message: ${fields[2].value}`)

    }
})