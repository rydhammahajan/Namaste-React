import { useState } from "react";

function Accordian({ques , visibleAccordian , setVisibleAccordian}){


    return(
        <div className="p-4 faq-ques my-5 position-relative" key = {ques?.id} 
        onClick={()=>{
            if(visibleAccordian !== ques.id)setVisibleAccordian(ques.id) ; 
            else setVisibleAccordian(0) ; 
        }}
        >
            {visibleAccordian !== ques.id  && <i className="fa-solid fa-angle-up position-absolute"
            onClick={()=>{
                setVisibleAccordian(ques.id) ; 
            }}
            ></i>}
            {visibleAccordian === ques.id  && <i className="fa-solid fa-angle-down position-absolute"
            onClick={()=>{
                setVisibleAccordian(0) ; 
            }}
            ></i>}

            <div className="fs-5 h1 ">
                {ques?.title}
            </div>
            {visibleAccordian === ques.id && <div className="fs-6 py-2 text-secondary">
                {ques?.description}
            </div>}
        </div>
    )

}

export default Accordian ; 