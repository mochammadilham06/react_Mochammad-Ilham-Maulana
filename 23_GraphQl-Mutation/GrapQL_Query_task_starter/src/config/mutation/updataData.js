import { gql } from "@apollo/client";

const UpdatePassanger = gql`
  mutation MyMutation($id: Int, $name: String, $age: Int, $gender: String) {
    update_pasanggers_passanger(
      where: { id: { _eq: $id } }
      _set: { name: $name, age: $age, gender: $gender }
    ) {
      returning {
        id
        name
        age
        gender
      }
    }
  }
`;

export default UpdatePassanger;
