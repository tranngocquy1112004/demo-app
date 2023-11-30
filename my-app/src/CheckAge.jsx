import React from "react";
const CheckAge = () => {
    const age = new Date().getFullYear() - 2004
    if (age >= 22) {
        return <p>Tôi là developer</p>
    }
    return <p onClick={logto}>Tôi là student</p>
}
export default CheckAge