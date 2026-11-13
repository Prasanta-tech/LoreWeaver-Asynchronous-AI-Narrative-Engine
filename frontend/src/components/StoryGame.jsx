import {useState, useEffect} from 'react';

function StoryGame({story, onNewStory}) {
    const [currentNodeId, setCurrentNodeId] = useState(null);
    const [currentNode, setCurrentNode] = useState(null)
    const [options, setOptions] = useState([])
    const [isEnding, setIsEnding] = useState(false)
    const [isWinningEnding, setIsWinningEnding] = useState(false)

    useEffect(() => {
        if (story && story.root_node) {
            const rootNodeId = story.root_node.id
            setCurrentNodeId(rootNodeId)
        }
    }, [story])

    useEffect(() => {
        if (currentNodeId && story && story.all_nodes) {
            const node = story.all_nodes[currentNodeId]

            setCurrentNode(node)
            setIsEnding(node.is_ending)
            // Fixed typo from tutorial: is_winning_endig -> is_winning_ending
            setIsWinningEnding(node.is_winning_ending)

            if (!node.is_ending && node.options && node.options.length > 0) {
                setOptions(node.options)
            } else {
                setOptions([])
            }
        }
    }, [currentNodeId, story])

    const chooseOption = (optionId) => {
        setCurrentNodeId(optionId)
    }

    const restartStory = () => {
        if (story && story.root_node) {
            setCurrentNodeId(story.root_node.id)
        }
    }

    return (
        <div className="story-game" style={{ width: "100%", display: "flex", flexDirection: "column", gap: "2rem" }}>
            <header className="story-header" style={{ textAlign: "center" }}>
                <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "2rem", color: "#ffffff", letterSpacing: "2px" }}>
                    {story.title}
                </h2>
            </header>

            <div className="story-content" style={{ background: "rgba(20, 20, 25, 0.7)", border: "1px solid rgba(255, 255, 255, 0.08)", padding: "2.5rem", borderRadius: "12px", backdropFilter: "blur(12px)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
                {currentNode && (
                    <div className="story-node" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <p style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "#d1d5db" }}>
                            {currentNode.content}
                        </p>

                        {isEnding ? (
                            <div className="story-ending" style={{ textAlign: "center", padding: "2rem 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.8rem", color: isWinningEnding ? "#34d399" : "#f43f5e", marginBottom: "0.5rem" }}>
                                    {isWinningEnding ? "Triumphant Survival" : "Grim Demise"}
                                </h3>
                                <p style={{ color: "#9ca3af", fontStyle: "italic" }}>
                                    {isWinningEnding ? "You have successfully navigated the shadows and claimed your fate." : "Your choices led you to an untimely end. The narrative closes."}
                                </p>
                            </div>
                        ) : (
                            <div className="story-options" style={{ display: "flex", flexDirection: "column", gap: "1rem", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem" }}>
                                <h3 style={{ fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "2px", color: "#888899" }}>
                                    Choose Your Path
                                </h3>
                                <div className="options-list" style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                                    {options.map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={() => chooseOption(option.node_id)}
                                            className="option-btn"
                                            style={{
                                                background: "rgba(255, 255, 255, 0.03)",
                                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                                color: "#e2e2e9",
                                                padding: "14px 20px",
                                                borderRadius: "6px",
                                                textAlign: "left",
                                                cursor: "pointer",
                                                transition: "all 0.2s ease",
                                                fontSize: "1rem"
                                            }}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.background = "rgba(124, 58, 237, 0.15)";
                                                e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.5)";
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                                                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                                            }}
                                        >
                                            {option.text}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                <div className="story-controls" style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <button onClick={restartStory} className="reset-btn" style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "#9ca3af", padding: "10px 20px" }}>
                        Rewind Timeline
                    </button>
                    {onNewStory && (
                        <button onClick={onNewStory} className="new-story-btn">
                            Forge New World
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default StoryGame