import React, { useState, useEffect } from "react";
import Home from "./k-home";
import Button from "./Button";

export default function Karyawandashboard() {
  const handleMasuk = () => {};
  const [time, setTime] = useState(
    new Date()
      .toLocaleTimeString("ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23",
      })
      .replace(/\./g, ":")
  );

  useEffect(() => {
    setInterval(() => {
      setTime(
        new Date()
          .toLocaleTimeString("ID", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hourCycle: "h23",
          })
          .replace(/\./g, ":")
      );
    }, 1000);
  }, []);
  return (
    <>
      <div className="flex flex-row">
        <Home />
        <div className="mt-32 ml-32 flex flex-col">
          <h1 className="font-bold text-3xl">Home</h1>
          <div className="flex flex-row mt-20 w-[1200px] justify-center">
            <div className="bg-[#22C55E] w-80 mr-20 h-64 p-4 rounded-lg flex flex-col items-center justify-center border-border border-4 shadow-light">
              <h1 className="font-bold text-white mb-2 text-xl">
                Presensi Masuk
              </h1>
              <p className="text-white  mb-3">{time}</p>
              <Button onClick={handleMasuk}>Masuk</Button>
            </div>
            <div className="bg-[#A855F7] w-80 h-64 p-4 rounded-lg flex flex-col items-center justify-center border-border border-4 shadow-light">
              <h1 className="font-bold text-white mb-2 text-xl">
                Presensi Keluar
              </h1>
              <p className="text-white">{time}</p>
              <Button
                onClick={() => {
                  console.log("click");
                }}
              >
                Keluar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
