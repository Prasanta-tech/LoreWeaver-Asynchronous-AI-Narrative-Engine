function LoadingStatus({theme}) {
    return (
        <div className="loading-container" style={{ textAlign: "center", padding: "4rem 2rem", background: "rgba(20, 20, 25, 0.6)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", backdropFilter: "blur(10px)", width: "100%", maxWidth: "500px" }}>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.8rem", color: "#ffffff", marginBottom: "1.5rem" }}>
                Weaving Narrative
            </h2>

            <div className="loading-animation" style={{ marginBottom: "2rem" }}>
                <div className="spinner" style={{
                    width: "50px",
                    height: "50px",
                    margin: "0 auto",
                    border: "3px solid rgba(124, 58, 237, 0.2)",
                    borderTop: "3px solid #7c3aed",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite"
                }}></div>
            </div>

            <p className="loading-info" style={{ color: "#888899", fontStyle: "italic" }}>
                Constructing the realities of &quot;{theme}&quot;...
            </p>

            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    )
}

export default LoadingStatus;