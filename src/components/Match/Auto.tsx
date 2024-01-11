import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

function Auto() {
  const [robotMoves, setRobotMoves] = useState(sessionStorage.getItem("robotMoves") || "");

  useEffect(() => {
    sessionStorage.setItem("robotMoves", robotMoves);
  }, [robotMoves]);

  return (
    <>
      <div className="flex flex-col items-center text-center justify-center mb-8">
        <div>
          <h1>Auto</h1>
        </div>
        <div className="grid max-w-sm items-center mt-2 gap-1.5 mx-auto">
        <Label htmlFor="match-type">Does Robot Move?</Label>
        <Select value={robotMoves} onValueChange={value => setRobotMoves(value)}>
          <SelectTrigger className="rounded">
            <SelectValue placeholder="Yes/No"/>
          </SelectTrigger>
          <SelectContent className="rounded">
            <SelectItem value="Yes" className="rounded">Yes</SelectItem>
            <SelectItem value="No" className="rounded">No</SelectItem>
          </SelectContent>
        </Select>
      </div>
      </div>
    </>
  );
}

export default Auto;