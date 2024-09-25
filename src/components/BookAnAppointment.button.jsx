import React from 'react'
import Button from './Button';
import references from '../data/references.json';

export function BookAnAppointmentButton(props) {
    
    const gotoAppointment = ()=>{
        window.open(references.calendly, '_blank').focus();
    }
    return (
        <Button {...props} onClick={gotoAppointment}>
            Book an Appointment
        </Button>
    )
}
