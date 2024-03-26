interface IAlert {
    type: string,
    mensaje?: string
}

const AlertUserForm: React.FC<IAlert> = ({ type = 'success', mensaje }) => {
    return type === 'success' ?
        (
            <div className={`alert alert-success alert-dismissible`} role="alert">
                <div>{mensaje}</div>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        )
        :
        (
            <div className={`alert alert-warning alert-dismissible`} role="alert">
                <div>{mensaje}</div>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        )
};

export default AlertUserForm