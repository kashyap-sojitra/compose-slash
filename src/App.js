import { useCallback, useEffect, useState } from "react";
import "./App.css";
import handleSend from "./utils";
import { commands } from "./commands";

function App() {
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [sendClicked, setSendClicked] = useState(false);
  const [addNewCommand, setAddNewCommand] = useState(false);
  const [commandList, setCommandList] = useState(commands);
  const [newCommandName, setNewCommandName] = useState("");
  const [newCommandOperation, setNewCommandOperation] = useState("")


  const keyUpHandler = useCallback(
    (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        setSendClicked(true);
      }
    },
    [setSendClicked]
  );

  useEffect(() => {
    document.addEventListener("keyup", keyUpHandler);

    return () => {
      document.removeEventListener("keyup", keyUpHandler);
    };
  }, [keyUpHandler]);

  useEffect(() => {
    if (sendClicked) {
      const outputMessage = handleSend(input, commandList);
      setOutput(outputMessage);
      setSendClicked(false);
      setInput("");
    }
  }, [sendClicked, input, setSendClicked, setOutput, setInput, commandList]);

  const addToCommandList = useCallback(() => {
    const localCommandList = [...commandList];
    localCommandList.push({
      operation: newCommandName,
      rule: new Function('return ' + newCommandOperation)()
    });
    setCommandList(localCommandList);
    setAddNewCommand(false);
    setNewCommandName("");
    setNewCommandOperation("");
  }, [newCommandName, commandList, newCommandOperation, setCommandList, setAddNewCommand])

  return (
    <div className="App">
      {addNewCommand && 
        <div className="modal">
          <div className="modal-dialog">
            <header className="modal-header">
              Add a New Slash Command
              <button className="close-modal" onClick={() => setAddNewCommand(false)}>
                ✕
              </button>
            </header>
            <section className="modal-content">
              <input className="inputBox" type={"text"} value={newCommandName}  placeholder="Enter Command Name" onChange={(e) => setNewCommandName(e.target.value)} />
              <textarea className="inputBox" value={newCommandOperation} onChange={(e) => setNewCommandOperation(e.target.value)}></textarea>
              <button className="button sendMessage" onClick={addToCommandList}>Add Command</button>
            </section>
          </div>
        </div>
      }
      <div className="output">{output}</div>
      <input
        className="inputBox"
        type="text"
        name="input"
        id="input"
        placeholder="Enter Text Here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        id="enter"
        className="button sendMessage"
        onClick={() => setSendClicked(true)}
      >
        Send
      </button>
      <button
        id="enter"
        className="button addNewCommand"
        onClick={() => setAddNewCommand(true)}
      >
        Add New Command
      </button>
    </div>
  );
}

export default App;
