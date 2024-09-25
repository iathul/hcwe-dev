import React from 'react'

export default function Button({type="cta", children,...rest}) {
    const defaultNames = 'py-1 px-4 font-medium';
    const ctaClasses = 'bg-primary rounded-3xl text-light hover:opacity-75 transition-opacity ease duration-300'
    const ctaWhiteClasses = 'bg-light rounded-3xl text-dark hover:opacity-75 transition-opacity ease duration-300'
    const outlineClasses = ' border-primary border-2 text-primary rounded-3xl hover:bg-primary hover:text-light transition-bg transition-text ease duration-300'
    const classNames = `${defaultNames} ${type==="cta" ? ctaClasses : type==="outline" ? outlineClasses  : ctaWhiteClasses}`
    return (
        <button {...rest} className={`${classNames} ${rest.className}`}>
            {children}
        </button>
    )
}
