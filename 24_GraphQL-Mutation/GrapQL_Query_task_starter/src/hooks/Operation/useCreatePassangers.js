import { useMutation } from "@apollo/client";
import { CreatePassangers } from "../../config";
import { getPassangerList } from "../../config";

export default function UseCreatePassangers() {
  const [createData, { loading: createLoading }] = useMutation(
    CreatePassangers,
    { refetchQueries: [getPassangerList] }
  );

  return {
    createData,
    createLoading,
  };
}
