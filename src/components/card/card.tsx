

function Card(){

    return(
        <>
         <div className={"w-[230px] h-[300px] bg-amber-200 rounded-xl overflow-hidden cursor-pointer"}>

             <div className={"w-full h-[55%] overflow-hidden bg-[url(src/assets/images/MSI-SWD17-A12UCX-I5-WHT-550x550.jpg)] object-fill bg-center bg-cover"}>
                 {/*<img src={'src/components/card/MSI-SWD17-A12UCX-I5-WHT-550x550.jpg'} title={"product"} alt={"photo"} className={"w-full h-full hover:scale-110 transform"}/>*/}
             </div>

             <div className={"w-full h-[45%] bg-white "}>

             </div>
         </div>
        </>
    )

}

export default Card;