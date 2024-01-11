import MatchScouting from "@/components/MatchScouting";
import PitScouting from "@/components/PitScouting";
import Auto from "@/components/Match/Auto";
import Endgame from "@/components/Match/Endgame";
import Teleop from "@/components/Match/Teleop";
import PostMatch from "@/components/Match/PostMatch";
import "@/index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={MatchScouting} />
          <Route path="/auto" Component={Auto}/>
          <Route path="/teleop" Component={Teleop} />
          <Route path="/endgame" Component={Endgame} />
          <Route path="/postmatch" Component={PostMatch} />
          <Route path="/pit" Component={PitScouting} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
