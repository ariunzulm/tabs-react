"use client";

import { useState } from "react";
import { ChevronsRight } from "lucide-react";
import peopleData from "./peopleData";

export default function TabsTable() {
  const [index, setIndex] = useState(0);
  const { id, button, role, date, description1, description2, description3 } =
    peopleData[index];

  return (
    <div className="w-254.25 p-10 flex justify-center shadow-sm gap-10 flex-row">
      <div className="w-50 flex justify-start gap-6 font-medium">
        <div className="flex  flex-col gap-12">
          {peopleData.map((person, i) => {
            return (
              <button
                key={person.id}
                onClick={() => setIndex(i)}
                className="text-left pl-4 border-l-2 transition-all
                    hover:text-teal-500 hover:ease-in-out cursor-pointer "
              >
                {person.button}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-3">
          <h3 className="text-[#0f172a] text-[31.24px] font-medium">{role}</h3>
          <button className="bg-gray-300 text-[#334155] font-medium py-1.5 px-3 rounded-sm font-4 w-fit">
            {button}
          </button>
          <p className="text-[#64748b] text-4 font-medium">{date}</p>
        </div>
        <div className="text-[#334155] text-4 mt-8 gap-8 flex flex-col font-medium">
          {[description1, description2, description3].map(
            (description, index) => {
              return (
                <div key={index} className="flex gap-5 items-center ">
                  <ChevronsRight className="text-teal-500" />
                  <p className="w-175.25 leading-normal">{description}</p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
