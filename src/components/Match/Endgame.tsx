import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

function Endgame() {
  const [endPosition, setEndPosition] = useState(
    sessionStorage.getItem("endPosition") || ""
  );
  const [noteInTrap, setNoteInTrap] = useState(
    sessionStorage.getItem("noteInTrap") || "No"
  );

  useEffect(() => {
    sessionStorage.setItem("endPosition", endPosition);
  }, [endPosition]);

  useEffect(() => {
    sessionStorage.setItem("noteInTrap", noteInTrap);
  }, [noteInTrap]);

  return (
    <>
      <div className="flex flex-col items-center text-center justify-center mb-8">
        <div>
          <h1>Endgame</h1>
        </div>
        <div className="grid w-48 items-center mt-4 gap-1.5 mx-auto">
          <Label htmlFor="end-position">End Position</Label>
          <Select
            value={endPosition}
            onValueChange={(value) => setEndPosition(value)}
          >
            <SelectTrigger className="rounded">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent className="rounded">
              <SelectItem value="Parked" className="rounded">
                Parked
              </SelectItem>
              <SelectItem value="Onstage" className="rounded">
                Onstage
              </SelectItem>
              <SelectItem value="Onstage and Spotlit" className="rounded">
                Onstage and Spotlit
              </SelectItem>
              <SelectItem value="None" className="rounded">
                None
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="max-w-sm items-center mt-4 gap-1.5 mx-auto">
          <input
            type="checkbox"
            onChange={(e) =>
              setNoteInTrap(
                (e.target as HTMLInputElement).checked ? "Yes" : "No"
              )
            }
            className="mr-2 rounded"
          />
          <Label htmlFor="note-in-trap">Note in Trap</Label>
        </div>
      </div>
    </>
  );
}

export default Endgame;