
const AskScreen = (props) => {
   
    let answers = ["adverb", "verb", "noun", "adjust"];// array for the answers 
    const handleAnswerOptionClick = (ans, curr) => {// ans is the answer that user chososed ,curr is the current index
        if (ans == props.questions?.[curr]?.pos) {//if answer is correct score ++
          props.setScore(props.score + 1);
          props.setTest("correct answer"); // will show this as text 
        } else {
          props.setTest("incorrect answer");
        }
    // to navigate in the questions by the current auestion
        const nextQuestion = props.currentQuestion + 1;
        if (nextQuestion < props.questions?.length) {
    // to delay 
              setTimeout(() => {
            props.setCurrentQuestion(nextQuestion);
            props.setTest("");
          }, 2000);
        } else {
        // for delay 
          setTimeout(() => {
            props.setShowScore(true);
          }, 2000);
        }
      };
    return ( 
        <>
        <div className="question-section">
          <div className="question-count">
            <span>Question {props.currentQuestion + 1}</span>/
            {props.questions?.length}
          </div>
          <div className="question-text">
            {props.questions?.[props.currentQuestion]?.word} is ....
          </div>
        </div>
        <div className="answer-section">
          {answers.map((ans, i) => (
            <button
              key={i}
              onClick={() => handleAnswerOptionClick(ans, props.currentQuestion)}
            >
              {ans}
            </button>
          ))}
          <div style={{ height: "30px" }}>
            <p>{props.test}</p>
          </div>
        </div>
      </>
     );
}
 
export default AskScreen;