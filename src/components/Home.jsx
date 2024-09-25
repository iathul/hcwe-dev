import effectbg from '../assets/img/effect.svg';
import Button from './Button';
import data from '../data/landing.json';
import references from '../data/references.json';
import { BookAnAppointmentButton } from './BookAnAppointment.button';
export default function Home(props) {
    const signUp = () =>{
        window.open(references['signup-form'], '_blank').focus();
    }
    return (
        <section className="h-screen w-screen bg-primary-light relative z-0 pt-0 md:pt-20 px-5 md:px-20 items-center gap-5 flex flex-col-reverse justify-center md:flex-row">
            <img className=' absolute -z-1 pointer-events-none -left-[50%] lg:left-[-30%] top-0 -rotate-[95deg]' src={effectbg} alt="effect" />
            <div className='w-full md:w-1/2'>
            <div className='w-full md:w-fit flex flex-col gap-3 text-dark rounded-2xl backdrop-blur-sm p-5 z-30 relative bg-primary-light bg-opacity-80 md:bg-transparent'>
                <h3 className='font-black'>{data.title}</h3>
                <p className='w-full lg:w-2/3'>{data.paragraph}</p>
                <div className='flex gap-4 mt-5 flex-wrap'><Button onClick={signUp} type='outline' className="w-full lg:w-fit">Sign up</Button><BookAnAppointmentButton className="w-full lg:w-fit"/></div>
            </div>
            </div>
            <div className=' md:block w-1/2 relative z-20 overflow-hidden rounded-2xl md:h-1/2 before:w-[10%] before:right-[44%] before:h-full before:fixed before:bg-primary-light before:z-10 before:top-0 before:blur-[10px] before:hidden '>
                <img className='object-cover  fixed top-0 w-full md:w-[55%] h-full right-0 md:right-[-8%]' src={data.img} alt="img" />
            </div>
        </section>
    )
}
