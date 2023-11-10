import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import React, { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </>
  );
}

/*
function App() {
  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading={"Cities"}
          onSelectItem={handleSelectItem}
        />
      </div>

    </>
  );
}
*/
export default App;
