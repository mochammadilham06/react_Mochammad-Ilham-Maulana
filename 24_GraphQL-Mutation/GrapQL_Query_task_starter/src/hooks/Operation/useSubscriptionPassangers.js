import { useSubscription } from "@apollo/client";
import { GetSubscriptionPassangers } from "../../config";

export default function UseSubsciptionPassangers() {
  const {
    data,
    loading: getLoading,
    error: getError,
  } = useSubscription(GetSubscriptionPassangers);

  return {
    data,
    getLoading,
    getError,
  };
}
