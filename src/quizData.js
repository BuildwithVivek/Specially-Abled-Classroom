const allLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const generateOptions = (correctLetter) => {
  const allLettersExceptCorrect = allLetters.filter(letter => letter !== correctLetter);
  shuffleArray(allLettersExceptCorrect);
  const options = [correctLetter, ...allLettersExceptCorrect.slice(0, 3)];
  shuffleArray(options);
  return options;
};

const quizData = allLetters.map(letter => ({
  letter,
  image: `/images/${letter}.jpg`,
  options: generateOptions(letter),
  correctAnswer: letter,
}));

export default quizData;
