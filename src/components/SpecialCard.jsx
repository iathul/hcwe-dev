import React from 'react'

export function SpecialCard({title, content}) {
    

    return (
        <div className={`p-10 flex flex-col gap-5 bg-primary-light rounded-[25px] text-primary `}>
            <h3 className='font-black text-lg'>{title}</h3>
            <p>{content}</p>
        </div>
    )
}
