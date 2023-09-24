import React from "react";
import classes from "./App.module.scss";

function App() {
  return (
    <>
      <div className={classes.textRegular}>Hello regular world!!!!</div>
      <div className={classes.textMedium}>Hello medium world!!!!</div>
      <div className={classes.textSemiBold}>Hello semiBold world!!!!</div>
      <div className={classes.textBold}>Hello Bold world!!!!</div>
    </>
  );
}

export default App;
