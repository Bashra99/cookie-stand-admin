import React, { useState,useContext } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { ThemeContext } from '../contexts/theme';

export default function Header() {
    const {isDarkTheme, toggleThemeHandler} = useContext(ThemeContext);
    return (
        
        <nav class="flex item-center justify-between dark:text-white h-12 bg-emerald-900">
            <div class="inline-flex items-center ">
            <Link className='inline-flex items-center px-2 mr-4' href='/'>
                    <Image 
                    src="/next.svg" 
                    alt="Logo"
                    width={75}
                    height={40}
>
                    </Image>
                    <span className=' ml-5'>Bashar Telfah</span>
                </Link>

            </div>
            <div class=" inline-flex items-center dark:text-white no-underline text-sm mr-20 ">
                <a  href="/">Home</a>
                <a class= "ml-5 hover:text-gray-500" href="/">About</a>

                <button
                    type="button"
                    className="py-1 sm:py-2.5 px-2 sm:px-5 mr-2 bg-zinc-300 text-black dark:bg-gray-900 dark:text-white rounded ml-5"
                    onClick={toggleThemeHandler}
                >Toggel Theme</button>
            </div>
        </nav>
    )
}