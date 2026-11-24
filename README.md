# Code Review

An AI-powered code review platform. Paste your code, click **Review**, and get instant feedback from Google Gemini: issues found, why they matter, and recommended fixes with example code.

## Features

- Paste code into a syntax-highlighted editor (Prism.js)
- One-click AI review powered by Google Gemini
- Structured feedback: **Issues Identified** and **Recommended Fixes**
- Suggested code improvements with usage examples
- Clean split-screen layout: code on the left, review on the right


## Tech Stack

**Frontend**
- React (JavaScript)
- CSS
- Prism.js for syntax highlighting

**Backend**
- Node.js
- Express 5
- `@google/genai` (Gemini API)
- `cors`
- `dotenv`

## Project Structure

```
Code-review/
├── frontend/          # React app (editor + review UI)
├── backend/           # Express server + Gemini integration
│   └── server.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- A Google Gemini API key from [Google AI Studio](https://aistudio.google.com/)

### 1. Clone the repository

```bash
git clone https://github.com/adithyaarchak/Code-review.git
cd Code-review
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
GEMINI_API_KEY=your_api_key_here
PORT=[3000]
```

Start the server:

```bash
node server.js
```

### 3. Set up the frontend

```bash
cd frontend
npm install
npm [run dev / start]
```

Open the app at `http://localhost:[port]`.

## How It Works

1. The user pastes code into the editor and clicks **Review**.
2. The frontend sends the code to the Express backend.
3. The backend sends it to Gemini with a code-review prompt.
4. Gemini's response (issues and fixes) is returned and displayed in the review panel.

## API

| Method | Endpoint        | Description                      |
|--------|-----------------|----------------------------------|
| POST   | `/[your-route]` | Sends code and returns AI review |

**Request body**
```json
{ "code": "function sum() { return 1 + 1 }" }
```

## Future Improvements

- Support for multiple languages with auto-detection
- Review history and saved sessions
- User authentication
- Severity levels for issues
- Export reviews as PDF or Markdown

## Contributing

Contributions are welcome. Fork the repo, create a feature branch, and open a pull request.

## License

[ISC / MIT]. See `LICENSE` for details.

## Author

**Adithya** · [GitHub](https://github.com/adithyaarchak)
