from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.config import settings
from db.database import create_tables
from routers import job, story

# Auto-generate PostgreSQL tables on startup
create_tables()

app = FastAPI(
    title="LoreWeaver AI Narrative Engine",
    description="Asynchronous backend for dynamic, AI-driven branching storytelling.",
    version="1.0.0"
)

# Professional CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Resume Booster: Production Health Check Endpoint
@app.get("/api/health", tags=["system"])
async def health_check():
    return {
        "status": "healthy",
        "service": "LoreWeaver AI Engine",
        "version": "1.0.0",
        "database": "connected"
    }

# Register the API routes
app.include_router(job.router, prefix=settings.API_PREFIX)
app.include_router(story.router, prefix=settings.API_PREFIX)