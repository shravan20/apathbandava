// src/components/AddService.js
import React, { useState } from 'react';

const AddService = ({ onAddService }) => {
    const [service, setService] = useState({ name: '', contact: '', latitude: '', longitude: '', availability: false });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddService(service);
        setService({ name: '', contact: '', latitude: '', longitude: '', availability: false });
    };

    return (
        <div className="card">
            <h2>Add Service</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={service.name} onChange={(e) => setService({ ...service, name: e.target.value })} placeholder="Service Name" required />
                <input type="text" value={service.contact} onChange={(e) => setService({ ...service, contact: e.target.value })} placeholder="Contact Information" required />
                <input type="text" value={service.latitude} onChange={(e) => setService({ ...service, latitude: e.target.value })} placeholder="Latitude" required />
                <input type="text" value={service.longitude} onChange={(e) => setService({ ...service, longitude: e.target.value })} placeholder="Longitude" required />
                <label>
                    <input type="checkbox" checked={service.availability} onChange={(e) => setService({ ...service, availability: e.target.checked })} />
                    Available
                </label>
                <button type="submit" className="primary">Add Service</button>
            </form>
        </div>
    );
};

export default AddService;
