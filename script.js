window.onload = function () {
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      resetButton  = document.getElementById('resetButton'),
      current      = 0,
      allQuestions = {
        'Who rambles the most?': ['Amara', 'Santi', 'JoJo', 0],
        'What is the dumbest animal?': ['Nathan', 'Ostriches', 'Mosquitoes', 1],
        'Who does Yogen love the most?': ['Soren', 'Nathan', 'Carlo', 0],
        'Who is off their Antipsychotic pills?' : ['JoJo', 'Nathan', 'Pichael', 0],
        'Can cats taste sweets?' : ['Yes', 'No', 1],
        'Which animal sleeps 90% of their lives' : ['Koalas', 'Sloths', 'I\'m in your walls', 0]
      };
  
  function loadQuestion(curr) {
    var question = Object.keys(allQuestions)[curr];
    questionArea.innerHTML = question;
  }
  
  function loadAnswers(curr) {
    var answers = allQuestions[Object.keys(allQuestions)[curr]];
    answerArea.innerHTML = '';
    
    for (var i = 0; i < answers.length - 1; i += 1) {
      var createDiv = document.createElement('div'),
          text = document.createTextNode(answers[i]);
      
      createDiv.appendChild(text);
      createDiv.addEventListener("click", checkAnswer(i, answers));
      answerArea.appendChild(createDiv);
    }
  }
  
  function checkAnswer(i, arr) {
    return function () {
      var givenAnswer = i,
          correctAnswer = arr[arr.length - 1];
      
      if (givenAnswer === correctAnswer) {
        addChecker(true);
      } else {
        addChecker(false);
      }
      
      if (current < Object.keys(allQuestions).length - 1) {
        current += 1;
        loadQuestion(current);
        loadAnswers(current);
      } else {
        questionArea.innerHTML = 'Done!';
        answerArea.innerHTML = '';
      }
    };
  }
  
  function addChecker(bool) {
    var createDiv = document.createElement('div'),
        txt = document.createTextNode(current + 1);
    
    createDiv.appendChild(txt);
    
    if (bool) {
      createDiv.className += 'correct';
      checker.appendChild(createDiv);
    } else {
      createDiv.className += 'false';
      checker.appendChild(createDiv);
    }
  }
  
  function resetQuiz() {
    current = 0;
    loadQuestion(current);
    loadAnswers(current);
    checker.innerHTML = '';
  }
  
  loadQuestion(current);
  loadAnswers(current);
  
  resetButton.addEventListener('click', resetQuiz);
};