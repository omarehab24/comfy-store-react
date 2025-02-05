import { useNavigation } from "react-router-dom"
import PropTypes from "prop-types";

function SubmitButton({ text }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span>
          Submitting...
        </>
      )
        : (text || "Submit")
      }
    </button>
  )
}

SubmitButton.propTypes = {
  text: PropTypes.string
}

export default SubmitButton