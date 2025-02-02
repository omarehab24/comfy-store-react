import PropTypes from "prop-types"

function FormCheckbox({ label, name, defaultValue, size }) {
    return (
        <div className="form-control flex flex-col gap-2 items-center">
            <label htmlFor={name} className="label cursor-pointer">
                <span className="label-text capitalize">{label}</span>
            </label>
            <input type="checkbox" name={name} defaultChecked={defaultValue} className={`checkbox checkbox-primary ${size}`} id={name} />
        </div>
    )
}

FormCheckbox.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.bool,
    size: PropTypes.string
}

export default FormCheckbox