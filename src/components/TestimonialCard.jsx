import React from 'react';
import {ReactComponent as Quote} from '../assets/img/Quote.svg';

export function TestimonialCard({text,author, type='default'}) {
    

    return (
        <div className={`flex flex-col rounded-[15px] items-end p-4 py-20 relative border-2 text-${type==="filled" ? 'dark' :'light'} min-w-[250px] md:min-w-[350px] gap-4 ${type==="filled" ? "bg-light" :""}`}>
            <Quote className='absolute left-4 top-6' />
            <p className='px-4'>{text}</p>
            <strong>- {author}</strong>
        </div>
    )
}
