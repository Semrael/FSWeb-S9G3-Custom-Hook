import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const rawData = localStorage.getItem(key);
    const data = JSON.parse(rawData);
    const result = data ? data : initialValue;
    return result;
  });
  const changeValue = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };
  return [state, changeValue];
};
