import React from 'react'
import Button from './Button'

export function EventCard({ event}) {
    const onClick=()=>{window.open(event.link, '_blank').focus()}

    return (
        <div className='flex gap-4 flex-col w-fit items-center'>
            <div className='flex gap-1 flex-col w-fit'>
                <h3 className='text-lg font-bold text-secondary'>{event.title}</h3>
                <div className='flex flex-wrap justify-between gap-2'>
                <div className='bg-ternary-light px-3 rounded-2xl text-ternary py-0 m-0 leading-normal w-full lg:w-fit flex justify-center'>{event.platform}</div>
                <div className='px-3 rounded-2xl bg-primary-light text-primary items-center py-0 m-0 flex gap-4 w-full lg:w-fit justify-center'>
                <span>{event.date}</span>
                <span>{event.time}</span>
                </div>
                </div>
            </div>
            <p className='text-dark w-fit text-center'>{event.description}</p>
            <Button className="w-full" onClick={onClick}>Join</Button>
        </div>
    )
}
