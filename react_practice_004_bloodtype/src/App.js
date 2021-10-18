import "./App.css";
import Question from "./components/Question";
import Option from "./components/Option";
import Button from "./components/Button";
import OptionList from "./OptionList";

const questions = [
  { id: 1, ask1: "あんた何型なん？" },
  { id: 2, ask2: "相手は何型か知っとーと？" },
];
const options = [
  { id: 1, choose: "A型" },
  { id: 2, choose: "B型" },
  { id: 3, choose: "O型" },
  { id: 4, choose: "AB型" },
  { id: 5, choose: "知らん…" },
];

function App() {
  return (
    <div className="App">
      <div>血液型相性診断</div>
      {/* <Button /> */}
      <Question questions={questions[0]} />
      {/* OPTIONS */}
      <Option options={options[0]} />
      <Option options={options[1]} />
      <Option options={options[2]} />
      <Option options={options[3]} />
      <Option options={options[4]} />

      {/* <OptionList OptionList={options}/> */}

      <Button />
    </div>
  );
}

export default App;
