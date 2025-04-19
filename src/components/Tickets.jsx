import React from "react";
import Button from "./common/Button";
import Progress from "./common/Progress";
import ProgressBar from './common/ProgressBar'
import uploads from '../assets/upload-svgrepo-com.svg';
import mail from '../assets/mail-svgrepo-com.svg';

export default function Tickets() {
    // buttons
    const ticketBtns = [
        { label: "Back", href: "/", variant: "secondary" },
        { label: "Get My Free Ticket", href: "/about", variant: "primary" },
    ]
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#02191D] px-4 md:px-0 pt-4 md:pt-0">
            <div className="w-full max-w-md bg-transparent text-white border-2 border-[#0E464F] rounded-xl p-6 shadow-xl">
                {/* Header */}
                <Progress title="Attendee Details" step="Step 2/3" />
                {/* Progress Bar */}
                <ProgressBar progress={[{ done: 66, rem: 37 }]} />
                
                {/* Profile Photo Upload */}
                <div className='border-2 border-[#0E464F] rounded-2xl p-6'>
                    <div className='border-2 border-[#0E464F] rounded-2xl p-4'>
                        <div className="p-4 rounded-lg mb-6">
                            <label className="block text-sm font-medium mb-2 text-gray-300 py-4">Upload Profile Photo</label>
                            <div className="flex items-center justify-center h-28 py-4 bg-[#030b0c]">
                                <div className="flex flex-col items-center justify-center border-4 border-[#24A0B5] rounded-2xl w-38 p-6 cursor-pointer bg-[#0E464F]">
                                    <img src={uploads} className="h-6 mb-2" />
                                    <p className="text-sm text-white text-center">Drag & drop or click to upload</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Inputs */}
                <form className="space-y-8 pt-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium">
                            Enter your name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="block w-full mt-1 bg-transparent text-white rounded-lg p-2.5 border border-[#24A0B5] focus:outline-none focus:ring-2 focus:ring-[#0E464F]"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">
                            Enter your email *
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                className="block w-full mt-1 bg-transparent text-white rounded-lg p-2.5 border border-[#24A0B5] focus:outline-none focus:ring-2 focus:ring-[#0E464F]"
                            />
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <img src={mail} className="h-4 mb-2" />
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="specialRequest" className="block text-sm font-medium">
                            Special request?
                        </label>
                        <textarea
                            id="specialRequest"
                            rows="3"
                            className="block w-full mt-1 bg-transparent text-white rounded-lg p-2.5 border border-[#24A0B5] focus:outline-none focus:ring-2 focus:ring-[#0E464F]"
                            placeholder="Textarea"
                        ></textarea>
                    </div>
                </form>

                {/* Action Buttons */}
                <Button buttons={ticketBtns} />
            </div>
        </div>
    );
}
