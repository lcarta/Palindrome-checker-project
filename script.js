const checkButton = document.getElementById('check-btn');
const explainBox = document.getElementById('explain-box');
const explainText = document.getElementById('explain-text');
const textInput = document.getElementById('text-input');
const openIcon = document.getElementById('open-explain-icon');
const resultBox = document.getElementById('result-box');
const resultText = document.getElementById('result');
let isOpenExplain = false;



const isInvalidInput = (text) => {
  const regex = /[/\w/i]/g;
  return text.match(regex);
}

const palindromeChecker = () => {
  const textInputArray = isInvalidInput(textInput.value);
  const revTextArray = [...textInputArray].reverse();
  textInputArray.join("") === revTextArray.join("") ? resultBox.style.backgroundColor = "var(--result-background-color-palindrome)" : resultBox.style.backgroundColor = "var(--result-background-color-not-palindrome)"
  return textInputArray.join("") === revTextArray.join("") ? `"${textInput.value}" is a palindrome` : `"${textInput.value}" is not a palindrome`;
}

const viewReturn = () => {
  if (textInput.value !== "") {
    resultText.innerText = palindromeChecker();
    textInput.value = "";
    resultBox.style.display = "block";
  } else {
    window.alert('Please input a value');
    resultBox.style.display = "none";
    return
  }
}

//Start Function for open explain text
const openExplain = () => {
  if (isOpenExplain) {
    explainText.style.display = "none";
    isOpenExplain = false;
    openIcon.innerText = "keyboard_double_arrow_down";
    explainBox.classList.remove('hidden-scroll');
  }
  else {
    explainText.style.display = "block";
    isOpenExplain = true;
    openIcon.innerText = "keyboard_double_arrow_up";
    explainBox.classList.add('hidden-scroll');

  }
}



//End Function for open explain text

openIcon.addEventListener('click', openExplain);

checkButton.addEventListener('click', viewReturn)