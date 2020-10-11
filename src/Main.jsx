import React, { useState } from "react";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

function Main() {
  //title = columns, field = corresponding data
  const columns = [
    { title: "id", field: "id", hidden: true },
    { title: "Item", field: "item" },
    { title: "Category", field: "category" },
    { title: "Price", field: "price" },
  ];
  //table data
  const [data, setData] = useState([]);
  //for error handling
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  return (
    <header>
      <div className="header_container">
        <h1>
          <AccountBalanceIcon /> XPENSES
        </h1>
      </div>
      <div className="spendings_container"></div>
    </header>
  );
}

export default Main;
