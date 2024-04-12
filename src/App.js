import { Route, Routes } from "react-router";
import MainScreen from "./client/MainScreen";
import HomeScreen from "./client/HomeScreen";
import ContactsScreen from "./client/ContactsScreen";
import NavigateScreen from "./client/NavigateScreen";
import TeamScreen from "./client/TeamScreen";

function App() {
    return (
        <Routes>
            <Route path="" element={<MainScreen />}>
                <Route path="" element={<HomeScreen />} />
                <Route path="contacts" element={<ContactsScreen />} />
                <Route path="navigate" element={<NavigateScreen />} />
                <Route path="team" element={<TeamScreen />} />
            </Route>
        </Routes>
    );
}

export default App;
