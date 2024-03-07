import React from 'react';
import Choice from './Choice';
function Header() {
    return (
        <nav className="flex flex-col md:flex-row items-center justify-between h-auto md:h-16 w-full px-4 py-2 md:py-0">

            <div className="flex items-center space-x-2 md:space-x-4">
                <img src="./assets/Brain Chat logo,brain bubble chat logo.jpg" className="h-10 w-10 md:h-14 md:w-14 bg-cover" alt="" />
                <h1 className="text-xl md:text-3xl text-white font-bold">Quiz <span className="text-blue-400">Luxe</span></h1>
            </div>

            <ul className="flex justify-center md:justify-start list-none text-white text-lg md:text-2xl space-x-4 md:space-x-8 mt-4 md:mt-0">
                <li>Home</li>
                <li>
                    <select name="" id="select" className="bg-black border-none text-white text-lg md:text-2xl">
                        <option value="internet">internet</option>
                        <option value="react">react</option>
                        <option value="java">java</option>
                        <option value="python">python</option>
                    </select>
                </li>
                <li>
                    <select name="" id="select" className="bg-black border-none text-white text-lg md:text-2xl">
                        <option value="internet">internet</option>
                        <option value="react">react</option>
                        <option value="java">java</option>
                        <option value="python">python</option>
                    </select>
                </li>
                <li>
                    <select name="" id="defficulty" className="bg-black border-none text-white text-lg md:text-2xl">
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </li>
                <li
                    onClick={() => <Choice />}
                    className='cursor-pointer'>
                    <select name="" id="select" className="bg-black border-none text-white text-lg md:text-2xl">
                        <option value="internet">internet</option>
                        <option value="react">react</option>
                        <option value="java">java</option>
                        <option value="python">python</option>
                    </select>
                </li>
            </ul>

            <div className="flex items-center space-x-2 md:space-x-4 mt-4 md:mt-0">
                <span className="text-white text-lg md:text-2xl">Login</span>
                <div className="h-10 w-28 md:w-36 pt-1 text-center rounded-xl text-white md:text-lg bg-blue-400 hover:bg-blue-500 cursor-pointer">Register</div>
            </div>
        </nav>
    )
}

export default Header;
