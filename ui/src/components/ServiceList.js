import React from 'react';

const ServiceList = ({ services }) => {
    return (
        <div className="card">
            <h2>Services</h2>
            <ul>
                {services.map(service => (
                    <li key={service.$id}>
                        {service.name} - {service.contact} - {service.availability ? 'Available' : 'Not Available'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceList;
