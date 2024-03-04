'use client'

import { Command } from 'cmdk'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import './cmdk-raycast.css'

const Cmdk = () => {

    // initialize cmdk state
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const down = (e: KeyboardEvent) => {

            // if cmd + k are pressed, change the state of cmdk
            if (e.key === 'k' && (e.metaKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        // add event listener to the document
        document.addEventListener('keydown', down)

        // remove event listener when component is unmounted
        return () => document.removeEventListener('keydown', down)
    }, [])

    // return cmdk component
    return (
        <div className="raycast">
            <Command.Dialog open={open} onOpenChange={setOpen} label="Global Dev Menu">
                <Command.Input />
                <Command.List>
                    <Command.Empty>No results here.</Command.Empty>

                    <Command.Group heading = "Navigation">
                        <Command.Item>Log In</Command.Item>
                        <Command.Item>Back Cover</Command.Item>
                    </Command.Group>
                </Command.List>
            </Command.Dialog>
        </div>
        )
}

const DynamicCmdk = dynamic(() => Promise.resolve(Cmdk), { ssr: false })
export default DynamicCmdk
    

