import React from 'react';
import PropTypes from 'prop-types';


export default function Notification({message}) {
    return (
        <section>
        <h3>{message}</h3>
        </section>
    );
}

Notification.propTypes = {
    message: PropTypes.string.isRequired
}