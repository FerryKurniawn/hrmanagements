import React, { useState } from "react";
import Home from "./a-home";
import Button from "./Button";

export default function InitialData() {
  return (
    <>
      <div className="flex flex-row">
        <Home />
        <div className="mt-32 ml-32 flex flex-col">
          <div>
            <h1 className="font-heading text-3xl mb-10">Data Karyawan</h1>
            <Button className="p-5 bg-mainAccent text-lg text-darkText border-2 border-darkBorder shadow-dark font-heading text-center w-[200px] rounded-base">
              Tambah Karyawan
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
