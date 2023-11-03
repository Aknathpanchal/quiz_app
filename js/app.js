const quizData = [
    {
        "question": "What is the capital of France?",
        "options": ["New York", "London", "Paris", "Dublin"],
        "answer": "Paris"
      },
      {
        "question": "Which of the following is a client-side language?",
        "options": ["Java", "C", "Python", "JavaScript"],
        "answer": "JavaScript",
      },
      {
        "question": "What does HTML stand for?",
        "options": ["Hypertext Markup Language", "Cascading Style Sheet", "Jason Object Notation", "Helicopters Terminals Motorboats Lamborghinis"],
        "answer": "Hypertext Markup Language",
      },
      {
        "question": "What year was JavaScript launched?",
        "options": ["1996", "1995", "1994", "none of the above"],
        "answer": "1995",
      },
      {
        "question": "What does CSS stand for?",
        "options": ["Hypertext Markup Language", "Cascading Style Sheet", "Jason Object Notation", "Helicopters Terminals Motorboats Lamborghinis"],
        "answer": "Cascading Style Sheet",
      },
      {
        "question": "Who painted the Mona Lisa?",
        "options": ["Vincent Van Gogh", "Pablo Picasso", "Leonardo Da Vinci", "Claude Monet"],
        "answer": "Leonardo Da Vinci"
      }
    
    
    

];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
const options=`${data.options}`.split(",")
for (let i = 0; i < options.length; i++) {
    allInputs[i].nextElementSibling.innerText = options[i];
  }
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans == data.answer) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.nextElementSibling.innerText;
        }
    }
)
console.log(ans)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);