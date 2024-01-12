import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

function Auto() {
  const [robotMoves, setRobotMoves] = useState(
    sessionStorage.getItem("robotMoves") || ""
  );
  const [notesScoredInAmp, setNotesScoredInAmp] = useState(0);
  const [notesScoredInSpeaker, setNotesScoredInSpeaker] = useState(0);

  useEffect(() => {
    sessionStorage.setItem("robotMoves", robotMoves);
  }, [robotMoves]);

  useEffect(() => {
    sessionStorage.setItem("notesScoredInAmpAuto", notesScoredInAmp.toString());
  }, [notesScoredInAmp]);

  useEffect(() => {
    sessionStorage.setItem("notesScoredInSpeakerAuto", notesScoredInSpeaker.toString());
  }, [notesScoredInSpeaker]);

  const addNotesScoredInAmp = () => {
    setNotesScoredInAmp(notesScoredInAmp + 1);
  };

  const subtractNotesScoredInAmp = () => {
    if (notesScoredInAmp > 0) {
      setNotesScoredInAmp(notesScoredInAmp - 1);
    }
  };

  const addNotesScoredInSpeaker = () => {
    setNotesScoredInSpeaker(notesScoredInSpeaker + 1);
  };

  const subtractNotesScoredInSpeaker = () => {
    if (notesScoredInSpeaker > 0) {
      setNotesScoredInSpeaker(notesScoredInSpeaker - 1);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center text-center justify-center mb-8">
        <div>
          <h1>Auto</h1>
        </div>
        <div className="grid max-w-sm items-center mt-2 gap-1.5 mx-auto">
          <Label htmlFor="match-type">Does Robot Leave Starting Zone?</Label>
          <Select
            value={robotMoves}
            onValueChange={(value) => setRobotMoves(value)}
          >
            <SelectTrigger className="rounded">
              <SelectValue placeholder="Yes/No" />
            </SelectTrigger>
            <SelectContent className="rounded">
              <SelectItem value="Yes" className="rounded">
                Yes
              </SelectItem>
              <SelectItem value="No" className="rounded">
                No
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid max-w-sm items-center mt-4 gap-1.5 mx-auto">
          <Label htmlFor="match-type">Notes Scored in Amp</Label>
          <div className="flex flex-row items-center justify-center">
            <Button className="rounded" onClick={subtractNotesScoredInAmp}>
              <Minus size={10} />
            </Button>
            <div className="rounded w-12 h-12 flex flex-row items-center justify-center">
              <p>{notesScoredInAmp}</p>
            </div>
            <Button className="rounded" onClick={addNotesScoredInAmp}>
              <Plus size={10} />
            </Button>
          </div>
        </div>
        <div className="grid max-w-sm items-center mt-4 gap-1.5 mx-auto">
          <Label htmlFor="match-type">Notes Scored in Speaker</Label>
          <div className="flex flex-row items-center justify-center">
            <Button className="rounded" onClick={subtractNotesScoredInSpeaker}>
              <Minus size={10} />
            </Button>
            <div className="rounded w-12 h-12 flex flex-row items-center justify-center">
              <p>{notesScoredInSpeaker}</p>
            </div>
            <Button className="rounded" onClick={addNotesScoredInSpeaker}>
              <Plus size={10} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auto;