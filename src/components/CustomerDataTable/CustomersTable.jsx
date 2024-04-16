import React, { useEffect, useState } from "react";

import { useMutation, useQuery } from "@apollo/client";
import { GET_CUSTOMERS } from "../../gql/queries";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import { DELETE_CUSTOMER } from "../../gql/mutaions";

const CustomersTable = ({ reFetch, setReFetch }) => {
  const [id, setId] = useState(null);
  const { data, error, loading } = useQuery(GET_CUSTOMERS);
  const [customersData, setCustomersData] = useState([]);

  useEffect(() => {
    if (data) setCustomersData(data.customers);
  }, [data]);

  useEffect(() => {
    if (reFetch) {
      setCustomersData(data.customers);
      setReFetch(false);
    }
  }, [reFetch]);
  const [deleteCustomerById, {}] = useMutation(DELETE_CUSTOMER);

  const deleteHandler = (deleteId) => {
    deleteCustomerById({
      variables: {
        id: +deleteId,
      },
      refetchQueries: {
        GET_CUSTOMERS,
      },
    });
  };
  const editHandler = (id) => {};
  console.log(data, error, loading);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>an error exist...</h1>;
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>شماره ID مشتری</TableCell>
              <TableCell align='right'>نام مشتری</TableCell>
              <TableCell align='right'>توضیحات</TableCell>
              <TableCell align='right'>تاریخ ایجاد</TableCell>
              <TableCell align='right'>اقدامات</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading && customersData ? (
              customersData?.map((i) => (
                <TableRow
                  key={i.customerId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    {i.customerId}
                  </TableCell>
                  <TableCell align='right'>{i.customerName}</TableCell>
                  <TableCell align='right'>{i.customerDescription}</TableCell>
                  <TableCell align='right'>{i.customerCreateDate}</TableCell>
                  <TableCell align='right'>
                    <Tooltip title='ویرایش' arrow enterDelay={2000}>
                      <IconButton onClick={() => editHandler(i.customerId)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title='حذف' arrow enterDelay={2000}>
                      <IconButton onClick={() => deleteHandler(i.customerId)}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <h1>nothing...</h1>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomersTable;
