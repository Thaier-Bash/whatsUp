import React, { useState } from "react";
import Login from "./login";

function App() {
  const [id, setId] = useState();

  return (
    <>
      {id}
      <Login onIdSubmit={setId} />
    </>
  );
}

export default App;
