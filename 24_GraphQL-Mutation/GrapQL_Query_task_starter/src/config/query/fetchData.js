import { gql } from "@apollo/client";

const getPassangerList = gql`
  query MyQuery {
    pasanggers_passanger {
      id
      name
      age
      gender
    }
  }
`;

export default getPassangerList;
