import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

function PostMatch() {
  const [offenseSkills, setOffenseSkills] = useState(
    sessionStorage.getItem("offenseSkills") || ""
  );
  const [defenseSkills, setDefenseSkills] = useState(
    sessionStorage.getItem("defenseSkills") || ""
  );
  const [deadbot, setDeadbot] = useState(
    sessionStorage.getItem("deadbot") || "No"
  );
  const [tippedOver, setTippedOver] = useState(
    sessionStorage.getItem("tippedOver") || "No"
  );
  const [comments, setComments] = useState(
    sessionStorage.getItem("comments") || ""
  );

  useEffect(() => {
    sessionStorage.setItem("offenseSkills", offenseSkills);
  }, [offenseSkills]);

  useEffect(() => {
    sessionStorage.setItem("defenseSkills", defenseSkills);
  }, [defenseSkills]);

  useEffect(() => {
    sessionStorage.setItem("deadbot", deadbot);
  }, [deadbot]);

  useEffect(() => {
    sessionStorage.setItem("tippedOver", tippedOver);
  }, [tippedOver]);

  useEffect(() => {
    sessionStorage.setItem("comments", comments);
  }, [comments]);

  return (
    <>
      <div className="flex flex-col items-center text-center justify-center mb-8">
        <div>
          <h1 className="text-4xl">Post-Match</h1>
        </div>
        <div className="grid w-48 items-center mt-4 gap-1.5 mx-auto">
          <Label htmlFor="offense">Offense Skill</Label>
          <Select
            value={offenseSkills}
            onValueChange={(value) => setOffenseSkills(value)}
          >
            <SelectTrigger className="rounded">
              <SelectValue placeholder="Not Observed" />
            </SelectTrigger>
            <SelectContent className="rounded">
              <SelectItem value="Not Effective" className="rounded">
                Not Effective
              </SelectItem>
              <SelectItem value="Average" className="rounded">
                Average
              </SelectItem>
              <SelectItem value="Very Effective" className="rounded">
                Very Effective
              </SelectItem>
              <SelectItem value="Not Observed" className="rounded">
                Not Observed
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-48 items-center mt-4 gap-1.5 mx-auto">
          <Label htmlFor="defense">Defense Skill</Label>
          <Select
            value={defenseSkills}
            onValueChange={(value) => setDefenseSkills(value)}
          >
            <SelectTrigger className="rounded">
              <SelectValue placeholder="Not Observed" />
            </SelectTrigger>
            <SelectContent className="rounded">
              <SelectItem value="Not Effective" className="rounded">
                Not Effective
              </SelectItem>
              <SelectItem value="Average" className="rounded">
                Average
              </SelectItem>
              <SelectItem value="Very Effective" className="rounded">
                Very Effective
              </SelectItem>
              <SelectItem value="Not Observed" className="rounded">
                Not Observed
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="max-w-sm items-center mt-4 gap-1.5 mx-auto">
          <input
            type="checkbox"
            onChange={(e) =>
              setDeadbot((e.target as HTMLInputElement).checked ? "Yes" : "No")
            }
            className="mr-2 rounded"
          />
          <Label htmlFor="deadbot">Died?</Label>
        </div>
        <div className="max-w-sm items-center mt-4 gap-1.5 mx-auto">
          <input
            type="checkbox"
            onChange={(e) =>
              setTippedOver(
                (e.target as HTMLInputElement).checked ? "Yes" : "No"
              )
            }
            className="mr-2 rounded"
          />
          <Label htmlFor="tipped-over">Tipped Over?</Label>
        </div>
        <div className="flex flex-col max-w-sm items-center mt-4 gap-1.5 mx-auto">
          <Label htmlFor="note-in-trap">Comments</Label>
          <input type="text" value={comments} onChange={e => setComments(e.target.value)} className="mr-2 rounded text-black" />
        </div>
      </div>
    </>
  );
}

export default PostMatch;