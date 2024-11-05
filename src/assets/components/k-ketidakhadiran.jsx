import React, { useState } from "react";
import Home from "./k-home";
import Logout from "./logout";

export default function Ketidakhadirankaryawan() {
  return (
    <>
      <div className="flex flex-row">
        <Home />
        <div className="absolute top-6 right-10">
          <Logout />
        </div>
        <div className="mt-32 ml-32 flex flex-col">
          <div>
            <h1 className="font-heading text-3xl mb-10">Ketidak Hadiran</h1>
          </div>
        </div>
      </div>
    </>
  );
}
