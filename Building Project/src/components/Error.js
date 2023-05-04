import { useRouteError , Link } from "react-router-dom" ; 

const Error = () => {

    const {status , statusText} = useRouteError() ; 
    return (

        <div className="m-5 text-center">
            <span className="error-statement p-3">{status} - Page {statusText}</span>
            <div className= "error"></div>
            <Link to = "/" className="error-escape "> <button className="fs-1 p-3 error-button">Return to Safety</button></Link>
        </div>

    )

}
export default Error ; 