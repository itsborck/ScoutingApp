import { useCallback } from "react";
import { Button } from "@/components/ui/button";

const SaveData = () => {
  const saveData = useCallback(() => {
    // PRE-MATCH DATA
    const match = sessionStorage.getItem("match");
    const team = sessionStorage.getItem("teamNumber");
    const robot = sessionStorage.getItem("robot");

    // AUTO DATA
    const robotMoves = sessionStorage.getItem("robotMoves");
    const notesScoredInAmpAuto = sessionStorage.getItem("notesScoredInAmpAuto");
    const notesScoredInSpeakerAuto = sessionStorage.getItem("notesScoredInSpeakerAuto");

    // TELEOP DATA
    const notesScoredInAmp = sessionStorage.getItem("notesScoredInAmp");
    const notesScoredInSpeaker = sessionStorage.getItem("notesScoredInSpeaker");
    const amplifiedNotes = sessionStorage.getItem("amplifiedNotes");
    const pickupLocation = sessionStorage.getItem("pickupLocation");

    // ENDGAME DATA

    // POST-MATCH DATA

    const divider = "----------------------------------------\n";
    const scoutingInfo = `TEAM ${team}\n\nMatch: ${match}\nRobot: ${robot}\n\n`;
    const autoInfo = `AUTONOMOUS\nRobot Leaves Starting Zone: ${robotMoves}\nNotes Scored in Amp: ${notesScoredInAmpAuto}\nNotes Scored in Speaker: ${notesScoredInSpeakerAuto}\n\n`;
    const teleopInfo = `TELEOP\nNotes Scored in Amp: ${notesScoredInAmp}\nNotes Scored in Speaker: ${notesScoredInSpeaker}\nAmplified Notes Scored: ${amplifiedNotes}\nPickup Location: ${pickupLocation}\n\n`;

    let existingData = JSON.parse(localStorage.getItem("data") || "[]");

    const newData = {
      team: team,
      scoutingInfo: scoutingInfo,
      autoInfo: autoInfo,
      teleopInfo: teleopInfo,
      divider: divider
    };

    existingData = [...existingData, newData].sort((a, b) => parseInt(a.team) - parseInt(b.team));
    localStorage.setItem("data", JSON.stringify(existingData));
  }, []);

  const downloadData = useCallback(() => {
    const data = JSON.parse(localStorage.getItem("data") || "[]");
    const scouter = sessionStorage.getItem("scouter");

    if (data.length > 0) {
      const formattedData = data.map(item => `${item.scoutingInfo}\n${item.autoInfo}\n${item.teleopInfo}\n${item.divider}`).join('\n');
      const blob = new Blob([formattedData], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${scouter}_ScoutingData.txt`;
      link.click();
    }
  }, []);

  const clearData = useCallback(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <Button onClick={saveData} className="hover:underline rounded mx-2 my-4">Save Data</Button>
      <Button onClick={downloadData} className="hover:underline rounded mx-2 my-4">Download Data</Button>
      <Button onClick={clearData} variant="destructive" className="hover:underline rounded mx-2 my-4">Clear Data</Button>
    </>
  );
}

export default SaveData;