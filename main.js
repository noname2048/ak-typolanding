let target = document.querySelector("#dynamic");

function blink() {
    target.classList.toggle("active");
}

setInterval(blink, 500);

let prefix = "Learn to ";
let techStack = ["HTML", "CSS", "Javascript", "Python", "Ruby"];
let circle = 0;

function circleString() {
    let selectString = prefix + techStack[circle];
    circle = (circle + 1) % techStack.length;
    let selectStringArr = selectString.split("");
    return selectStringArr;
}

function randomString() {
    let selectString =
        prefix + techStack[Math.floor(Math.random() * techStack.length)];
    let selectStringArr = selectString.split("");
    return selectStringArr;
}

function resetTyping() {
    target.textContent = "";
    dynamic(circleString());
}

function dynamic(randomArr) {
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function () {
            dynamic(randomArr);
        }, 80);
    } else {
        setTimeout(resetTyping, 3000);
    }
}

dynamic(circleString());
