export function Stats({count, title, showPlus, bg="secondary"}) {
    

    return (
        <div className={`w-full aspect-square rounded-[30px] bg-${bg} text-light flex flex-col py-2 px-6`}>
            <h4 className="font-bold text-2xl">{title}</h4>
            <span className={`flex font-bold text-[90px] w-full justify-end ${showPlus ? 'pr-6' : 'pr-2'} relative`}>
            <h2 className="">{count.toString().padStart(2,'0')}</h2>{showPlus ? <span className="absolute -right-8">+</span> : ""}
            </span>
        </div>
    )
}
