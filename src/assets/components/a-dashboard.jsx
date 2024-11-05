import React, { useState, useEffect } from "react";
import Home from "./a-home";
import Logout from "./logout";

const initialEmployees = [
  { id: 1, name: "Fiky", position: "Back End Developer", salary: 4_000_000 },
  {
    id: 2,
    name: "Gisel",
    position: "Front End Developer",
    salary: 4_500_000,
  },
  { id: 3, name: "Dina", position: "Quality Assurance", salary: 7_000_000 },
  { id: 4, name: "Sujito", position: "Product Manager", salary: 8_000_000 },
  { id: 5, name: "Januarta", position: "Manager", salary: 12_000_000 },
  { id: 6, name: "Raihon", position: "UX/UI Designer", salary: 6_000_000 },
];

function Dashboard() {
  const [hadir, setHadir] = useState(0);
  const [totalEmployees, setTotalEmployees] = useState(0);

  useEffect(() => {
    const total = localStorage.getItem("totalEmployee");
    const employeeCount = total ? parseInt(total, 10) : initialEmployees.length;
    setTotalEmployees(employeeCount);
  }, []);

  const now = new Date();
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const [clock, setClock] = useState(new Date().toTimeString().split(" ")[0]);
  const usernames = ["fiky", "dina", "gisel"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(new Date().toTimeString().split(" ")[0]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let totalHadir = 0;

    usernames.forEach((user) => {
      const presensi = localStorage.getItem(`${user}_presensi`);
      if (presensi === "completed") {
        totalHadir += 1;
      }
    });

    setHadir(totalHadir);
  }, [usernames]);

  const date = now.toLocaleDateString("US", dateOptions);
  const username = localStorage.getItem("username");

  return (
    <>
      <div className="flex flex-row">
        <Home />
        <div className="absolute top-6 right-10">
          <Logout />
        </div>
        <div className="mt-32 ml-32 flex flex-col">
          <div className="bg-main text-text w-[1200px] p-10 border-border border-4 shadow-light rounded-lg ">
            <h1 className="font-bold text-3xl mb-3">Hello, {username}!</h1>
            <p className="font-bold text-xl mb-2">{clock}</p>
            <p className="text-xl font-thin">{date}</p>
          </div>
          <div className="flex flex-row mt-10 space-x-4">
            <div className="flex flex-col items-center justify-center w-56 flex-grow border-border border-4 shadow-light h-56 bg-[#F97316] rounded-lg">
              <h1 className="font-bold text-xl mb-2">Jumlah Karyawan</h1>
              <p className="font-base text-lg">{totalEmployees}</p>
            </div>
            <div className="flex flex-col items-center justify-center w-56 flex-grow border-border border-4 shadow-light h-56 bg-[#3B82F6] rounded-lg">
              <h1 className="font-bold text-xl mb-2">Hadir</h1>
              <p className="font-base text-lg">{hadir}</p>
            </div>
            <div className="flex flex-col items-center justify-center w-56 flex-grow border-border border-4 shadow-light h-56 bg-[#22C55E] rounded-lg">
              <h1 className="font-bold text-xl mb-2">Alpa</h1>
              <p className="font-base text-lg"></p>
            </div>
            <div className="flex flex-col items-center justify-center w-56 flex-grow border-border border-4 shadow-light h-56 bg-[#A855F7] rounded-lg">
              <h1 className="font-bold text-xl mb-2">Cuti/Izin/Sakit</h1>
              <p className="font-base text-lg"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
