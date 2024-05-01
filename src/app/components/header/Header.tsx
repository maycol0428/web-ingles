"use client"
import BackIcon from '@/components/icons/BackIcon'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { Link } from "next-view-transitions";
import { Button } from '@nextui-org/react';


export const Header = () => {
    const router = useRouter()
    const pathname = usePathname()



    const showButtonBack = pathname !== "/"

    return (
        <header className='header' style={{ viewTransitionName: "header" }}>
            <nav className='flex gap-2'>
                {showButtonBack &&
                    <div>
                        <Link href={"/"} >
                            <button className='cursor-pointer' >
                                <BackIcon></BackIcon>
                            </button>
                        </Link>
                    </div>
                }
                <div className='header__logo text-3xl' style={{ viewTransitionName: "header__text", width: "fit-content" }}>Maycol EM</div>
                <Button variant='solid' color='success'>next UI</Button>
            </nav>

        </header>
    )
}
