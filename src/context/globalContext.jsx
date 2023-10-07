import React, { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {
    const [openForget, setOpenForget] = React.useState(true);

    const handleOpenForget = () => setOpen(!open);

    return( 
        <GlobalContext.Provider value={
            {
                openForget, setOpenForget, handleOpenForget
            }
        }
        >
            {props.children}
        </GlobalContext.Provider>
    )

}