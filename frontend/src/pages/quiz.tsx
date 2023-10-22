import { questions, qData } from "../utils/questions";
import { useState , useEffect} from "react";

interface ansData{
  q: string,
  a: string;
}


export default function Quiz() {
  const [randomSubset, setRand] = useState<Array<qData>>([]);
  const [answers, _setAnswers] = useState(Array(10));
  const [tone, setTone] = useState("humorous");
  const [topic, setTopic] = useState("personality");
  const [response, setResponse] = useState("");
  const [hasResponse, setHasResponse] = useState(false);
  const [submitted, setSubmitted] = useState(false)

  const setAnswers = (answer: ansData, index: number) => {

    answers[index] = answer;

};

const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) =>{
    console.log("Start submiting")
    e.preventDefault();
    setSubmitted(true);
    let resp = (await (await fetch("http://localhost:5140/analysis", 
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
      topic: topic,
      style: tone,
      content: answers.map(a => ({question:a.q, answer:a.a}))
    })
    })).json());
    console.log(resp)
    setResponse(resp.analysis)
    console.log("Done")
    console.log(response)
    setHasResponse(true);   
}





  useEffect(() =>{
    function getRandom(arr: qData[], size: number) {
      var shuffled = arr.slice(0), i = arr.length, temp, index;
      while (i--) {
          index = Math.floor((i + 1) * Math.random());
          temp = shuffled[index];
          shuffled[index] = shuffled[i];
          shuffled[i] = temp;
      }
      return shuffled.slice(0, size);
      }
      setRand(getRandom(questions,10));

  }, []);


    return !hasResponse ? (
        <div className = "transition-opacity ease-in duration-75 " id="sidebar">
          <form id="Quiz" onSubmit={ e=> handleSubmit(e)}>
          <div className = "flex font-semibold">
              <p className = "p-2">We'll determine your:</p>
              <input maxLength={50} className = "border-2 p-2 border-white bg-transparent rounded-md focus:transition ease-linear" defaultValue={topic} onChange = {e => setTopic(e.target.value)}/>
            </div>
            
            {randomSubset.map((question: qData, index: number) =>
            <div className = "flex my-5 p-2" key = {index}>
              <label className = "mr-2 p-2 font-semibold">{question.q}</label>
              <input maxLength={50} onChange = {e => setAnswers({q: question.q, a: e.target.value}, index)} 
                name = {question.tag} id = {question.tag} 
                className = "border-2 p-2 border-white rounded-md bg-opacity-75 bg-transparent" required/>
            </div>
            )}
            <div className = "mx-auto inline-block">
              { !(submitted)? <input type="submit" value="Submit" 
              className = "bg-white my-2 p-2 text-purple-500 rounded-md transition ease-in-out duration-150 hover:scale-110 font-semibold"/> : 
              <div className = "border-2 font-semibold rounded-md p-2 border-white bg-transparent my-2">Loading</div>}
            </div>


          </form>  
        </div>   
    ) : <div><Interpretation  paragraph = {response}/></div>;
  }

interface interp{
  paragraph: string
}

function Interpretation({paragraph}: interp){
  const headers = ["What we think about you", "You are...", "Our Interpretation", "A deep into your soul..."]
  return(  
  <div className = "p-4">
    <div className = "flex flex-col items-center text-8xl font-bold mb-5"><p>{headers[Math.floor(Math.random() * headers.length)]}</p></div>
    <p className = "text-lg">{paragraph}</p>
    <div className = "flex flex-col items-center">
    <button onClick ={() =>window.location.reload()} className = "hover:scale-110 transition-scale ease-in-out duration-200 mt-5 text-lg font-bold p-2 bg-white rounded-md w-min text-purple-500">Restart!</button>
    </div>
  </div>
  
  );

}