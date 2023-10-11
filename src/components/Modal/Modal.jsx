const Modal = ({closeModalBox}) => {
    return (
       <div className="fixed z-[1] bg-zinc-800 text-white w-full h-full top-[50px] overflow-y-auto bg-opacity-50  rounded-lg shadow-lg overflow-x-hidden outline-none p-5 flex flex-col items-center justify-center gap-5" id="modal" aria-placeholder="modal" aria-hidden="true" tabIndex="-1">
           <div className="shadow-md p-6 shadow-rose-500 bg-zinc-900 flex flex-col z-[5] w-[500px] mb-20  gap-5  rounded-md">
                <h1 className="text-2xl font-bold text-center leading-[-2px]">Landing Page</h1>
                <p className="leading-[-5px] font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea maiores enim magni consequuntur accusantium aliquam ab iste veritatis? Beatae ipsum laborum aspernatur necessitatibus praesentium modi voluptatum eum officia, numquam odio nulla fugit saepe repudiandae ex, nisi quod corrupti. Inventore sapiente praesentium vitae suscipit ut molestias. Quod amet consectetur vel neque!</p>
                <button className="bg-rose-500 px-5 w-[200px] m-auto py-2 rounded hover:bg-rose-600 " onClick={() =>  closeModalBox(false)}>Close Modal</button>
           </div>

       </div>
    
    )
}

export default Modal