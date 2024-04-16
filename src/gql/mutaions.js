import { gql } from "@apollo/client";

const CREATE_CUSTOMER = gql`
  mutation addCustomer(
    $id: Int!
    $date: Date!
    $description: String!
    $name: String!
  ) {
    createCustomer(
      data: {
        customerId: $id
        customerName: $name
        customerCreateDate: $date
        customerDescription: $description
      }
    ) {
      customerId
      customerName
    }
  }
`;
const PUBLISH_USER = gql`
  mutation publishCustomerById($id: Int) {
    publishCustomer(where: { customerId: $id }, to: PUBLISHED) {
      customerId
    }
  }
`;
const DELETE_CUSTOMER = gql`
  mutation deleteCustomerById($id: Int) {
    deleteCustomer(where: { customerId: $id }) {
      customerId
    }
  }
`;

export { CREATE_CUSTOMER, PUBLISH_USER, DELETE_CUSTOMER };
