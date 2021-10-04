import React from 'react';
import ContactComp from '../components/Contact/ContactComp';

const Contact = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center py-4 pb-2">Contact</h2>
            {/* Contact us component added */}
            <ContactComp></ContactComp>
        </div>
    );
};

export default Contact;