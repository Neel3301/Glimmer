"use client";

import { X } from "lucide-react";

const Editor_C_Sidebar = () => {
  return (
    <div className="h-full w-full border-r-[1px] border-neutral-700">
      {/* text editor title  */}
      <div
        className={`flex h-[60px] w-full items-center justify-between border-b-[1px] border-neutral-700 px-3`}
      >
        <h2 className={`text-[24px] font-bold text-neutral-200`}>Sidebar</h2>
        {/* <div onClick={() => {}} className="cursor-pointer">
          <X size={20} />
        </div> */}
      </div>
      {/* toolkit */}
      <div className="flex h-[calc(100vh-80px-66px)] w-full items-center justify-center overflow-y-scroll px-4">
        <h2 className={`text-center text-[24px] text-neutral-200`}>
          Click on Text, Button, Image or Icon To Edit The Template
        </h2>
      </div>
    </div>
  );
};

export default Editor_C_Sidebar;
