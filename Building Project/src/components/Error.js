import { useRouteError , Link } from "react-router-dom" ; 

const Error = () => {

    const {status , statusText} = useRouteError() ; 
    return (

        <div className="d-flex flex-column align-items-center gap-3 p-3">

            <img src = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/404Resized_hoeune"></img>
            <div className = "d-flex flex-column align-items-center">
                <span className="h1 fs-4 p-3">{status} - Page {statusText}</span>
                <span className="text-secondary">Uh-oh! Looks like the page yo are trying to access, doesn't exist. Please start afresh</span>
            </div>
            <Link to = "/" className="error-escape "> <button className="fs-3 p-3 error-button">Return to Safety</button></Link>
        </div>

    )

}
export default Error ; 