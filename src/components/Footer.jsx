import React from 'react'
   import references from '../data/references.json';

   export function Footer(props) {
     console.log(references)

     const visitLink = (url) => {
       window.open(url, '_blank').focus();
     }

     

     return (
       <section className='grid grid-cols-2 md:grid-cols-3 gap-4 bg-primary text-light p-4 px-5 md:px-20 relative z-20'>
         <img src={window.getPublicUrl("/assets/img/logo.png")} alt="logo" className='logo w-fit' />
         <p className='text-xs text-justify items-center hidden md:flex'>Your health is our priority. Let us partner with you on your journey to better health and wellbeing. Visit us today and take the first step towards a healthier future.</p>
         <div className='flex flex-col gap-4 items-end'>
           <a href="mailto:somemail@mail.com">somemail@mail.com</a>
           <span className='flex gap-3'>
             {
               references.socials.map((social, index) => {
                 return <img onClick={() => { visitLink(social.link) }} key={index} className='object-contain h-[30px] cursor-pointer' src={window.getPublicUrl(social.iconImg)} alt={social.name} />
               })
             }
           </span>
         </div>
       </section>
     )
   }