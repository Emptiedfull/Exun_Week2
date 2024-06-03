const submit = document.getElementById('submit');

submit.addEventListener('click', function() {
    if (form.checkValidity()) {

        event.preventDefault();
        data = {}
        const fields = form.elements;
        for (let i = 0; i < fields.length; i++) {



            if(fields[i].type !== "radio" && fields[i].type !== "submit") {
                console.log(fields[i].value)
                data[fields[i].id] = fields[i].value
            }
            if(fields[i].type ==="radio"){
                if(fields[i].checked){
                    console.log(fields[i].value)
                    data[fields[i].name] = fields[i].value
                }
               
            }
            
        }
        console.log(data)
        alertmsg = ""
        for (let key in data){
            alertmsg += `${key}: ${data[key]}, `
        }
        alert(alertmsg)

        fetch('/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        
    }

})