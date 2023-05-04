const Shimmer = () => {

    let index = 0 ;
    return (
    
        <>
            <div className="search-box d-flex justify-content-center p-5">
                <div className="shimmer-search shimmer-animation"></div>
            </div>

            <div className = "d-flex flex-wrap gap-4 justify-content-evenly">

              
               {Array(16).fill("").map(()=>{
                index++ ; 
                return <div className="shimmer-card shimmer-animation" key = {index} ></div>
                })}
            </div>
        </>
    )

} 

export default Shimmer ;  