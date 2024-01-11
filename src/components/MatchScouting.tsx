import Auto from "@/components/Match/Auto";
import Endgame from "@/components/Match/Endgame";
import PostMatch from "@/components/Match/PostMatch";
import Teleop from "@/components/Match/Teleop";

function MatchScouting() {
  return (
    <>
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
      </div>
    </>
  );
}

export default MatchScouting;