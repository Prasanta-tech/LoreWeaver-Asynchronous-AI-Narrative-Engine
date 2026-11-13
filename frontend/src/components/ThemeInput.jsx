import {useState} from "react"

function ThemeInput({onSubmit}) {
    const [theme, setTheme] = useState("");
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!theme.trim()) {
            setError("Please define a world or theme");
            return
        }

        onSubmit(theme);
    }

    return (
        <div className="theme-input-container" style={{
            background: "rgba(20, 20, 25, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "3rem 2.5rem",
            borderRadius: "12px",
            backdropFilter: "blur(10px)",
            width: "100%",
            maxWidth: "550px",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
        }}>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "2rem", color: "#ffffff", marginBottom: "0.5rem" }}>
                Initialize Simulation
            </h2>
            <p style={{ color: "#888899", marginBottom: "2rem", fontSize: "0.95rem" }}>
                Enter a custom setting, era, or dark fantasy motif to begin your journey.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center" }}>
                <div className="input-group" style={{ width: "100%" }}>
                    <input
                        type="text"
                        value={theme}
                        onChange={(e) => {
                            setTheme(e.target.value);
                            if (error) setError("");
                        }}
                        placeholder="e.g., Cyberpunk cyberpunk underworld, Eldritch cult..."
                        className={error ? 'error' : ''}
                        style={{ width: "100%", maxWidth: "100%", textAlign: "center" }}
                    />
                    {error && <p className="error-text" style={{ color: "#f43f5e", fontSize: "0.85rem", marginTop: "0.5rem" }}>{error}</p>}
                </div>
                <button type="submit" className='generate-btn' style={{ width: "100%" }}>
                    Weave Story
                </button>
            </form>
        </div>
    )
}

export default ThemeInput;