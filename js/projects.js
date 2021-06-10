function collapseSwitch6() {
    console.log(document.getElementById("btn-6").innerText);

    if (document.getElementById("btn-6").innerText === 'Learn More') {
        document.getElementById("btn-6").innerText="Collapse";
    } else {
        document.getElementById("btn-6").innerText="Learn More";
    }
}