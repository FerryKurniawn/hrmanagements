import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const username = localStorage.getItem("employee_username");

  const handleNavigate = (path) => {
    navigate(path);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="border-border flex flex-col border-4 ml-4 bg-main w-[20%] h-[900px] mt-7 justify-between shadow-light">
      <div className="pt-16 flex justify-center flex-col">
      <div className="flex flex-row">
        <img 
      className="w-[80px] h-[80px] mb-10 ml-8 rounded-full"
      src="/logo.jpg" alt="" />
      <h1 className="text-4xl font-bold ml-5 text-center space-x-5 mt-4">SIHR
      </h1>
      </div>
      
        <Button
          onClick={() => handleNavigate("/karyawanhome")}
          className={`mb-10 text-center rounded-base shadow-light border font-extrabold text-2xl ml-10 border-border w-60 p-4 ${
            isActive("/karyawanhome") ? "bg-mainAccent" : "bg-bg text-text"
          }`}
        >
          Beranda
        </Button>
        <Button
          onClick={() => handleNavigate("/rekap-presensi")}
          className={`mb-10 text-center rounded-base shadow-light border font-extrabold text-2xl border-border ml-10 p-4 w-60 ${
            isActive("/rekap-presensi") ? "bg-mainAccent" : "bg-bg text-text"
          }`}
        >
          Rekap Presensi
        </Button>
        <Button
          onClick={() => handleNavigate("/ketidak-hadiran")}
          className={`mb-10 text-center rounded-base shadow-light border font-extrabold text-2xl border-border ml-10 p-4 w-60 ${
            isActive("/ketidak-hadiran") ? "bg-mainAccent" : "bg-bg text-text"
          }`}
        >
          Ketidak Hadiran
        </Button>
      </div>
      <div className="flex text-lg ml-20 mb-10 cursor-pointer">
        <img src="user.png" alt="" width="25" className="mr-2" />
        <p>{username}</p>
      </div>
    </div>
  );
}
