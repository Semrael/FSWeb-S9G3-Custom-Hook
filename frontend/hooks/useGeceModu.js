import { useLocalStorage } from "./useLocalStorage";

export const useGeceModu = (initialValue) => {
  const [geceModu, setGeceModu] = useLocalStorage("geceModu", initialValue);

  const changeValue = (value) => {
    setGeceModu(value);
  };
  return [geceModu, changeValue];
};
