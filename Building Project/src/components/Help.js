import { useState } from "react";
import useFAQ from "../utils/useFAQ";
import Accordian from "./Accordian";
const Help = () => {

    const [visibleAccordian , setVisibleAccordian] = useState() ; 
    const questions = useFAQ() ; 
    console.log(questions) ; 

    return (

        <div className = "faq py-5 ">

           
            <div className="position-sticky top-0 faq-header  my-5 px-5 py-2">
                <h1 className="text-light">Help & Support</h1>
                <div className="text-light fs-5">Lets take a step ahead and help you better</div>
            </div>

            <div className="d-flex p-5">

                <div className="faq-body bg-light p-5">
                    <div className="fs-1 text-color">Frequently Asked Questions!</div>
                    <div>
                        {
                            questions && questions.map((ques)=> {
                                if(ques.description && !ques.title.includes("wiggy") && !ques.description.includes("wiggy") )
                                return <Accordian ques = {ques} visibleAccordian = {visibleAccordian} setVisibleAccordian = {setVisibleAccordian}/> ; 
                            })
                        }
                    </div>
                </div>
                <div className="faq-email p-5 bg-light bg-light">

                    <div className=" bg-light fs-4 text-center">Have a question that wasn't answered here?🤔</div>
                    <div className=" bg-light text-center text-secondary"> Let us know and we'll be happy to help!"</div>
                    <div className="fs-5 py-2 ">
                       Write to us at <a href="mailto:2001rydham@gmail.com " className="text-color">@supportflavoufinders</a>
                    </div>

                </div>
            </div>

        </div>
        

    )

}

export default Help ; 