const chicken = document.getElementById("chicken");
const cat = document.getElementById("cat");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (chicken.classList != "jump") {
        chicken.classList.add("jump")
    }
    setTimeout( function() {
        chicken.classList.remove("jump")
    }, 400)
}

let isAlive = setInterval ( function() {
    let chickenTop = parseInt(window.getComputedStyle(chicken).getPropertyValue("top"));
    let catLeft = parseInt(window.getComputedStyle(cat).getPropertyValue("left"));

    if (catLeft < 50 && catLeft > 0 && chickenTop >= 140) {
        alert("GAME OVER!!!")
    }
}, 10)