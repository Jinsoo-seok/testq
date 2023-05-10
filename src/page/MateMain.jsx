import React from 'react';
import Search from "../components/common/Search";
import SubNavbar from "../components/SubNavbar";
import MateRegistrationPopup from "../components/popup/mate/MateRegistrationPopup";
import MateDetailPopup from "../components/popup/mate/MateDetailPopup";

export default function MateMain() {
    return (
        <div>
            <SubNavbar />
            <Search />
            <MateRegistrationPopup />
            <MateDetailPopup />
        </div>
    );
}