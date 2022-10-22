import { gql } from "@apollo/client";

const CreatePassangers = gql`
  mutation MyMutation($objects: [pasanggers_passanger_insert_input!] = {}) {
    insert_pasanggers_passanger(objects: $objects) {
      returning {
        id
      }
    }
  }
`;

export default CreatePassangers;
