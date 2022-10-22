import { gql } from "@apollo/client";

const GetSubscriptionPassangers = gql`
  subscription getPassangerSubsctription {
    pasanggers_passanger {
      id
      name
      age
      gender
    }
  }
`;

export default GetSubscriptionPassangers;
