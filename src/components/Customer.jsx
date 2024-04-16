import React, { useState } from "react";
import CustomerInputs from "./CustomerFieldInputs/CustomerInputs";
import CustomersTable from "./CustomerDataTable/CustomersTable";

const Customer = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [buttonStatus, setButtonStatus] = useState("add");
  const [updateFlag, setUpdateFlag] = useState(false);
  const updateUI = () => {
    setUpdateFlag(!updateFlag); // Toggle update flag to trigger re-render
  };
  return (
    <>
      <CustomerInputs
        id={id}
        setId={setId}
        setName={setName}
        setDescription={setDescription}
        setDate={setDate}
        name={name}
        description={description}
        date={date}
        buttonStatus={buttonStatus}
        setButtonStatus={setButtonStatus}
        updateUI={updateUI}
      />
      <CustomersTable
        id={id}
        setId={setId}
        setName={setName}
        setDescription={setDescription}
        setDate={setDate}
        name={name}
        description={description}
        date={date}
        setButtonStatus={setButtonStatus}
        updateUI={updateUI}
        updateFlag={updateFlag} 
      />
    </>
  );
};

export default Customer;
