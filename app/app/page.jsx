"use client";

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Form from './components/Form'
import Main from './components/Main';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Main/>
    </main>
  )
}

// h-screen w-full bg-cover bg-center max-w-screen max-h-screen bg-[url('/assets/bgimage.png')]