import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types";

function SubmitButton({ text }) {
  const navigate = useNavigate();
  const isSubmitting = navigate.state === "submitting";

  return (
    <button type="submit" className="btn btn-primary btn-block">
      <span>
        {
          isSubmitting ?
            <><span className="loading loading-spinner">Submitting...</span></>
            : text || "Submit"
        }
      </span>
    </button>
  )
}

SubmitButton.propTypes = {
  text: PropTypes.string
}

export default SubmitButton