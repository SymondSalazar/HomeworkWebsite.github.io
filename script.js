
const questionContainers = document.querySelectorAll('.question-container');
const submitButton = document.getElementById('submit');


let score = 0;

function selectOption(event) {
  const selectedOption = event.target;
  const questionContainer = selectedOption.parentNode;
  const options = questionContainer.querySelectorAll('.option');

  options.forEach(option => {
    // Desactiva los botones de opción para evitar selecciones adicionales
    if (option === selectedOption) {
      option.classList.add('selected'); // Marca la opción seleccionada con la clase 'selected'
      option.classList.remove('option');
      if (option.classList.contains('correct')) {
        score++;
      }
    } else if(option.classList.contains('correct')  || option.classList.contains('option')) {
      option.classList.add('diselected');
      option.disabled = true;
    }
    
  });
}

function showScore() {
  const totalQuestions = questionContainers.length;
  const percentage = (score / totalQuestions) * 100;
  let name = document.getElementById('inputName').value;
  const message = `Hey ${name} you answered ${score} questions in the way an introverted does, according to my calculations, you are (${percentage.toFixed(2)}% introverted)`;

  // Muestra la puntuación final en un pop-up

  document.getElementById('your-name').innerHTML = message;
 // alert("Being introverted is not bad; many people enjoy being this way");
  //alert("Here are some recommendations to stop being introverted:\n1.-Engage in social activities and events that align with your interests.\n2.-Practice active listening and ask questions to show genuine interest in others.\n3.-Join clubs, organizations, or community groups to meet new people.\n Challenge yourself to step out of your comfort zone and try new experiences.\n3.-Take small steps towards building social confidence,\n such as initiating conversations or speaking up in group settings.\n 4.-Seek support from a therapist or counselor who can provide guidance and techniques for overcoming social anxiety.\n5.-Set realistic goals for social interactions and celebrate your progress.\n6.-Focus on developing strong communication skills, including assertiveness and effective conversation techniques.\n7.-Find balance between alone time and socializing to recharge and avoid burnout. \nRemember that it's okay to be introverted, and embrace your unique qualities.");
}

submitButton.addEventListener('click', showScore);



questionContainers.forEach(container => {
  const options = container.querySelectorAll('.option');
  options.forEach(option => {
    option.addEventListener('click', selectOption);
  });
  

});