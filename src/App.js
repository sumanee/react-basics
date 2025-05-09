import "./App.css";
import Welcome from "./compoents/Welcome";
import Greeting from "./compoents/Greeting";
import { FirstCompoent as FC, SecondCompoent } from "./compoents/MyCompoent";
import MC from "./compoents/MyCompoent";
import HelloWorld from "./compoents/HelloWorld";
import Student from "./compoents/Student";
import Employee from "./compoents/Employee";
import User from "./compoents/User";
import EventHandling from "./compoents/EventHandling";
import ConditionRending from "./compoents/ConditionRending";

function App() {
  const student = {
    firstName: "One",
    lastName: "Number",
    email: "one@gmail.com",
  };
  const skills = ["HTML", "CSS", "JAVA"];
  return (
    <div className="App">
      <ConditionRending />
      <hr />
      <EventHandling />
      <hr />
      <User />
      <hr />
      <Employee />
      <hr />
      <Student firstName="One" lastName="Number" email="one@gmail.com" />
      {/* <Student student={student} />*/}
      <hr />
      <h1>Function</h1>
      <Welcome name="kuuipo" />
      <Welcome name="ABC" />
      <hr />
      <h1>Class</h1>
      <Greeting name="Test-1" />
      <hr />
      <FC />
      <SecondCompoent />
      <MC />
      <hr />
      <HelloWorld />
    </div>
  );
}

export default App;
