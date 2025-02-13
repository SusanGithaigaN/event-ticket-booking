export default function Events() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#02191D] px-4 md:px-0">
      <div className="w-full max-w-md text-white border-2 border-[#0E464F] rounded-xl p-6 shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-thin">Ticket Selection</h2>
          <span className="text-sm text-gray-400 underline underline-offset-6">Step 1/3</span>
        </div>
        {/* Progress Bar */}
        <div className="flex flex-row w-full h-2 rounded-full mb-6">
          <div className="bg-[#24A0B5] h-2 rounded-full" style={{ width: '33%' }}></div>
          <div className="bg-[#0D4149] h-2 rounded-full" style={{ width: '67%' }}></div>
        </div>
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
            <div className="border-2 border-[#0E464F] rounded-lg p-4 text-left sm:text-center hover:bg-[#0E464F] cursor-pointer">
              <p className="text-lg font-bold py-2">Free</p>
              <p className="text-xs text-gray-400">REGULAR ACCESS</p>
              <p className="text-xs mt-1">20/02</p>
            </div>

            <div className="border-2 border-[#0E464F] rounded-lg p-4 text-left sm:text-center hover:bg-[#0E464F] cursor-pointer">
              <p className="text-lg font-bold py-2">$150</p>
              <p className="text-xs text-gray-400">VIP ACCESS</p>
              <p className="text-xs mt-1">20/52</p>
            </div>
            <div className="border-2 border-[#0E464F] rounded-lg p-4 text-left sm:text-center hover:bg-[#0E464F] cursor-pointer">
              <p className="text-lg font-bold py-2">$150</p>
              <p className="text-xs text-gray-400">VIP ACCESS</p>
              <p className="text-xs mt-1">20/52</p>
            </div>
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
        <div className="flex justify-between">
          <button className="w-32 lg:w-48 px-4 py-2 text-sm text-gray-400 bg-transparent hover:bg-[#eaf8fb] border-1 border-[#24A0B5] rounded-lg">
            Cancel
          </button>
          <a href="/tickets" className="w-32 px-4 py-2 text-sm text-center text-gray-200 bg-[#24A0B5] hover:bg-[#6ad0e2] rounded-lg">
            Next
          </a>
        </div>
      </div>
    </div>
  );
}
