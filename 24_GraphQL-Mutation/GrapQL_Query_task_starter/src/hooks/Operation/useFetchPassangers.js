import { useQuery } from "@apollo/client";
import { getPassangerList, GetSubscriptionPassangers } from "../../config";

export default function UseFetchPassangers() {
  const {
    data,
    loading: getLoading,
    error: getError,
    subscribeToMore,
  } = useQuery(getPassangerList);

  const subscribePassanger = () => {
    subscribeToMore({
      document: GetSubscriptionPassangers,
      updateQuery: (prev, { subscriptionData: { data } }) => {
        console.log(data);
        return data;
      },
    });
  };

  return {
    data,
    getLoading,
    getError,
    subscribePassanger,
  };
}
