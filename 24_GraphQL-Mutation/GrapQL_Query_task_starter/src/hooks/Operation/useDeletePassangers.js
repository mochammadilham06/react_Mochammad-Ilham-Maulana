import { useMutation } from "@apollo/client";
import { getPassangerList } from "../../config";
import { DeletePassangers } from "../../config";
export default function UseDeletePassangers() {
  const [deletePassanger, { loading: deleteLoading }] = useMutation(
    DeletePassangers,
    { refetchQueries: [getPassangerList] }
  );

  return {
    deletePassanger,
    deleteLoading,
  };
}
