import React from "react";

interface MainProps {
    children: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => {

    return (
        <main>
            {children}
        </main>
    )
}