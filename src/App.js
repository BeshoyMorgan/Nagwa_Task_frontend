import React, { useEffect, useState } from "react";
import axios from "axios";


import ResultScreen from './Components/resultScreen';
import AskScreen from "./Components/askScreen";

export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);// hook for the index in the array of questions 
  const [showScore, setShowScore] = useState(false);// hook to test the test finished or not then show the score in score screen 
  const [arrOfQuestions, setArrOfQuestions] = useState([]);// hook for questions array 
  const [score, setScore] = useState(0);// hook for score
  const [rank, setRank] = useState(0);// hook for rank 
  const [test, setTest] = useState("");


// to post score when showScore became true
 useEffect(()=>{
	if (showScore) {
		axios({
		  method: "post",
		  url: "http://localhost:3333/rank",
		  data: {
			"score": score*10,
		  },
		}).then((response) => {
		  setRank(response.data);
		   console.log(response.data);
		}).catch(e=>alert(e));
	  }
 },[showScore])
 // to get our questions from node 
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3333/words",
    }).then((response) => {
      setArrOfQuestions(response.data);
    });
  }, []);

  const repeatTest = () => {
  // set all values as default 
	setScore(0);
    setTest("");
    setShowScore(false);
     setCurrentQuestion(0);
  };
  return (
    <div className="app">
      {showScore ?<ResultScreen 
	  score={score}
	  questions={arrOfQuestions}
	  rank={rank}
	  repeatTest={repeatTest}
	  


	  
	  ></ResultScreen> : (
       <AskScreen
	   questions={arrOfQuestions}
	    currentQuestion={currentQuestion}
	    setCurrentQuestion={setCurrentQuestion}
	   score={score}
	   setScore={setScore}
	   setShowScore={setShowScore}
	   test={test}
	   setTest={setTest}
	   ></AskScreen>
      )}
    </div>
  );
}
