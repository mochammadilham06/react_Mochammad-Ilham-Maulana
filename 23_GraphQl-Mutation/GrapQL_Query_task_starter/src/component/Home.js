import React, { useState } from "react";

import {
  DeletePassangers,
  getPassangerList,
  CreatePassangers,
  UpdatePassanger,
} from "../config";
import { useMutation, useQuery } from "@apollo/client";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import FormUpdatePassangers from "./UpdatePassanger";

const Home = () => {
  const {
    data,
    loading: getLoading,
    error: getError,
  } = useQuery(getPassangerList);
  const [deletePassanger, { loading: deleteLoading }] = useMutation(
    DeletePassangers,
    { refetchQueries: [getPassangerList] }
  );
  const [createData, { loading: createLoading }] = useMutation(
    CreatePassangers,
    { refetchQueries: [getPassangerList] }
  );
  const [updateData, { loading: updateLoading }] = useMutation(
    UpdatePassanger,
    { refetchQueries: [getPassangerList] }
  );

  const hapusPengunjung = (id) => {
    deletePassanger({
      variables: {
        id: id,
      },
    });
  };

  const tambahPengunjung = (newUser) => {
    createData({
      variables: {
        objects: {
          ...newUser,
        },
      },
    });
  };

  const [edit, setEdit] = useState({
    id: "",
    name: "",
    gender: "",
    age: "",
  });
  const onClickEdit = (dataChoice) => {
    setEdit(dataChoice);
  };
  const editPengunjung = (toUpdateData) => {
    updateData({ variables: toUpdateData });
  };

  return (
    <div>
      <Header />
      <ListPassenger
        data={data}
        error={getError}
        loading={getLoading || deleteLoading || createLoading || updateLoading}
        hapusPengunjung={hapusPengunjung}
        onClickEdit={onClickEdit}
      />
      <PassengerInput tambahPengunjung={tambahPengunjung} />
      <FormUpdatePassangers edit={edit} editPengunjung={editPengunjung} />
    </div>
  );
};

export default Home;
