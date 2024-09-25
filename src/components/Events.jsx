import React from 'react'
import data from '../data/events.json';
import { EventCard } from './EventCard';

export function Events(props) {
    

    return (
        <section className="w-screen  bg-light relative z-0 py-20 px-5 md:px-20 flex flex-col gap-4 md:gap-8">
                <h3 className='font-black text-dark text-2xl'>{data.title}</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 flex-wrap gap-10 '>
                    {
                        data.events.map((event, index)=>{
                            return (
                                <EventCard key={index} event={event}/>
                            )
                        })
                    }
                </div>
        </section>
    )
}
