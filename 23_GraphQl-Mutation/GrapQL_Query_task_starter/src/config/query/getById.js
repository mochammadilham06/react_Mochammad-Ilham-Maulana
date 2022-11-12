import { gql } from "@apollo/client";

const getPassangerById = gql`
  query MyQuery($id: Int) {
    pasanggers_passanger(where: { id: { _eq: $id } }) {
      id
      name
      age
      gender
    }
  }
`;

export default getPassangerById;
