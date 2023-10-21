import { questions, qData } from "../utils/questions";
import { Dispatch, SetStateAction, useState , useEffect} from "react";

interface ansData{
  q: string,
  a: string;
}


export default function Quiz() {
  const [randomSubset, setRand] = useState<Array<qData>>([]);
  const [answers, _setAnswers] = useState(Array(10));

  const setAnswers = (answer: ansData, index: number) => {

    answers[index] = answer;

};

const handleSubmit =(e: React.SyntheticEvent<HTMLFormElement>) =>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: answers
  };


    console.log("submitted form!");
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
            {answers.map((index: number) =>
            <div className = "flex my-5 p-2">
              <label className = "mr-2 p-2 font-semibold">{index + 1+ ". " + randomSubset[index].q}</label>
              <input maxLength={50} value = {answers[index]} onChange = {e => setAnswers({q: randomSubset[index].q, a: e.target.value}, index)} 
                name = {randomSubset[index].tag} id = {randomSubset[index].tag} 
                className = "border-2 p-2 border-gray-300 rounded-md focus:transition ease-linear"/>
            </div>
            )}
            <input type="submit" value="Submit"/>
          </form>
          
        </div>

      </>
    );
  }