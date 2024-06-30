import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./Message";
import ListGroup from "./component/ListGroup";
import Altert from "./component/Altert";
import Button from "./component/ButtonGroup/Button";
import Like from "./component/LikeGroup";
import produce from "immer";
import ExpandableText from "./ExpandableText";
import Form from "./Form";
import FormZod from "./FormZod";
import FormSelect from "./FormSelect";
function App() {
  let maps = ["a", "b", "c", "d"];
  const handelSelectImem = (item: string) => console.log(item);

  const [visable, setVisable] = useState(false);

  const [bugs, setBugs] = useState([
    { id: 1, titile: "bug 1", fixed: false },
    { id: 2, titile: "bug 2", fixed: false },
  ]);

  const [len, setLen] = useState(false);

  const handleClick = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((item) => item.id === 1);
        if (bug) {
          bug.fixed = true;
        }
      })
    );
  };
  return (
    // <div>
    //   <ListGroup
    //     maps={maps}
    //     heading={"test"}
    //     onSelectImem={handelSelectImem}
    //   ></ListGroup>
    // </div>
    // <div>
    //   <Altert>
    //     Hello <span> Alert</span>
    //   </Altert>
    // </div>

    // <div>
    //   {visable && (
    //     <Altert
    //       children={"hello alret"}
    //       onClose={() => setVisable(false)}
    //     ></Altert>
    //   )}
    //   <Button
    //     text={"hello"}
    //     onClick={() => {
    //       console.log("click button");
    //       setVisable(true);
    //     }}
    //     color={"primary"}
    //   ></Button>
    // </div>

    // <Like onClick={() => console.log("clicked")}></Like>

    // <div>
    //   {bugs.map((item) => (
    //     <p key={item.id}>
    //       {item.titile} {item.fixed ? "Fixed" : "New"}
    //     </p>
    //   ))}
    //   <Button text={"hello"} onClick={handleClick} color={"primary"}></Button>
    // </div>
    // <div>
    //   <ExpandableText state={len}></ExpandableText>
    //   <button onClick={() => setLen(!len)}>hello</button>
    // </div>
    // <Form></Form>
    // <FormZod></FormZod>
    <FormSelect></FormSelect>
  );
}

export default App;
