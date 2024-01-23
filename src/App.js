import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);

  const submitHandler = (e) => {
    if(file){
      const formData = new FormData()
      formData.append('file', file)

      axios
        .post("http://127.0.0.1:8000/upload", formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
        e.preventDefault()
    }
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <p>Upload the file</p>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
