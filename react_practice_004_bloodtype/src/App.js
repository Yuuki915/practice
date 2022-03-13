import "./App.css";

import Start from "./component/start/Start";

// const questions = [
//   { id: 1, ask1: "あなたの何型は？" },
//   { id: 2, ask2: "相手の血液型は？" },
// ];
// const options = [
//   { id: 1, choose: "A型" },
//   { id: 2, choose: "B型" },
//   { id: 3, choose: "O型" },
//   { id: 4, choose: "AB型" },
//   { id: 5, choose: "知らん…" },
// ];

function App() {
  return (
    <div className="App">
      {/* <div>血液型相性診断</div> */}

      <Start />
    </div>
  );
}

export default App;
