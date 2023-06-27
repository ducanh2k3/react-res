import { useState ,useEffect} from "react";
import "./App.css";
import { List, Input } from "@/components";

function App() {
  const [list, setList] = useState([
    { id: 1, name: "sp 1" },
    { id: 2, name: "sp 2" },
  ]);
  

  const addItem = (item: any) => {
    const updatedList = [...list, item];
    console.log(updatedList);
    setList(updatedList);
  };
  const removeItem = (id: number) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };
  return (
    <>
      <Input insertItem={addItem} />
      <List lst={list} deleteitem={removeItem} />
    </>
  );
}

export default App;
