function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if ((name === '') || (name == null)) {
        document.getElementById("name").style.borderColor = "red";
    }
    if ((email === '') || (email == null)) {
        document.getElementById("email").style.borderColor = "red";
    }
    if ((message === '') || (message == null)) {
        document.getElementById("message").style.borderColor = "red";
    }

    if (
        ((name === '') || (name == null)) ||
        ((email === '') || (email == null)) ||
        ((message === '') || (message == null))
    ) {
        return;
    }

    document.getElementById("submit").innerHTML="Sending&emsp;<span class='spinner-border spinner-border-sm' role='status'><span class='visually-hidden'>Loading..</span></span>";

    var tempParams = {
        name:name,
        email:email,
        message:message,
    };

    emailjs.send('service_hhcc', 'template_hhcc', tempParams).then(function(res){
        if (res.status === 200) {
            document.getElementById("submit").classList.remove("btn-primary");
            document.getElementById("submit").classList.remove("btn-danger");
            document.getElementById("submit").classList.add("btn-success");
            document.getElementById("submit").innerHTML="Sent&emsp;<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-check2' viewBox='0 0 16 16'><path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z'/></svg>";
            return;
        } else {
            document.getElementById("submit").classList.remove("btn-primary");
            document.getElementById("submit").classList.remove("btn-success");
            document.getElementById("submit").classList.add("btn-danger");
            document.getElementById("submit").innerHTML="Failed&emsp;<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-exclamation-circle' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/><path d='M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z'/></svg>";
        }
    });
}