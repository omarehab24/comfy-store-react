import PropTypes from "prop-types"

function FormInput({ label, name, type, defaultValue, size }) {
    return (
        <div className="form-control">
            <label htmlFor={name} className="label">
                <span className="label-text capitalize">{label}</span>
            </label>
            <input type={type} name={name} defaultValue={defaultValue} className={`input input-bordered ${size} w-full mt-2`} />
        </div>
    )
}

FormInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    defaultValue: PropTypes.string,
    size: PropTypes.string
}

export default FormInput