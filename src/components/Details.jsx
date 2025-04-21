import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "./common/Button";
import Progress from "./common/Progress";
import ProgressBar from './common/ProgressBar'
import uploads from '../assets/upload-svgrepo-com.svg';
import mail from '../assets/mail-svgrepo-com.svg';

export default function Details() {
    // buttons
    const navigate = useNavigate();

    // Data to be saved to localstorage: profile pic, Name, email, special request
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [specialRequest, setSpecialRequest] = useState('');
    const [profilePic, setProfilePic] = useState(null);

    // Store data
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            name: name,
            email: email,
            specialRequest: specialRequest,
            profilePic: profilePic,
        };

        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Form data stored in localStorage:', formData);
        navigate('/tickets');
    };

    // Image upload. store as a Base64 string 
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Navigation
    const ticketBtns = [
        { label: "Back", variant: "secondary", onClick: () => navigate(-1) },
        { label: "Generate My Ticket", variant: "primary", onClick: handleSubmit },
    ];

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
                                <label htmlFor="profileImageInput" className="flex flex-col items-center justify-center border-4 border-[#24A0B5] rounded-2xl w-38 p-6 cursor-pointer bg-[#0E464F]">
                                    <img src={uploads} className="h-6 mb-2" alt="upload icon" />
                                    <p className="text-sm text-white text-center">Drag & drop or click to upload</p>
                                    <input
                                        type="file"
                                        id="profileImageInput"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Inputs */}
                <form className="space-y-8 pt-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium">
                            Enter your name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full mt-1 bg-transparent text-white rounded-lg p-2.5 border border-[#24A0B5] focus:outline-none focus:ring-2 focus:ring-[#0E464F]"
                            />
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <img src={mail} className="h-4 mb-2" alt="mail icon" />
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
                            value={specialRequest}
                            onChange={(e) => setSpecialRequest(e.target.value)}
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