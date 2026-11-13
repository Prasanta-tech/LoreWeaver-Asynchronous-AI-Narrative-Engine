# LoreWeaver 📜
### Asynchronous AI Narrative & World-Building Engine

LoreWeaver is a full-stack interactive storytelling platform that uses Large Language Models (LLMs) to generate dynamic, branching narratives. Users can explore AI-generated worlds, make choices that influence the storyline, and experience different narrative paths and endings.

The project combines asynchronous backend processing, relational database storage, and an interactive frontend to create an engaging storytelling experience.

---

## ✨ Features

- **Asynchronous AI Generation** – Handles time-consuming narrative generation tasks in the background to keep backend API interactions responsive.
- **Dynamic Story Branching** – Generates interconnected narrative paths based on user choices and story context.
- **AI-Powered World Building** – Creates story settings, characters, and narrative elements dynamically.
- **Multiple Story Endings** – Supports different narrative outcomes depending on the choices made throughout the story.
- **Persistent Data Storage** – Uses PostgreSQL and SQLAlchemy ORM to store and retrieve generated worlds and narrative content.
- **Interactive User Interface** – Features a modern, dark-themed interface built with React and Vite.

## 🛠️ Technology Stack

| Component | Technology |
|---|---|
| Backend | Python, FastAPI |
| Frontend | React, Vite |
| Database | PostgreSQL |
| ORM | SQLAlchemy |
| AI Integration | OpenAI API |
| API Architecture | REST API |

## 📁 Project Structure

```text
LoreWeaver/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── ...
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

*Note: The structure is a simplified overview of the application.*

---

## 🚀 Getting Started

Follow these instructions to set up and run LoreWeaver on your local machine.

### Prerequisites

Make sure you have the following installed:

- Python 3.10 or later
- Node.js (LTS)
- npm
- PostgreSQL
- OpenAI API key

### 1. Clone the Repository

```bash
git clone https://github.com/Prasanta-tech/LoreWeaver-Asynchronous-AI-Narrative-Engine.git

cd LoreWeaver-Asynchronous-AI-Narrative-Engine
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Create a Python virtual environment:

```bash
python -m venv .venv
```

Activate the environment.

**Windows:**

```bash
.venv\Scripts\activate
```

**Linux / macOS:**

```bash
source .venv/bin/activate
```

Install the required dependencies:

```bash
pip install -r requirements.txt
```

### 3. Environment Configuration

Create a `.env` file inside the `backend/` directory.

Add the following environment variables:

```env
DATABASE_URL=postgresql+psycopg2://postgres:your_password@localhost:5432/loreweaver
OPENAI_API_KEY=your_openai_api_key
```

Replace the placeholder values with your actual PostgreSQL credentials and OpenAI API key.

Make sure the PostgreSQL database named `loreweaver` exists before starting the backend.

**Important:** Never commit your actual `.env` file or API credentials to GitHub.

### 4. Run the Backend

From the `backend/` directory, start the FastAPI development server:

```bash
uvicorn main:app --reload
```

The backend API will be available at:

```text
http://127.0.0.1:8000
```

If Swagger documentation is enabled, access it at:

```text
http://127.0.0.1:8000/docs
```

### 5. Frontend Setup

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install the frontend dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal to access the application.

---

## 🏗️ Architecture Overview

LoreWeaver follows a frontend-backend architecture with an AI-powered narrative generation workflow.

```text
          User
           |
           v
     React Frontend
           |
           v
      FastAPI Backend
           |
           v
  Asynchronous Processing
           |
           v
    AI Narrative Engine
           |
           v
      OpenAI API
           |
           v
   Generated Narratives
           |
           v
      PostgreSQL
```

The frontend communicates with the backend through API endpoints. The backend coordinates narrative generation, AI integration, and data persistence.

*The diagram provides a conceptual overview; the actual implementation may use a different processing sequence.*

---

## 📸 Application Preview

Screenshots of the running application will be added here.

| Interface | Description |
|---|---|
| Main Interface | Main storytelling interface |
| Story Generation | AI-powered narrative generation |
| Story Exploration | Interactive narrative progression |

---

## 🔮 Future Improvements

Potential areas for further development:

- Improved narrative context management.
- Background task status tracking.
- Retry mechanisms for failed AI generation requests.
- Automated backend and API testing.
- Docker-based application deployment.
- Improved logging and error monitoring.



---

**LoreWeaver**  
*Exploring interactive storytelling through asynchronous AI generation.*
