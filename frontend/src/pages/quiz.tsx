import { questions, qData } from "../utils/questions";
import { Dispatch, SetStateAction, useState , useEffect} from "react";
import { redirect } from "react-router-dom"

interface ansData{
  q: string,
  a: string;
}


export default function Quiz() {
  const[opacity, setOpacity] = useState<number>(1.0);
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
        <div className = {"transition-opacity ease-in duration-75 " + opacity} id="sidebar">
          <form id="Quiz" onSubmit={ e=> handleSubmit(e)}>
          <div className = "flex font-semibold">
              <p className = "p-2">We'll determine your:</p>
              <input maxLength={50} className = "border-2 p-2 border-white bg-transparent rounded-md focus:transition ease-linear" defaultValue={topic} onChange = {e => setTopic(e.target.value)}/>
              <p className = "p-2">in a</p>
              <input maxLength={50} className = "border-2 p-2 border-white bg-transparent rounded-md focus:transition ease-linear" defaultValue={tone} onChange = {e => setTone(e.target.value)}/>
              <p className = "p-2">tone!</p>
            </div>
            
            {randomSubset.map((question: qData, index: number) =>
            <div className = "flex my-5 p-2" key = {index}>
              <label className = "mr-2 p-2 font-semibold">{question.q}</label>
              <input maxLength={50} onChange = {e => setAnswers({q: question.q, a: e.target.value}, index)} 
                name = {question.tag} id = {question.tag} 
                className = "border-2 p-2 border-white rounded-md bg-opacity-75 bg-transparent" required/>
            </div>
            )}
            <div className = "mx-auto">
              { !(submitted)? <input type="submit" value="Submit" 
              className = "bg-indigo-950 my-2 p-2 text-white rounded-md transition ease-in-out duration-75 hover:scale-110 font-semibold"/> : 
              <div className = "border-2 p-2 border-white bg-transparent rounded-md focus:transition ease-linear"></div>}
            </div>


          </form>  
        </div>   
    ) : <div>{response}</div>;
  }