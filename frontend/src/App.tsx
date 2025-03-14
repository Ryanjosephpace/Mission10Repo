import "./App.css";

import Header from "./components/Header";
import BowlerTable from "./components/BowlerTable";

const App: React.FC = () => {

    return (
        <>
            <Header /> {/* ✅ Adds the page title */}

            <p>This is a page that will show you all of the great and noble bowlers on the Marlins and the Sharks</p>
          
            <BowlerTable /> {/* ✅ Displays the bowler list */}
        </>
    );
};

export default App;

