# LoreWeaver 📜✨
### Asynchronous AI Narrative & World-Building Engine

**LoreWeaver** is a full-stack, asynchronous interactive storytelling platform that generates branching "Choose-Your-Own-Adventure" games dynamically using Large Language Models. Built for performance, scalability, and an immersive user experience.

---

## 🚀 Key Features

* **Asynchronous AI Generation:** Offloads heavy narrative generation tasks using background jobs to ensure the FastAPI backend remains responsive without blocking client requests.
* **Dynamic Branching Nodes:** Automatically constructs interconnected narrative paths, decision nodes, and distinct winning/losing endings based on custom user themes.
* **Persistent Relational Storage:** Utilizes PostgreSQL and SQLAlchemy ORM to safely cache generated worlds, chapters, and player choices.
* **Immersive Glassmorphic UI:** A modern dark-fantasy frontend built with React and Vite, featuring custom typography (`Cinzel` and `Inter`) and responsive game controls.

---

## 🛠️ Tech Stack

| Component | Technology |
| :--- | :--- |
| **Backend Framework** | Python, FastAPI, Uvicorn, Pydantic |
| **Database & ORM** | PostgreSQL, SQLAlchemy (`psycopg2`) |
| **AI Integration** | LangChain / OpenAI API |
| **Frontend Framework** | React, Vite, React Router, Axios |
| **Styling** | Modern CSS (Glassmorphism, Dark Theme) |

---

## 📂 Project Architecture

```text
LoreWeaver-Asynchronous-AI-Narrative-Engine/
├── backend/
│   ├── db/              # Database session & table initialization
│   ├── models/          # SQLAlchemy relational schema models
│   ├── routers/         # API endpoints (Story generation & job polling)
│   ├── services/        # AI orchestration & story-weaving logic
│   ├── main.py          # FastAPI application entry point & CORS setup
│   └── requirements.txt # Python package dependencies
├── frontend/
│   ├── src/
│   │   ├── components/  # Game UI, Theme Input, Story Loader, & Game Engine
│   │   ├── App.jsx      # Root routing component
│   │   └── index.css    # Global design system & animations
│   └── package.json     # Node package dependencies
└── README.md