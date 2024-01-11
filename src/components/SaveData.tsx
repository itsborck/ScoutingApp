import { useCallback } from "react";
import { Button } from "@/components/ui/button";

const SaveData = () => {
  const saveData = useCallback(() => {
    const scouter = sessionStorage.getItem("scouter");
    const match = sessionStorage.getItem("match");
    const team = sessionStorage.getItem("teamNumber");
    const robot = sessionStorage.getItem("robot");

    const newData = `Scouter: ${scouter}\nMatch: ${match}\nTeam: ${team}\nRobot: ${robot}`;

    const existingData = JSON.parse(localStorage.getItem("data") || "[]");
    existingData.push(newData);
    localStorage.setItem("data", JSON.stringify(existingData));
  }, []);

  const downloadData = useCallback(() => {
    const data = JSON.parse(localStorage.getItem("data") || "[]");
    const scouter = sessionStorage.getItem("scouter");

    if (data.length > 0) {
      const blob = new Blob(data, { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${scouter}_ScoutingData.txt`;
      link.click();
    }
  }, []);

  return (
    <>
      <Button onClick={saveData} className="hover:underline rounded mx-2 my-4">Save Data</Button>
      <Button onClick={downloadData} className="hover:underline rounded mx-2 my-4">Download Data</Button>
    </>
  );
}

export default SaveData;