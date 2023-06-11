import { useState , useEffect , useContext } from "react";
import useFAQ from "../utils/useFAQ";
import Accordian from "./Accordian";
import LocationContext from "../utils/LocationContext";
import Location from "./Location";
import HeaderContext from "../utils/HeaderContext";
import { useNavigate } from "react-router-dom";
import useIsAuthenticated from "../utils/useIsAuthenticated";
const Help = () => {

    const [visibleAccordian , setVisibleAccordian] = useState() ; 
    const questions = useFAQ() ; 
    const {locationModal} = useContext(LocationContext)
    const {setPage} = useContext(HeaderContext) ;
    const {isAuthenticated} = useIsAuthenticated()
    const navigate = useNavigate() ;

    useEffect(()=>{
        setPage({
            currentPage : "help" ,
        })
    }, [])

    useEffect(()=>{
        if(isAuthenticated === false){
            navigate("/login")
        }
    } , [isAuthenticated])

    return (

        <div className = "faq py-5 ">
            {locationModal.display && <Location/>}
           
            <div className="position-sticky top-0 faq-header  my-5 px-5 py-2">
                <h1 className="text-light">Help & Support</h1>
                <div className="text-light fs-5">Lets take a step ahead and help you better</div>
            </div>

            <div className="d-flex p-3 flex-column gap-3 align-items-center">

                <div className="faq-body bg-light p-3 col-11 col-lg-10">
                    <div className="fs-1 text-color text-center">Frequently Asked Questions!</div>
                    <div>
                        {
                            questions && questions.map((ques)=> {
                                if(ques.description && !ques.title.includes("wiggy") && !ques.description.includes("wiggy") )
                                return <Accordian ques = {ques} visibleAccordian = {visibleAccordian} setVisibleAccordian = {setVisibleAccordian}/> ; 
                            })
                        }
                    </div>
                </div>
                <div className="faq-email p-5 bg-light bg-light col-12 col-lg-8">

                    <div className=" bg-light fs-4 text-center">Have a question that wasn't answered here?🤔</div>
                    <div className=" bg-light text-center text-secondary"> Let us know and we'll be happy to help!"</div>
                    <div className="fs-5 py-2 text-center">
                       Write to us at <a href="mailto:2001rydham@gmail.com " className="text-color">@supportflavoufinders</a>
                    </div>

                </div>
            </div>

        </div>
        

    )

}

export default Help ; 