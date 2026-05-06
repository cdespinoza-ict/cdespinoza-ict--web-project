document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    document.getElementById("message").textContent = "Hello, " + name + "! Welcome to my page.";
});