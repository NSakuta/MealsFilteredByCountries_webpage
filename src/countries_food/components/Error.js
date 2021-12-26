export default function Error({message}) {
    return(
        <div className="d-flex justify-content-center">
            <div className="alert alert-danger" role="alert">
                {message}
            </div>
        </div>
    )
}