import logo from "@/assets/logo.png";
import Text from "@/shared/ui/atoms/Text";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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
                    <Text type="span" size="body1" color="main" className="font-thin">
                        SkillHive
                    </Text>
                </Link>
                    <nav className="flex items-center space-x-8 self-center">
                        {navigationItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                        >
                            <Text type="span" size="body2" color="grey">
                                {item.name}
                            </Text>
                        </Link>
                        ))}
                    </nav>
                </div>

                <div className="w-full h-[1px] my-10 bg-grey-7" />

                <div className="flex flew-row max-sm:flex-col items-center max-sm:items-start justify-between gap-5">
                    <Text type="p" size="caption" color="grey">
                        © 2025 SkillHive. All rights reserved.
                    </Text>
                    <Link href="/home">
                        <Text type="span" size="caption" color="grey">
                            Terms & Conditions
                        </Text>
                    </Link>
                </div>
            </Container>
        </footer>
    )
}