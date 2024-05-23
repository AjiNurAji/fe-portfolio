import React, { ReactNode } from "react";


interface DefaultLayoutProps {
    children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <div className="h-screen overflow-hidden flex flex-col justify-center items-center">
            {children}
        </div>
    )
}

export default DefaultLayout;