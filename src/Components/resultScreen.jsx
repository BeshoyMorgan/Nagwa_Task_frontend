const ResultScreen = (props) => {
    return ( 
        
        <div className="score-section">
          <p>
            You scored {props.score * 10} out of {props.questions?.length * 10}
          </p>
		  <p>Your Rank is : {props.rank}</p>

          <button
            onClick={() => {
              props.repeatTest();
            }}
          >
            Take This Test Again
          </button>
          <button
            onClick={() => {
              window.location.reload(true);
            }}
          >
            New Test
          </button>
        </div>
      
     );
}
 
export default ResultScreen;