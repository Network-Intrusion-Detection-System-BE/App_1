import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);

  const submitHandler = (e) => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      axios
        .post("http://127.0.0.1:8000/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      e.preventDefault();
    }
  };

  return (
    <div className="relative h-screen">
      <div className="shadow-lg p-5 bg-slate-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-6 rounded-md">
        <p className="text-center text-sm">Upload the PCAP file</p>
        <div>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className="flex">
          <button
            className="hover:bg-blue-700 py-2 px-5 bg-blue-500 text-white rounded-md flex-grow"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
