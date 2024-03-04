import React from 'react'
import Cmdk from './components/cmdk'
import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Songs-For-You | V1 | Dev Home",
  description: 'home page while in development',
}

export default function Home() {
    return (
        <div>
            <Cmdk />
            <h1>Press CMD+K to start.</h1>
        </div>
    )}