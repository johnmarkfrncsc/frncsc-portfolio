import { useState } from "react";
import professional from "../../data/professional";

const Professional = () => {
  const [activeTab, setActiveTab] = useState<"professional" | "education">(
    "professional",
  );

  return (
    <section id="professional">
      <div className="flex bg-[#18181b] rounded-lg p-1 mb-5">
        <button
          onClick={() => setActiveTab("professional")}
          className={`flex-1 text-xs font-medium py-2 rounded-md transition-colors cursor-pointer ${
            activeTab === "professional"
              ? "bg-[#27272a] text-[#f9fafb]"
              : "text-[#6b7280]"
          }`}
        >
          Professional
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`flex-1 text-xs font-medium py-2 rounded-md transition-colors cursor-pointer ${
            activeTab === "education"
              ? "bg-[#27272a] text-[#f9fafb]"
              : "text-[#6b7280]"
          }`}
        >
          Education
        </button>
      </div>

      {activeTab === "professional" && (
        <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-4 flex flex-col gap-5">
          {professional.map((professional) => (
            <div key={professional.id} className="flex gap-4">
              {/* TODO: CHANGE CHAR LOGO INTO IMG LOGO */}
              <div className="w-10 h-10 rounded-lg mt-2 bg-[#111] border border-[#27272a] flex items-center justify-center text-xs font-bold text-[#4b5563] flex-shrink-0">
                PCG
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-[#f9fafb] mb-1">
                  {professional.company}
                </h2>
                <div className="flex flex-wrap items-baseline justify-between mb-3 text-md text-[#6b7280]">
                  <p>{professional.position}</p>
                  <p>{professional.timeSpan}</p>
                </div>

                <ul className="flex flex-col gap-1">
                  {professional.description.map((desc, index) => (
                    <li
                      className="text-sm text-[#f9fafb] leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-[#374151]"
                      key={index}
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "education" && (
        <div className="flex flex-col gap-3">
          <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-4 flex gap-4">
            <div className="w-10 h-10 rounded-lg mt-2 bg-[#111] border border-[#27272a] flex items-center justify-center text-xs font-bold text-[#4b5563] flex-shrink-0">
              STI
            </div>

            <div className="flex-1">
              <h2 className="text-lg font-semibold text-[#f9fafb] mb-1">
                STI San Jose Del Monte Bulacan
              </h2>
              <div className="flex flex-wrap  justify-between mb-3 text-md text-[#6b7280]">
                <p>BS Computer Science</p>
                <time>2021 — 2025</time>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Professional;
