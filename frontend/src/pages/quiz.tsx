import { questions, qData } from "../utils/questions";
import { Dispatch, SetStateAction, useState , useEffect} from "react";
import { Link } from "react-router-dom"

interface ansData{
  q: string,
  a: string;
}


export default function Quiz() {
  const [randomSubset, setRand] = useState<Array<qData>>([]);
  const [answers, _setAnswers] = useState(Array(10));
  const [tone, setTone] = useState("humorous");
  const [topic, setTopic] = useState("personality");

  const setAnswers = (answer: ansData, index: number) => {

    answers[index] = answer;

};

const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) =>{
    console.log("Start submiting")

    const response = fetch("http://localhost:5140/analysis", 
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
      topic: "TEMPLATE",
      style: "TEMPLATE",
      content: answers.map(a => ({question:a.q, answer:a.a}))
    })
    }).then((res) => {
      console.log(res)
      console.log(res.body)
      res.body
    }).catch((err) => console.log("Error: " + err))

    console.log(response);
    e.preventDefault();
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


    return (
      <>
        <div className = "transition-opacity ease-in duration-75" id="sidebar">
          <form id="Quiz" onSubmit={ e=> handleSubmit(e)}>
            {randomSubset.map((question: qData, index: number) =>
            <div className = "flex my-5 p-2" key = {index}>
              <label className = "mr-2 p-2 font-semibold">{question.q}</label>
              <input maxLength={50} value = {answers[index]} onChange = {e => setAnswers({q: question.q, a: e.target.value}, index)} 
                name = {question.tag} id = {question.tag} 
                className = "border-2 p-2 border-gray-300 rounded-md focus:transition ease-linear" required/>
            </div>
            )}

            <div className = "flex font-semibold">
              <p className = "p-2">We'll determine your:</p>
              <select className = "border-2 bg-transparent p-2 border-gray-300 rounded-md focus:transition ease-linear" onChange = {e => setTopic(e.target.value)}>
                <option selected value="personality">personality</option>
                <option value="character">fictional character</option>
                <option value="color">color</option>   
              </select>
              <p className = "p-2">in a</p>
              <input maxLength={50} className = "border-2 p-2 border-gray-300 rounded-md focus:transition ease-linear" value={tone} onChange = {e => setTone(e.target.value)}/>
              <p className = "p-2">tone!</p>
            </div>
            <div className = "mx-auto">
              <input type="submit" value="Submit" className = "bg-blue-500 hover:bg-blue-700 my-2 p-2 text-white rounded-md transition ease-in-out duration-75 hover:scale-110"/>
            </div>
          </form>  
        </div>


      </>
    );
  }