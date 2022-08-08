import React from 'react';
import RentBlock from "../assets/info-blocks/RentBlock";
import ServerBlock from "../assets/info-blocks/ServerBlock";

const ServiceArchive = () => {
    return (
        <div>
            <RentBlock archive={true}/>
            <ServerBlock archive={true} />
        </div>
    );
};

export default ServiceArchive;