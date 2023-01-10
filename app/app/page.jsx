"use client";

import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useContext } from 'react';

import styles from './page.module.css'
import Form from './components/Form'
import Main from './components/Main';
import LoginForm from './components/LoginForm';
import { AuthContext } from './contexts/auth';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {tokens}=useContext(AuthContext)

  

  return (
    <>
    {tokens? <Main/> : <LoginForm/> }
    </>

  )
}
