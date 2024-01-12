import Auto from "@/components/Match/Auto";
import Endgame from "@/components/Match/Endgame";
import PostMatch from "@/components/Match/PostMatch";
import Teleop from "@/components/Match/Teleop";
import SaveData from "@/components/SaveData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function MatchScouting() {
  return (
    <>
      <div className="grid max-w-min items-center mt-8 mb-4 gap-1.5 mx-auto">
        <Button asChild className="rounded">
          <Link to={"/"}>Back</Link>
        </Button>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 items-center justify-center">
        <div>
          <Auto />
        </div>
        <div>
          <Teleop />
        </div>
        <div>
          <Endgame />
        </div>
        <div>
          <PostMatch />
        </div>
        <div className="fixed bottom-0 left-0 w-full flex justify-center items-center">
          <SaveData />
        </div>
      </div>
    </>
  );
}

export default MatchScouting;