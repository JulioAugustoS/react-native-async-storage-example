import AsyncStorage from "@react-native-async-storage/async-storage";

const { stringify, parse } = JSON;

export const setStorage = (key: string, value: any) => {
  AsyncStorage.setItem(key, stringify(value));
};

export const getStorage = async (key: string) => {
  const value: any = await AsyncStorage.getItem(key);
  return parse(value);
};

export const clearItemStorage = (key: string) => {
  AsyncStorage.removeItem(key);
};

export const clearStorage = () => {
  AsyncStorage.clear();
};
