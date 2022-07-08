import React from 'react';
import RentBlock from "../../components/info-blocks/RentBlock";
import ServerBlock from "../../components/info-blocks/ServerBlock";

const ServiceArchive = () => {
    return (
        <div>
            <RentBlock archive={true}/>
            <ServerBlock archive={true} />
        </div>
    );
};

export default ServiceArchive;