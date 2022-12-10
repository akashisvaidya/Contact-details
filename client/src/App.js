// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginArea from "./components/LoginArea";
import { OutPut } from "./components/OutPut";

function App() {
  return (
    <div className="container">
      <LoginArea />
      <OutPut />
    </div>
  );
}

export default App;
