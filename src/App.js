import { Route, Routes } from "react-router";
import MainScreen from "./client/MainScreen";
import AboutScreen from "./client/AboutScreen";
import ContactsScreen from "./client/ContactsScreen";
import NavigateScreen from "./client/NavigateScreen";

function App() {
  return (
    <Routes>
      <Route path="" element={<MainScreen />}>
        <Route path="" element={<AboutScreen />} />
        <Route path="contacts" element={<ContactsScreen />} />
        <Route path="navigate" element={<NavigateScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
