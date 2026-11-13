import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom";
import axios from "axios";
import ThemeInput from "./ThemeInput.jsx";
import LoadingStatus from "./LoadingStatus.jsx";
import {API_BASE_URL} from "../util.js";

function StoryGenerator() {
    const navigate = useNavigate()
    const [theme, setTheme] = useState("")
    const [jobId, setJobId] = useState(null)
    const [jobStatus, setJobStatus] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let pollInterval;

        if (jobId && jobStatus === "processing") {
            pollInterval = setInterval(() => {
                pollJobStatus(jobId)
            }, 5000)
        }

        return () => {
            if (pollInterval) {
                clearInterval(pollInterval)
            }
        }
    }, [jobId, jobStatus])

    const generateStory = async (theme) => {
        setLoading(true)
        setError(null)
        setTheme(theme)

        try {
            const response = await axios.post(`${API_BASE_URL}/stories/create`, {theme})
            const {job_id, status} = response.data
            setJobId(job_id)
            setJobStatus(status)

            pollJobStatus(job_id)
        } catch (e) {
            setLoading(false)
            setError(`Failed to weave narrative: ${e.message}`)
        }
    }

    const pollJobStatus = async (id) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/jobs/${id}`)
            const {status, story_id, error: jobError} = response.data
            setJobStatus(status)

            if (status === "completed" && story_id) {
                fetchStory(story_id)
            } else if (status === "failed" || jobError) {
                setError(jobError || "The weave has collapsed. Failed to generate story.")
                setLoading(false)
            }
        } catch (e) {
            if (e.response?.status !== 404) {
                setError(`Connection to the void lost: ${e.message}`)
                setLoading(false)
            }
        }
    }

    const fetchStory = async (id) => {
        try {
            setLoading(false)
            setJobStatus("completed")
            navigate(`/story/${id}`)
        } catch (e) {
            setError(`Failed to materialize story: ${e.message}`)
            setLoading(false)
        }
    }

    const reset = () => {
        setJobId(null)
        setJobStatus(null)
        setError(null)
        setTheme("")
        setLoading(false)
    }

    return (
        <div className="story-generator" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {error && (
                <div className="error-message" style={{ background: "rgba(225, 29, 72, 0.1)", border: "1px solid rgba(225, 29, 72, 0.3)", padding: "2rem", borderRadius: "8px", textAlign: "center", marginBottom: "2rem" }}>
                    <p style={{ color: "#fda4af", marginBottom: "1.5rem" }}>{error}</p>
                    <button onClick={reset}>Forge a New Path</button>
                </div>
            )}

            {!jobId && !error && !loading && <ThemeInput onSubmit={generateStory}/>}

            {loading && <LoadingStatus theme={theme} />}
        </div>
    )
}

export default StoryGenerator