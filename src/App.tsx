import PreMatch from "@/components/PreMatch";
import MatchScouting from "@/components/MatchScouting";
import PitScouting from "@/components/PitScouting";
import "@/index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={PreMatch} />
          <Route path="/match" Component={MatchScouting}/>
          <Route path="/pit" Component={PitScouting} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
