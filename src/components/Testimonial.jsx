import React from 'react'
import timelineBg from '../assets/img/timeline-bg.png';
import { TestimonialCard } from './TestimonialCard';
import data from '../data/testimonial.json';

export function Testimonial(props) {
    

    return (
        <section className=" w-screen bg-primary z-0 py-20 px-5 md:px-20 flex flex-col gap-8 relative">
                <h3 className='font-black text-light text-2xl'>{data.title}</h3>
                <div className='flex overflow-x-auto gap-4'>
                    {
                        data.testimonials.map((testimonial,index)=>{
                            return(
                                <TestimonialCard key={index} type={index%2===0?'outline':'filled'} text={testimonial.text} author={testimonial.author}/>
                            )
                        })
                    }
 </div>
            <img src={timelineBg} alt="timeline-bg" className='absolute w-full left-0 top-0 pointer-events-none' />
            <img src={timelineBg} alt="timeline-bg" className='absolute w-full left-0 bottom-[-1px] rotate-180 pointer-events-none' />
        </section>
    )
}
