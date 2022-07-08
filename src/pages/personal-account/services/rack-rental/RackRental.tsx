import React from 'react';
import RentBlock from "../../components/info-blocks/RentBlock";
import Notes from "../../components/notes/Notes";
import EquipBlock from "../../components/info-blocks/EquipBlock";
import ConfidantBlock from "../../components/info-blocks/ConfidantBlock";
import IpBlock from "../../components/info-blocks/IpBlock";

const RackRental = () => {
    return (
        <div>
            <RentBlock/>
            <Notes/>
            <EquipBlock/>
            <ConfidantBlock/>
            <IpBlock/>
        </div>
    );
};

export default RackRental;