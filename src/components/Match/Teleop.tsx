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

function Teleop() {
  const [pickupLocation, setPickupLocation] = useState(
    sessionStorage.getItem("pickupLocation") || ""
  );
  const [notesScoredInAmp, setNotesScoredInAmp] = useState(0);
  const [notesScoredInSpeaker, setNotesScoredInSpeaker] = useState(0);
  const [amplifiedNotes, setAmplifiedNotes] = useState(0);

  useEffect(() => {
    sessionStorage.setItem("pickupLocation", pickupLocation);
  }, [pickupLocation]);

  useEffect(() => {
    sessionStorage.setItem("notesScoredInAmp", notesScoredInAmp.toString());
  }, [notesScoredInAmp]);

  useEffect(() => {
    sessionStorage.setItem(
      "notesScoredInSpeaker",
      notesScoredInSpeaker.toString()
    );
  }, [notesScoredInSpeaker]);

  useEffect(() => {
    sessionStorage.setItem("amplifiedNotes", amplifiedNotes.toString());
  }, [amplifiedNotes]);

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

  const addAmplifiedNotes = () => {
    setAmplifiedNotes(amplifiedNotes + 1);
  };

  const subtractAmplifiedNotes = () => {
    if (amplifiedNotes > 0) {
      setAmplifiedNotes(amplifiedNotes - 1);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center text-center justify-center mb-8">
        <div>
          <h1>Teleop</h1>
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
        <div className="grid max-w-sm items-center mt-4 gap-1.5 mx-auto">
          <Label htmlFor="match-type">Amplified Notes Scored</Label>
          <div className="flex flex-row items-center justify-center">
            <Button className="rounded" onClick={subtractAmplifiedNotes}>
              <Minus size={10} />
            </Button>
            <div className="rounded w-12 h-12 flex flex-row items-center justify-center">
              <p>{amplifiedNotes}</p>
            </div>
            <Button className="rounded" onClick={addAmplifiedNotes}>
              <Plus size={10} />
            </Button>
          </div>
        </div>
        <div className="grid max-w-sm items-center mt-2 gap-1.5 mx-auto">
          <Label htmlFor="pickup-location">Note Pickup Location</Label>
          <Select
            value={pickupLocation}
            onValueChange={(value) => setPickupLocation(value)}
          >
            <SelectTrigger className="rounded">
              <SelectValue placeholder="None" />
            </SelectTrigger>
            <SelectContent className="rounded">
              <SelectItem value="None" className="rounded">
                None
              </SelectItem>
              <SelectItem value="Source" className="rounded">
                Source
              </SelectItem>
              <SelectItem value="Floor" className="rounded">
                Floor
              </SelectItem>
              <SelectItem value="Ground + Floor" className="rounded">
                Both
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
}

export default Teleop;