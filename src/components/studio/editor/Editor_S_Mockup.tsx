"use client";

import { use_Mockup_Store } from "@/store/studio/Mockup_Store";

const Editor_S_Mockup = () => {
  // Import From Mockup Store
  const [Mockup] = use_Mockup_Store((s) => [s.Mockup]);

  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      {/* <Editor_C_Desktop_Mockup />  */}
      <div
        className={`flex h-full flex-col overflow-hidden rounded-[6px] transition-all duration-300 ${(Mockup == "Desktop" && "w-full") || (Mockup == "Tablet" && "w-[736px]") || (Mockup == "Mobile" && "w-[350px]")} items-center justify-center`}
      >
        {/* iframe  */}
        <iframe src={`/web/template_1`} className="h-full w-full"></iframe>
      </div>
    </div>
  );
};

export default Editor_S_Mockup;
