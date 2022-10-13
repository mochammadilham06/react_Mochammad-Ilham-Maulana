import { useState } from "react";

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: (e) => {
      setValue(e.target.value || e.target.innerText);
    },
  };
};

export default useInputValue;
