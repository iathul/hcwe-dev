import React from 'react'
import { SpecialCard } from './SpecialCard'
import data from '../data/special.json';

export function Special(props) {
    

    return (
        <section className="w-screen bg-light relative z-0 py-20 px-5 md:px-20 flex flex-col gap-8">
                <h3 className='font-black text-dark text-2xl'>{data.title}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    data.cards.map((card,index)=>{
                        return (<SpecialCard key={index} title={card.title} content={card.content}/>)
                    })
                }
                        </div>
            
        </section>
    )
}
