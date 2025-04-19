import React from "react";
import Button from "./common/Button";
import Progress from "./common/Progress";
import ProgressBar from './common/ProgressBar'

export default function Events() {
  const buttonsGroup1 = [
    { label: "Cancel", variant: "secondary", onClick: () => console.log("Cancel clicked") },
    { label: "Next", href: "/tickets", variant: "primary" },
  ];

  // ticket categories
  const ticketOptions = [
    { price: "Free", access: "REGULAR ACCESS", availability: "20/02" },
    { price: "$150", access: "VIP ACCESS", availability: "20/52" },
    { price: "$150", access: "VIP ACCESS", availability: "20/52" },
  ]
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#02191D] px-4 md:px-0 pt-4 md:pt-0">
      <div className="w-full max-w-md text-white border-2 border-[#0E464F] rounded-xl p-6 shadow-lg">
        {/* Header */}
        <Progress title="Ticket Selection" step="Step 1/3" />
        {/* Progress Bar */}
        <ProgressBar progress={[{ done: 33, rem: 67 }]} />

        {/* Event Details */}
        <div className="bg-[#09272D] p-4 rounded-xl shadow-xl mb-6">
          <h3 className="text-2xl font-semibold text-center">Techember Fest "25</h3>
          <p className="text-center text-sm text-gray-300 mt-2">
            Join us for an unforgettable experience at <br />
            <span className="font-semibold">[Event Name]</span>. Secure your spot now.
          </p>
          <div className="flex justify-center flex-col md:flex-row items-center mt-4 space-x-6">
            <p className="flex items-center text-sm py-2">
              📍 <span className="ml-1">[Event Location]</span>
            </p>
            {/* <p className="px-4">||</p> */}
            <p className="flex items-center text-sm">
              📅 <span className="ml-1">March 15, 2025 / 7:00 PM</span>
            </p>
          </div>
        </div>

        {/* Ticket Options */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="ticketType">
            Select Ticket Type:
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ticketOptions.map((ticket, index) => (
              <div
                key={index}
                className="border-2 border-[#197686] rounded-lg p-4 text-left sm:text-center hover:bg-[#2C545B] cursor-pointer"
              >
                <p className="text-lg font-bold py-2">{ticket.price}</p>
                <p className="text-xs text-gray-400">{ticket.access}</p>
                <p className="text-xs mt-1">{ticket.availability}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Number of Tickets */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="numTickets">
            Number of Tickets
          </label>
          <select
            id="numTickets"
            className="block w-full bg-transparent text-white rounded-lg p-2.5 border-2 border-[#0E464F] focus:outline-none focus:ring-2 focus:ring-[#0E464F]"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {/* Actions */}
        <Button buttons={buttonsGroup1} />
      </div>
    </div>
  );
}
