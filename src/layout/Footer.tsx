import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { Container } from "./Container";
import { navigationItems } from "./navigation";

export const Footer: React.FC = () => {

    return (

        <footer>
            <Container className="bg-grey-10 py-20">
                <div className="flex flew-row max-sm:flex-col items-center max-sm:items-start justify-between gap-5 max-sm:gap-10">
                <Link href="/" className="flex items-center space-x-3">
                    <Image
                        src={logo.src}
                        alt="SkillHive Logo"
                        width={48}
                        height={48}
                        className="w-12 h-12"
                    />
                    <span className="text-main text-xl font-thin">
                        SkillHive
                    </span>
                </Link>
                    <nav className="flex items-center space-x-8 self-center">
                        {navigationItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                        >
                            {item.name}
                        </Link>
                        ))}
                    </nav>
                </div>

                <div className="w-full h-[1px] my-10 bg-grey-7" />

                <div className="flex flew-row max-sm:flex-col items-center max-sm:items-start justify-between gap-5">
                    <p className="text-grey-6">
                        © 2025 SkillHive. All rights reserved.
                    </p>
                    <Link href="/home" className="text-grey-6">Terms & Conditions</Link>
                </div>
            </Container>
        </footer>
    )
}