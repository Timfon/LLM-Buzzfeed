import { questions, qData } from "../utils/questions";

export default function Quiz() {
    return (
      <>
        <div id="sidebar">
          <form id="user-input" role="input">
            {questions.map((q: qData, index: number) =>
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