import { useNavigate } from "react-router-dom"

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

export default SubmitButton