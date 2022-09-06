import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo";
import All from "./pages/All";
import Done from "./pages/Done";
import { nanoid } from "nanoid";
var click = false;
var listItem = []
var allItem = []
var doneItem = []
listItem = JSON.parse(localStorage.getItem('todo'))
allItem = JSON.parse(localStorage.getItem('all'))
doneItem = JSON.parse(localStorage.getItem('done'))

function App() {

  localStorage.setItem('all', JSON.stringify(allItem));
  localStorage.setItem('todo', JSON.stringify(listItem));
  localStorage.setItem('done', JSON.stringify(doneItem));

  const [textField, setTextField] = React.useState("");
  const [displayMessage, setDisplayMessage] = useState("");
  const [text, setText] = useState("");
  const [check, setCheck] = useState('');
  const [items, setItems] = React.useState({
    item: "s ",
    id: "s ",
    done: false,
  });

  function handleCheck(ids) {
    doneItem = doneItem || []
    var count = 0
    for (let i = 0; i < listItem.length; i++) {
      if(listItem===[])
      break;
      if (listItem[i].id === ids) {
        listItem[i].done = true;
        allItem[i].done = true;
        count = i
        doneItem.unshift(listItem[i])
        if (i > -1) {
          listItem.splice(i, 1);
      }
      }
      doneItem.reverse()
      setCheck(listItem[count])
    }
  }

  
  React.useEffect(function(){
  }, [check] )

  function handleClick() {
    setItems((prev) => {
      return {
        ...prev,
        item: displayMessage,
        id: nanoid(),
        done:false
      };
    });
    click = true;
  }

  if (click) {
    try{
      listItem = listItem || []
      allItem = allItem || []
    listItem.unshift(items);
    allItem.unshift(items)
    click = false;
    setText("");
    setItems('')
    setTextField('')
  }
  catch{
    console.log("error")
  }
  }

  
  
  useEffect(() => {
    const timeOutId = setTimeout(() => setDisplayMessage(textField), 500);
    setText(textField);
    return () => clearTimeout(timeOutId);
  }, [textField]);

  // React.useEffect();
  function handleRemove(remove){
    if(remove){
    listItem = []
    allItem = []
    doneItem = []
    remove=false
    localStorage.clear()
  }
  setCheck(remove)
  }
  

  return (
    <div>
      <Nav />
      <div className="form">
        <TextField
          id="standard-basic"
          label="Add Task"
          variant="standard"
          // onChange={handleChange}
          onChange={(event) => setTextField(event.target.value)}
          value={text}
          sx={{ width: "300px" }}
        />
        <Button
          onClick={handleClick}
          disabled={textField.length <= 0}
          variant="contained"
          sx={{
            padding: "0",
            marginInline: "1em",
            backgroundColor: "skyBlue",
            borderColor: "skyBlue",
            height: "40px",
            width: "70px",
          }}
        >
          Create
        </Button>
      </div>
      <div className="button-group">
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        sx={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gap: "0.5em",
          width: "94vw",
          margin:'0 0.5em',
          boxShadow: "none",
          // justifyContent:'space-between'

        }}
      >
        <Link to="/todo-list/" sx={{ textDecoration: "none" }}>
          <Button
            sx={{
              backgroundColor: "skyblue",
              color: "#333",
              width: "90%",
              textDecoration: "none !important",
             boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'

            }}
          >
            TO DO
          </Button>
        </Link>

        <Link to="/todo-list/done">
          <Button
            sx={{ backgroundColor: "skyblue", color: "#333", width: "90%",
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}
          >
            Done
          </Button>
        </Link>

        <Link to="/todo-list/all">
          <Button
            sx={{ backgroundColor: "skyblue", color: "#333", width: "90%",
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}
          >
            All
          </Button>
        </Link>
      </ButtonGroup>
      </div>
      <div className="lists">
        <Routes>

          <Route
            path="/todo-list/"
            element={<Todo item={listItem} change={handleCheck} />}
          />

          <Route 
            path="/todo-list/done" 
            element={<Done  item={doneItem}/>} />
          <Route 

            path="/todo-list/all" 
            element={<All item={allItem} />} />

        </Routes>
      </div>
      <Button
        className="btn"
            sx={{ backgroundColor: "skyblue", color: "#333",  position: 'absolute',right:' 1em',bottom: '1em '}} 
            onClick={()=>handleRemove(true)}>Remove All</Button>
    </div>
  );

}

export default App;

