import React, { useState } from "react";
import CustomerInputs from "./CustomerFieldInputs/CustomerInputs";
import CustomersTable from "./CustomerDataTable/CustomersTable";

const Customer = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [reFetch,setReFetch] = useState(false)
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
        setReFetch={setReFetch}
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
        reFetch={reFetch}
        setReFetch={setReFetch}

      />
    </>
  );
};

export default Customer;
