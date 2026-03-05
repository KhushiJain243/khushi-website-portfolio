// Add hobby
function addHobby() {

    var input = document.getElementById("hobbyInput");
    var hobby = input.value;

    if (hobby == "") {
        alert("Please enter a hobby");
        return;
    }

    var li = document.createElement("li");

    li.innerHTML = hobby + ' <button onclick="deleteHobby(this)">Delete</button>';

    document.getElementById("hobbyList").appendChild(li);

    input.value = "";
}

// Delete hobby
function deleteHobby(button) {

    button.parentElement.remove();

}

// Contact form alert
function showAlert() {

    alert("Form submitted successfully!");
    return false;

}

// Show date and time
function showTime() {

    var now = new Date();

    document.getElementById("time").innerHTML =
        now.toLocaleDateString() + " " + now.toLocaleTimeString();

}

setInterval(showTime, 1000);
