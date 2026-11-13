import {useState, useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom"
import axios from 'axios';
import LoadingStatus from "./LoadingStatus.jsx";
import StoryGame from "./StoryGame.jsx";
import {API_BASE_URL} from "../util.js";

function StoryLoader() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        loadStory(id)
    }, [id])

    const loadStory = async (storyId) => {
        setLoading(true)
        setError(null)

        try {
            const response = await axios.get(`${API_BASE_URL}/stories/${storyId}/complete`)
            setStory(response.data)
            setLoading(false)
        } catch (err) {
            if (err.response?.status === 404) {
                setError("This chronicle has been lost to time.")
            } else {
                setError("Failed to summon the narrative.")
            }
        } finally {
            setLoading(false)
        }
    }

    const createNewStory = () => {
        navigate("/")
    }

    if (loading) {
        return <LoadingStatus theme={"story"} />
    }

    if (error) {
        return (
            <div className="story-loader" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <div className="error-message" style={{ background: "rgba(20, 20, 25, 0.8)", border: "1px solid rgba(255, 255, 255, 0.1)", padding: "3rem", borderRadius: "8px", textAlign: "center", backdropFilter: "blur(10px)" }}>
                    <h2 style={{ fontFamily: "'Cinzel', serif", color: "#e2e2e9", marginBottom: "1rem" }}>Chronicle Not Found</h2>
                    <p style={{ color: "#888899", marginBottom: "2rem" }}>{error}</p>
                    <button onClick={createNewStory}>Return to the Loom</button>
                </div>
            </div>
        )
    }

    if (story) {
        return (
            <div className="story-loader" style={{ width: "100%", maxWidth: "800px" }}>
                <StoryGame story={story} onNewStory={createNewStory} />
            </div>
        )
    }
}

export default StoryLoader;