import React, { useState } from "react";
import tataLogo from "./assets/Tata-logo.png";
import tataQuoteLogo from "./assets/tata_quote_logo.png";
import tataItLogo from "./assets/tata_it_logo.png";

const App = () => {
  const [areaOpen, setAreaOpen] = useState(false);
  const [machineOpen, setMachineOpen] = useState(false);

  const toggleArea = () => {
    setAreaOpen(!areaOpen);
    setMachineOpen(false);
  };

  const toggleMachine = () => {
    setMachineOpen(!machineOpen);
    setAreaOpen(false);
  };

  const closeDropdowns = () => {
    setAreaOpen(false);
    setMachineOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-[#e6f0f8] text-white"
      onClick={closeDropdowns}
    >
      {/* Container */}

      <div className="w-[100%] max-w-[1400px] min-h-screen mx-auto bg-[#212122] shadow-lg flex flex-col overflow-hidden">
        {/* Top Header */}

        <header className="bg-[#053971] px-6 py-4 flex justify-between items-center shadow-md">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">TATA MOTORS</h1>
            <p className="text-sm md:text-base opacity-90 -mt-1">
              Connecting Aspirations
            </p>
          </div>
          <img
            src={tataLogo}
            alt="Tata Logo"
            className="h-[50px] md:h-[100px] bg-white rounded-md p-2 shadow-md"
          />
        </header>

        {/* Title Section */}

        <div className="bg-blue-600 text-center py-3">
          <h2 className="text-white text-lg md:text-xl font-semibold">
            VEHICLE DATA TRACEABILITY PORTAL
          </h2>
        </div>

        {/* Main Content */}

        <main className="flex-grow flex flex-col justify-center items-center p-6 relative">
          {/* DROPDOWN CONTAINER with relative positioning */}

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-[400px] z-10 py-10">
            {/* Watermark (between dropdowns) */}

            <img
              src={tataItLogo}
              alt="Watermark"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] w-[300px] opacity-20 rounded-full pointer-events-none z-0"
            />

            {/* Area Dropdown */}

            <div className="relative w-80 z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleArea();
                }}
                className={`w-full bg-black text-white border-2 border-white px-4 py-3 rounded-md flex justify-between items-center text-lg ${
                  areaOpen ? "bg-gray-700 border-gray-300" : ""
                }`}
              >
                SELECT AREA <span>&#9660;</span>
              </button>
              {areaOpen && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute left-0 mt-2 w-full bg-white text-black shadow-md border border-gray-200 z-20 rounded"
                >
                  {["Area A", "Area B", "Area C", "Area D"].map((area) => (
                    <a
                      href="#"
                      key={area}
                      className="block px-4 py-2 hover:bg-gray-200 text-base"
                    >
                      {area}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Machine Dropdown */}

            <div className="relative w-80 z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMachine();
                }}
                className={`w-full bg-black text-white border-2 border-white px-4 py-3 rounded-md flex justify-between items-center text-lg ${
                  machineOpen ? "bg-gray-700 border-gray-300" : ""
                }`}
              >
                MACHINE DROP DOWN MENU <span>&#9660;</span>
              </button>
              {machineOpen && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute left-0 mt-2 w-full bg-white text-black shadow-md border border-gray-200 z-20 rounded"
                >
                  {[
                    { name: "Machine Type 1", link: "m1.htm" },
                    { name: "Machine Type 2", link: "m2.htm" },
                    { name: "Machine Type 3", link: "m3.htm" },
                    { name: "Machine Type 4", link: "m4.htm" },
                  ].map((machine) => (
                    <a
                      href={machine.link}
                      key={machine.name}
                      className="block px-4 py-2 hover:bg-gray-200 text-base"
                    >
                      {machine.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Tata Quote Section */}

          <footer className="text-center px-4 py-6 mt-10">
            <img
              src={tataQuoteLogo}
              alt="Tata Quote"
              className="w-full max-w-[90%] md:max-w-[40%] mx-auto"
            />
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;
