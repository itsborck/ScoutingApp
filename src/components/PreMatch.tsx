import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PreMatch() {
  const [scouter, setScouter] = useState(sessionStorage.getItem("scouter") || "");
  const [matchType, setMatchType] = useState(sessionStorage.getItem("matchType") || "");
  const [matchNumber, setMatchNumber] = useState(sessionStorage.getItem("matchNumber") || "");
  const [robot, setRobot] = useState(sessionStorage.getItem("robot") || "");
  const [teamNumber, setTeamNumber] = useState(sessionStorage.getItem("teamNumber") || "");

  useEffect(() => {
    sessionStorage.setItem("scouter", scouter);
  }, [scouter]);

  useEffect(() => {
    sessionStorage.setItem("matchType", matchType);
  }, [matchType]);

  useEffect(() => {
    sessionStorage.setItem("matchNumber", matchNumber);
  }, [matchNumber]);

  useEffect(() => {
    sessionStorage.setItem("robot", robot);
  }, [robot]);

  useEffect(() => {
    sessionStorage.setItem("teamNumber", teamNumber);
  }, [teamNumber]);

  useEffect(() => {
    let match = `${matchType}${matchNumber}`;
    if (matchType === 'sf') {
      match = `${matchType}${matchNumber}m1`;
    }
    if (matchType === 'f') {
      match = `${matchType}1m${matchNumber}`;
    }
    sessionStorage.setItem("match", match);
  }, [matchType, matchNumber]);

  const isFormValid = scouter && matchType && matchNumber && teamNumber;

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-12">
        <img src="src/assets/crescendo_logo.png" className="h-32"/>
        <h1 className="flex lg:text-4xl sm:text-3xl ml-8 mt-4">Match Scouting</h1>
      </div>
      <div className="grid w-full max-w-sm items-center mt-8 gap-1.5 mx-auto">
        <Label htmlFor="scouter">Scouter Initials</Label>
        <Input className="rounded" placeholder="Initials" required maxLength={2} value={scouter} onChange={e => setScouter(e.target.value)} />
      </div>
      <div className="grid w-full max-w-sm items-center mt-8 gap-1.5 mx-auto">
        <Label htmlFor="match-type">Match Type</Label>
        <Select value={matchType} onValueChange={value => setMatchType(value)}>
          <SelectTrigger className="rounded">
            <SelectValue placeholder="Match Type"/>
          </SelectTrigger>
          <SelectContent className="rounded">
            <SelectItem value="qm" className="rounded">Qualifications</SelectItem>
            <SelectItem value="sf" className="rounded">Semifinals</SelectItem>
            <SelectItem value="f" className="rounded">Finals</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid w-full max-w-sm items-center mt-8 gap-1.5 mx-auto">
        <Label htmlFor="match">Match Number</Label>
        <Input className="rounded" placeholder="Match Number" required value={matchNumber} onChange={e => setMatchNumber(e.target.value)} />
      </div>
      <div className="grid w-full max-w-sm items-center mt-8 gap-1.5 mx-auto">
        <Label htmlFor="robot">Robot</Label>
        <Select value={robot} onValueChange={value => setRobot(value)}>
          <SelectTrigger className="rounded">
            <SelectValue placeholder="Red 1"/>
          </SelectTrigger>
          <SelectContent className="rounded">
            <SelectItem value="Red 1" className="rounded">Red 1</SelectItem>
            <SelectItem value="Red 2" className="rounded">Red 2</SelectItem>
            <SelectItem value="Red 3" className="rounded">Red 3</SelectItem>
            <SelectItem value="Blue 1" className="rounded">Blue 1</SelectItem>
            <SelectItem value="Blue 2" className="rounded">Blue 2</SelectItem>
            <SelectItem value="Blue 3" className="rounded">Blue 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid w-full max-w-sm items-center mt-8 gap-1.5 mx-auto">
        <Label htmlFor="team">Team Number</Label>
        <Input className="rounded" placeholder="Team Number" required minLength={1} maxLength={5} value={teamNumber} onChange={e => setTeamNumber(e.target.value)} />
      </div>
      <div className="grid max-w-min items-center my-8 gap-1.5 mx-auto">
        <Button asChild className="rounded" disabled={!isFormValid}>
          <Link to={"/match"}>Next</Link>
        </Button>
      </div>
    </>
  );
}

export default PreMatch;