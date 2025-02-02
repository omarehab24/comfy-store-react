import PropTypes from "prop-types"

function FormSelect({ label, name, list, defaultValue, size }) {
    return (
        <div className="form-control">
            <label htmlFor={name} className="label">
                <span className="label-text capitalize">{label}</span>
            </label>
            <select name={name} defaultValue={defaultValue} className={`select select-bordered ${size}`} id={name}>
                {list.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}

FormSelect.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    defaultValue: PropTypes.string,
    size: PropTypes.string
}

export default FormSelect