const startButton = document.getElementById("start-btn")
const qeustionContainerEl = document.getElementById("qeustion-container")
const shuffledQeustions, currentQeustionIndex

startButton.addEventListener('click', startGame)


function startGame() {
console.log('started')
startButton.classList.add('hide')
shuffledQeustions = qeustions.sort(() => Math.random)
qeustionContainerEl.classList.remove("hide")
setNextQeustion()
}

function setNextQeustion() { 

}

function selectAnswer() {

}

const qeustions = [
    {
        qeustion: "What is the symbol to call an ID?",
        answer: [
            { text: "#", correct: true },
            { text: "%", correct: false},
        ] 
    }
]