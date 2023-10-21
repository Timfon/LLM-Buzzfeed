import { questions, qData } from "../utils/questions";
import { Dispatch, SetStateAction, useState , useEffect} from "react";


export default function Quiz() {
  const [randomSubset, setRand] = useState<Array<qData>>([]);
  useEffect(() =>{
    function getRandom(arr, size) {
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
        <div id="sidebar">
          <form id="user-input" role="input">
            {randomSubset.map((q: qData, index: number) =>
            <div className = "flex my-5 p-2">
              <label className = "mr-2 p-2 font-semibold">{index + 1+ ". " + q.q}</label>
              <input maxLength={50} name = {q.tag} id = {q.tag} className = "border-2 p-2 border-gray-300 rounded-md focus:transition ease-linear"/>
            </div>
            )}
          </form>
        </div>
        <div id="detail"></div>
      </>
    );
  }