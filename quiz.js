//set variables
const mainDiv = document.getElementById("main-div");
const startGameButton = document.getElementById("start-game-button");
const gameRules = document.getElementById("game-rules");
const nameForm = document.getElementById("name-form");
let nameInput = document.getElementById("name-input");
let userName;
let submitNameButton = document.getElementById("submit-name-button");
let questionDiv = document.getElementById("question-div");
let answerDiv = document.createElement("div");
let tenRandomQuestions = [];

//{
//       username: nameInput.value,
//       score: scoreArr, //[]
// }
let scoreArr = [];

let questions = [
      {
            question: `Which country contains the largest English-speaking
         population in the world?`,
            answers: ["England", "United States", "China", "India"],
            rightAnswer: "United States",
      },
      {
            question: `The language is conventionally divided into three
             historical periods In which of these periods did William 
             Shakespeare write his plays?`,
            answers: [
                  "Old English",
                  "Middle English",
                  "Modern English",
                  "brtain",
            ],
            rightAnswer: "Middle English",
      },
      {
            question: `Who invented the tin can for preserving food in 1810?`,
            answers: ["Peter Durand", "Adeson", "iman", "nada"],
            rightAnswer: "Peter Durand",
      },
      {
            question: ` What is the capital of Portugal?`,
            answers: ["cairo", "biruit", "China", "isbon"],
            rightAnswer: "Lisbon",
      },
      {
            question: `What is the name of the biggest technology company 
            in South Korea?`,
            answers: ["apple", "Samsung", "hwawi", "nokia"],
            rightAnswer: "Samsung",
      },
      {
            question: `What is the doll, Barbie’s, full name?`,
            answers: [
                  "arbika",
                  "folla",
                  "Barbara Millicent Roberts",
                  "barbie doll",
            ],
            rightAnswer: "Barbara Millicent Roberts",
      },
      {
            question: `What year did the Titanic sink in the Atlantic Ocean 
            on 15 April on its maiden voyage from Southampton?`,
            answers: ["1912", "1996", "1996", "1996"],
            rightAnswer: "1912",
      },
      {
            question: ` How many breaths does the human body take daily?`,
            answers: [
                  "20,000 daily",
                  "30,000 daily",
                  "50,000 daily",
                  "40,000 daily",
            ],
            rightAnswer: "20,000 daily",
      },
      {
            question: `Which year was the first Tonka truck made – 1945, 
            1947 or 1949?`,
            answers: ["1947", "2000", "1995", "1996"],
            rightAnswer: "1947",
      },
      {
            question: `Which metal was discovered by Hans Christian Oersted in 1825?`,
            answers: ["Aluminium", "iron", "iron", "iron"],
            rightAnswer: "Aluminium",
      },
      {
            question: `What is the lifespan of a dragonfly?`,
            answers: ["20 hours", "18 hours", "10 hours", "24 hours"],
            rightAnswer: "24 hours",
      },
      {
            question: `Who was Prime Minister of Great Britain from 1841 to 1846?`,
            answers: ["iman", "United States", "iman", "iman"],
            rightAnswer: "Robert Peel",
      },
      {
            question: ` What did Al Capone’s business card state his occupation was?`,
            answers: ["food", "books", "mobiles", "A used furniture salesman"],
            rightAnswer: "A used furniture salesman",
      },
      {
            question: ` What is the chemical symbol for silver?`,
            answers: ["cu", "ca", "k", "AL"],
            rightAnswer: "AL",
      },
      {
            question: `What is the world’s smallest bird?`,
            answers: ["Bee", "beel", "ddsaaa", "Bee Hummingbird"],
            rightAnswer: "Bee Hummingbird",
      },
      {
            question: `Who played ‘Bodie’ and ‘Doyle’ in The Professionals?`,
            answers: [
                  "Collins",
                  "obama",
                  "Martin",
                  "Lewis Collins and Martin Shaw",
            ],
            rightAnswer: "Lewis Collins and Martin Shaw",
      },
];
startGameButton.addEventListener("click", () => {
      gameRules.style.display = "none";
      nameForm.style.display = "block";
      submitNameButton.addEventListener("click", (e) => {
            e.preventDefault();
            userName = nameInput.value;
            nameForm.style.display = "none";
            renderTheRandomQuestions();
      });
});
let renderTheRandomQuestions = () => {
      selectTenRandomQuestions();
      // displayrandomQuestions(tenRandomQuestions);
};
let selectTenRandomQuestions = () => {
      let randomQuestionIndex;
      for (let i = 0; i < 10; i++) {
            randomQuestionIndex = Math.floor(Math.random() * questions.length);
            let nthQuestion = questions[randomQuestionIndex];
            let question = nthQuestion.question;
            let answersArray = nthQuestion.answers;
            let rightAnswer = nthQuestion.rightAnswer;
            let choosenAnswer;
            let selectedButton;

            mainDiv.innerHTML = `
            <div id="question-section">
                  <div ">${question}</div>
                  <div id = "answers-container"></div>
                  <button disabled  id = "next-question-button">next</button>

                  `;
            const answersContainer = document.getElementById(
                  "answers-container"
            );
            const nextQuestionButton = document.getElementById(
                  "next-question-button"
            );

            answersArray.forEach((answer, index) => {
                  answersContainer.innerHTML += `<button class = "answer-button" > ${answer}</button><br>`;
                  const answerButtons = document.querySelectorAll(
                        ".answer-button"
                  );
                  let answersButtonsArray = [...answerButtons];
                  answersButtonsArray.forEach((button) => {
                        button.addEventListener("click", (e) => {
                              selectedButton = e.target;

                              choosenAnswer = e.target.innerText;

                              //cheack rightness

                              if (choosenAnswer == rightAnswer) {
                                    e.target.style.backgroundColor = "green";
                                    answersContainer.innerHTML += `yaay! your answer is RIGHT:)`;
                                    scoreArr.push(1);
                                    nextQuestionButton.disabled = false;
                                    addUserInfoToLocalStorage();
                              } else {
                                    e.target.style.backgroundColor = "red";
                                    answersContainer.innerHTML += `unfortinatly, your answer (${choosenAnswer}) is wrong :(
                                          the right answer is 
                                            <div class ="right-answer">${rightAnswer}</div>`;
                                    scoreArr.push(0);
                                    nextQuestionButton.disabled = false;
                                    addUserInfoToLocalStorage();
                              }
                        });
                  });
            });

            // tenRandomQuestions.push(questions[randomQuestionIndex]);
      }
};
let displayrandomQuestions = (tenQuestionsArray) => {};
let addUserInfoToLocalStorage = () => {
      //local storage
      let users = !!localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : [];
      let user = {
            username: userName,
            score: scoreArr, //[]
      };
      users.push(user);
      localStorage.setItem("user", JSON.stringify(users));
      // let local = JSON.parse(localStorage.getItem("user"));to get
};
