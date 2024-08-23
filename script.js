
var startbtn = document.getElementById("start")
var btnsecion = document.querySelector(".btn-section")
var imgcontainer = document.querySelector(".img-container")
var para = document.querySelector(".para")
var you = document.querySelector(".you")
startbtn.addEventListener("click", function () {
    imgcontainer.style.display = "flex"
    startbtn.style.display = "none"
    para.style.display = "flex"
    you.style.display = "flex"
    var closegame = document.createElement("button")
    closegame.innerHTML = "Close Game"
    btnsecion.append(closegame)
    closegame.addEventListener("click", function () {
        window.location.reload();
    })
})

const a = [0, 1, 2]

var randomnum = Math.floor(Math.random() * a.length)
console.log(randomnum)

var computer = document.querySelector(".computer")
if (randomnum === 0) {
    var rock = document.createElement("h2")
    rock.innerHTML = "Opponent Select Rock"
    computer.append(rock)
    var img1 = document.createElement("img")
    img1.src = "rock.png"
    computer.append(img1)
}
else if (randomnum === 1) {
    var paper = document.createElement("h2")
    paper.innerHTML = "Opponent Select Paper"
    computer.append(paper)
    var img2 = document.createElement("img")
    img2.src = "paper.png"
    computer.append(img2)
}

else {
    var scissor = document.createElement("h2")
    scissor.innerHTML = "Opponent Select Scissor"
    computer.append(scissor)
    var img3 = document.createElement("img")
    img3.src = "scissors.png"
    computer.append(img3)
}

var rockimg = document.getElementById("rock")
var paperimg = document.getElementById("paper")
var scissorimg = document.getElementById("scissor")
var output = document.querySelector(".output")
var opponent = document.querySelector(".opponent")
var result = document.querySelector(".result")
rockimg.addEventListener("click", function () {
    computer.style.display = "flex"
    choice = 0;
    you.style.display = "none"
    para.style.display = "none"
    imgcontainer.style.display = "none"
    opponent.style.display = "none"
    opponenthead.style.display = "none"
    var resultpara = document.createElement("h1")
    resultpara.innerHTML = "You Select Rock"
    result.append(resultpara)
    var resultimg = document.createElement("img")
    resultimg.src = "rock.png"
    result.append(resultimg)
    if (randomnum == choice) {
        var ans = document.createElement("h1")
        ans.innerHTML = "Match Draw"
        output.append(ans)
    }
    else if (randomnum == 1) {
        var ans = document.createElement("h1")
        ans.innerHTML = "You Lose"
        output.append(ans)
    }
    else {
        var ans = document.createElement("h1")
        ans.innerHTML = "You Win"
        output.append(ans)
    }
})

paperimg.addEventListener("click", function () {
    computer.style.display = "flex"
    choice = 1;
    para.style.display = "none"
    imgcontainer.style.display = "none"
    opponent.style.display = "none"
    you.style.display = "none"
    opponenthead.style.display = "none"
    var resultpara = document.createElement("h1")
    resultpara.innerHTML = "You Select paper"
    result.append(resultpara)
    var resultimg = document.createElement("img")
    resultimg.src = "paper.png"
    result.append(resultimg)
    if (randomnum == choice) {
        var ans = document.createElement("h1")
        ans.innerHTML = "Match Draw"
        output.append(ans)
    }
    else if (randomnum == 0) {
        var ans = document.createElement("h1")
        ans.innerHTML = "You Win"
        output.append(ans)
    }
    else {
        var ans = document.createElement("h1")
        ans.innerHTML = "You Lose"
        output.append(ans)
    }
})

scissorimg.addEventListener("click", function () {
    computer.style.display = "flex"
    choice = 2;
    you.style.display = "none"
    para.style.display = "none"
    imgcontainer.style.display = "none"
    opponent.style.display = "none"
    opponenthead.style.display = "none"
    var resultpara = document.createElement("h1")
    resultpara.innerHTML = "You Select Scissor"
    result.append(resultpara)
    var resultimg = document.createElement("img")
    resultimg.src = "scissors.png"
    result.append(resultimg)
    if (randomnum == choice) {
        var ans = document.createElement("h1")
        ans.innerHTML = "Match Draw"
        output.append(ans)
    }
    else if (randomnum == 1) {
        var ans = document.createElement("h1")
        ans.innerHTML = "You Win"
        output.append(ans)
    }
    else {
        var ans = document.createElement("h1")
        ans.innerHTML = "You Lose"
        output.append(ans)
    }
})

var opponenthead = document.querySelector(".opponenthead")