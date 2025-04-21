import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "./common/Button";
import Progress from "./common/Progress";
import ProgressBar from './common/ProgressBar'
import Bar from '../assets/Bar Code.svg';
import NoTickets from './common/NoTickets';

export default function Tickets() {
  const navigate = useNavigate();

  const handleBookAnotherTicket = () => {
    localStorage.removeItem('ticketData');
    localStorage.removeItem('formData');
    console.log('Local storage cleared.');
    navigate('/'); // Navigate back to the events page or wherever you want
  };

  const buttonsGroup = [
    { label: "Book Another Ticket", variant: "secondary", onClick: handleBookAnotherTicket },
    { label: "Download Ticket", href: "/", variant: "primary" },
  ];

  // Retrieve ticket details from /events
  const [ticketDetails, setTicketDetails] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Retrieve ticket data from Local Storage
    const storedData = localStorage.getItem('ticketData');
    if (storedData) {
      setTicketDetails(JSON.parse(storedData));
      console.log("Retrieved ticket data from Local Storage:", JSON.parse(storedData));
    }

    // Retrieve user form data from Local Storage
    const userInput = localStorage.getItem('formData');
    if (userInput) {
      const parsedUserData = JSON.parse(userInput);
      setUserInfo(parsedUserData);
      console.log("The user details are:", parsedUserData);
    }
  }, []);

  if (!ticketDetails) {
    return <NoTickets />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#02191D] px-4 md:px-0 pt-4 md:pt-0">
      <div className="w-full max-w-md  border-2 border-[#0E464F] text-white rounded-lg p-6 shadow-lg">
        {/* Header */}
        <Progress title='Ready' step='Step 3/3' />

        {/* Progress Bar */}
        <ProgressBar progress={[{ done: 86, rem: 14 }]} />

        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold mb-2">Your Ticket is Booked!</h2>
          <p className="text-sm text-gray-400">
            Check your email for a copy or you can download it below.
          </p>
        </div>

        {/* Ticket Card */}
        <div className="ticket-card px-8 py-12 mb-4 md:mb-12">
          <div className="bg-[#072B2F] rounded-2xl p-4 border border-[#24A0B5] pb-4 md:pb-14">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold">Techember Fest "25</h3>
              <p className="text-sm text-gray-400">
                📍 Landmark Beach, Lagos
                <br />
                📅 March 15, 2025 | 7:00 PM
              </p>
            </div>

            {/* User avatar */}
            <div className="flex items-center justify-center mb-4">
              <img
                src={userInfo?.profilePic}
                alt="Attendee"
                className="rounded-xl border-2 border-teal-500 w-26 h-24"
              />
            </div>
            {/* User info */}
            <div className="border border-[#0E464F] rounded-lg bg-[#08343C] p-1 text-white text-sm space-y-2 md:space-y-4">
              {/* Row 1 */}
              {/* Populate/display user input & make it readonly */}
              <div className="grid grid-cols-2 gap-4 border-b border-[#0E464F] pb-4">
                <div className="pr-4 border-r border-[#0E464F]">
                  <label className="text-gray-400 block mb-1" htmlFor="name">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Avi Chukwu"
                    className="w-full bg-transparent rounded-md p-2 text-white placeholder-gray-500"
                    value={userInfo?.name || ''}
                    readOnly
                  />
                </div>
                <div className="pl-4">
                  <label className="text-gray-400 block mb-1" htmlFor="email">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="User@email.com"
                    className="w-full bg-transparent rounded-md p-2 text-white placeholder-gray-500"
                    value={userInfo?.email || ''}
                    readOnly
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-4 border-b border-[#0E464F] pb-4">
                {ticketDetails.selectedTicket && (
                  <div className="pr-4 border-r border-[#0E464F]">
                    <label className="text-gray-400 block mb-1" htmlFor="ticketType">
                      Ticket Type
                    </label>
                    <p
                      id="ticketType"
                      className="w-full bg-transparent rounded-md p-2 text-white"
                    >{ticketDetails.selectedTicket.access}</p>
                  </div>
                )}
                <div className="pl-4">
                  <label className="text-gray-400 block mb-1" htmlFor="ticketFor">
                    Ticket for :
                  </label>
                  <p
                    id="ticketFor"
                    className="w-full bg-transparent rounded-md p-2 text-white"
                  >{ticketDetails.numberOfTickets}</p>
                </div>
              </div>

              {/* Row 3 */}
              <div>
                <label className="text-gray-400 block mb-1" htmlFor="specialRequest">
                  Special request:
                </label>
                <textarea
                  id="specialRequest"
                  placeholder="Nil? Or the user's sad story they write in there gets this whole space, Max of three rows"
                  className="w-full bg-transparent rounded-md p-2 text-white placeholder-gray-500"
                  rows="3"
                  value={userInfo?.specialRequest || ''}
                  readOnly
                ></textarea>
              </div>
            </div>

          </div>

          {/* Barcode */}
          <div className="flex justify-center pt-6 md:pt-14">
            <div className="p-2 rounded-lg">
              <img
                src={Bar}
                alt="Barcode"
                className="w-full"
              />
              <div className="flex justify-between text-xs mt-2">
                <span>234587</span>
                <span>807106</span>
              </div>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <Button buttons={buttonsGroup} />

      </div>
    </div>
  );
}