import React from "react";

const Layout = ({children, className=""}:any) => {

    return (
    <div className={`w-full h-full inline-block z-0 ${className}`}>
        {children}
    </div>
)
}

export default Layout