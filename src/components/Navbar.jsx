import React from 'react'

export const Navbar = () => {
    return (
        <div className=''>
            <nav className='flex flex-row justify-center'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </div>
    )
}
