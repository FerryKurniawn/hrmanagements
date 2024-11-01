import React from "react";
import Home from "./k-home";

export default function Rekappresensi() {
  return (
    <>
      <div className="flex flex-row">
        <Home />
        <div className="mt-32 ml-32 flex flex-col">
          <div>
            <h1 className="font-heading text-3xl mb-10">Ketidak Hadiran</h1>
          </div>
        </div>
      </div>
    </>
  );
}
