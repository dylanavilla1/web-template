const Card = ({image,title, buttonModal}) => {

    return (
        <div className="flex w-[400px]  shadow-lg  bg-zinc-700 shadow-zinc-900">
            <img src={image} className="cursor-pointer hover:opacity-50 duration-700 ease-in-out w-full object-cover"/>
            <div className="flex flex-col w-[300px] bg-zinc-800 text-white p-3 gap-5 justify-center items-center">
                <h1 className="text-xl">{title}</h1>
                <p className="text-center text-sm font-thin">Lorem ipsum dolor  Iste officia repudiandae laborum ut minus suscipit?</p>
                <p className="font-semibold">Rp 50.000</p>
                <button  className="bg-rose-500 px-5 py-2 rounded hover:bg-rose-600" onClick={() => buttonModal(true)}>Details</button>
            </div>
        </div>
                
    )
}

export default Card