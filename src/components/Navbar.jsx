import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import logo from '../assets/logo.png'

const navigation = [
    { name: 'Events', href: '/', current: true },
    { name: 'My Tickets', href: '/tickets', current: false },
    { name: 'About Project', href: '/details', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-[#02191D]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
                <div className="relative flex h-16 items-center justify-between border-2 border-[#0E464F] rounded-xl p-4">
                    {/* Mobile Menu Button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {/* Icon for mobile menu */}
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </DisclosureButton>
                    </div>

                    {/* Logo and Navigation Links */}
                    <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-center">
                        {/* Logo */}
                        <div className="flex items-center space-x-16">
                            <a href='/' className='text-dec'>
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="h-10 w-25 rounded-full"
                                />
                            </a>

                            {/* Navigation Links */}
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-8">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? 'text-gray-300'
                                                    : 'text-gray-500 hover:text-white',
                                                'rounded-md px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Top-Right Button */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button className="bg-white capitalize px-4 py-2 rounded-md text-sm font-thin hover:bg-[#24A0B5] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2">
                            My Tickets
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 mx-4 pt-2 pb-3 bg-[#053e48] shadow-2xl rounded-md">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(
                                item.current
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
