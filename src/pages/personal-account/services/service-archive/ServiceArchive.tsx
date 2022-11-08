import React from 'react';
import RentPlaceFrame from "../assets/frames/rent-place-frame/RentPlaceFrame";
import RentServerFrame from "../assets/frames/rent-server-frame/RentServerFrame";

const ServiceArchive = () => {
    return (
        <div>
            <RentPlaceFrame archive={true}/>
            <RentServerFrame archive={true} />
        </div>
    );
};

export default ServiceArchive;