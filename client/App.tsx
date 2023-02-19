import "react-native-gesture-handler";
import AppStack from "./navigation/AppStack";
import store from "./redux/store";
import { Provider } from "react-redux";
import setupAxios from "./config/setupAxios";
import axios from "axios";
import Sample from "./screens/Sample";

export default function App() {
  setupAxios(axios, store);
  return (
    <Provider store={store}>
      {/* <AppStack /> */}
      <Sample />
    </Provider>
  );
}
