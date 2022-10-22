import { useMutation } from "@apollo/client";
import { getPassangerList } from "../../config";
import { UpdatePassanger } from "../../config";
export default function useUpdatePassangers() {
  const [updateData, { loading: updateLoading }] = useMutation(
    UpdatePassanger,
    { refetchQueries: [getPassangerList] }
  );

  return {
    updateData,
    updateLoading,
  };
}
