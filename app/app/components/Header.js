import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function Header() {
    return (
        <nav class="flex item-center justify-between text-white h-12 bg-emerald-900">
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
            <div class=" inline-flex items-center text-white no-underline text-sm mr-20 ">
                <a  href="/">Home</a>
                <a class= "ml-5 hover:text-gray-500" href="/">About</a>
            </div>
        </nav>
    )
}