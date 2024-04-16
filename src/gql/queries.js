import { gql } from "@apollo/client";

const GET_CUSTOMERS = gql`
query MyQuery {
  customers {
    customerId
    customerName
    customerDescription
    customerCreateDate
  }
}
`

export {GET_CUSTOMERS}