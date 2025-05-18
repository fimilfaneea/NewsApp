import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";

import HooksCakeContainer from "./components/HooksCakeContainer";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import NewCakeContainer from "./components/newCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <HooksCakeContainer />

        <CakeContainer />
        <IceCreamContainer />
        <HooksIceCreamContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer />
      </div>
    </Provider>
  );
}

export default App;
