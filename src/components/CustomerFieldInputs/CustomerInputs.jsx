import { useMutation, useQuery } from "@apollo/client";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  CREATE_CUSTOMER,
  PUBLISH_USER,
  UPDATE_CUSTOMER,
} from "../../gql/mutaions";
import { GET_CUSTOMERS } from "../../gql/queries";
const CustomerInputs = ({
  id,
  setId,
  setName,
  setDescription,
  setDate,
  name,
  description,
  date,
  buttonStatus,
  setButtonStatus,
  updateUI
}) => {
  const [addCustomer, { data, error, loading }] = useMutation(CREATE_CUSTOMER, {
    variables: {
      id,
      name,
      date,
      description,
    },
  });
  const [publishCustomerById, {}] = useMutation(PUBLISH_USER, {
    variables: {
      id,
    },
    refetchQueries: {
      GET_CUSTOMERS,
    },
  });
  const [updateCustomerById, {}] = useMutation(UPDATE_CUSTOMER);
  const submitHandler = async () => {
    await addCustomer();
    await publishCustomerById();
    updateUI();
    console.log(data);
  };
  const editHandler = async () => {
    await updateCustomerById({
      variables: {
        id,
        name,
        date,
        description,
      },
      refetchQueries:{
        GET_CUSTOMERS
      }
    });
    await publishCustomerById();
    setButtonStatus("add");
    updateUI();
  };
  return (
    <React.Fragment>
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        label='نام مشتری'
        placeholder='نام مشتری'
      />
      <TextField
        value={id}
        onChange={(e) => setId(+e.target.value)}
        label='ID مشتری'
        placeholder='ID مشتری'
      />
      <TextField
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        label='توضیحات'
        placeholder='توضیحات'
      />
      <TextField
        value={date}
        type='date'
        onChange={(e) => setDate(e.target.value)}
        label='تاریخ'
        placeholder='تاریخ'
      />
      {buttonStatus === "edit" ? (
        <Button onClick={editHandler} variant='contained'>
          ویرایش مشتری
        </Button>
      ) : (
        <Button onClick={submitHandler} variant='contained'>
          افزودن مشتری
        </Button>
      )}
    </React.Fragment>
  );
};

export default CustomerInputs;
