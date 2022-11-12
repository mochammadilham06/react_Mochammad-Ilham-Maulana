import { gql } from "@apollo/client";

const DeletePassangers = gql`
  mutation DeleteQuery($id: Int!) {
    delete_pasanggers_passanger_by_pk(id: $id) {
      id
    }
  }
`;

export default DeletePassangers;
