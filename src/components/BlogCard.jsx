import React from 'react'
import Button from './Button'

export function BlogCard({type="bg-dark",title, description, className, url}) {
    const handleBlogRead = () => {
        window.open(url, '_blank').focus();
    }

    return (
        <div className={`${type==="bg-dark" ? "bg-primary text-light" : 'bg-primary-light text-primary'} px-[45px] py-[40px] gap-[20px] justify-center flex flex-col rounded-[25px] ${className}`}>
            <h4 className='text-lg font-bold'>{title}</h4>
            <div className='flex flex-col gap-[20px] items-end'>
            <p>{description}</p>
            <Button onClick={handleBlogRead} type={type==="bg-dark"?"cta-white":"cta"}>Read more</Button>
            </div>
        </div>
    )
}
