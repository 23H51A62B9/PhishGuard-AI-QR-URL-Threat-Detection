# PhishGuard AI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/)
[![Stars](https://img.shields.io/github/stars/your-username/phishguard-ai?style=social)](https://github.com/your-username/phishguard-ai)

**A full-stack, AI-powered phishing detection and prevention system designed to analyze URLs, QR codes, emails, and SMS messages for modern cyber threats in real-time.**

 <!-- Replace with a real screenshot of your app -->

## 🚀 Key Features

-   **Multi-Vector Threat Analysis**: Scans URLs, QR code content, email bodies, and SMS messages for phishing indicators.
-   **Advanced AI Detection**: Leverages Google's Gemini model to identify sophisticated threats, including social engineering tactics, URL obfuscation, homoglyph attacks, and AI-generated phishing text.
-   **Secure Backend API**: All AI analysis is handled by a secure Node.js/Express backend, protecting API keys and centralizing logic.
-   **Interactive Dashboard**: Presents a detailed analysis report with an overall risk score, actionable prevention advice, and an "Explainable AI" breakdown of detected threat signals.
-   **QR Code Scanning**: Supports both uploading a QR code image and scanning one in real-time using the device camera.
-   **User Feedback Loop**: Allows users to provide feedback on analysis accuracy, creating a data foundation for future model retraining.

## 🛠️ Tech Stack

-   **Frontend**: React, Vite, TypeScript, Tailwind CSS
-   **Backend**: Node.js, Express, TypeScript
-   **AI Engine**: Google Gemini API (`@google/genai`)
-   **QR Decoding**: `jsQR` (Client-side)
-   **Database** (Optional): MongoDB with Mongoose for storing analysis history.

## 🏛️ Architecture

The application follows a secure client-server model. The React frontend is responsible for the user interface and capturing input, while the Node.js backend handles all sensitive operations, including communication with the Gemini API.

```
[User's Browser (React Client)]
      |
      |-- (1. Sends content/QR for analysis) -->
      |
[Backend Server (Node.js/Express)]
      |
      |-- (2. Validates request) -->
      |-- (3. Calls Gemini API with secure key) --> [Google Gemini API]
      |-- (4. Receives structured JSON analysis) --<
      |
      |-- (5. (Optional) Saves result to DB) --> [MongoDB]
      |
      |-- (6. Returns JSON report to client) --<
      |
[User's Browser (React Client)]
      |
      |-- (7. Displays interactive dashboard)
```

## 🏁 Getting Started

Follow these instructions to get a local copy of PhishGuard AI up and running for development and testing.

### Prerequisites

-   Node.js (v18 or later)
-   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/phishguard-ai.git
    cd phishguard-ai
    ```

2.  **Setup the Backend:**
    ```bash
    cd server
    npm install

    # Create a .env file in the /server directory
    cp .env.example .env
    ```
    Now, open `server/.env` and add your environment variables:
    ```env
    # Port for the backend server
    PORT=3001

    # Your Google Gemini API Key (keep this secret!)
    GEMINI_API_KEY=your_gemini_api_key_here

    # (Optional) Connection string for your MongoDB database
    # MONGO_URI=mongodb://...
    ```

3.  **Setup the Frontend:**
    ```bash
    cd ../client
    npm install

    # Create a .env.local file in the /client directory
    cp .env.example .env.local
    ```
    Open `client/.env.local` and configure the backend API URL:
    ```env
    # URL of your running backend server
    VITE_API_URL=http://localhost:3001
    ```

### Running the Application

1.  **Start the backend server:**
    ```bash
    # From the /server directory
    npm run dev
    ```
    The server should now be running on `http://localhost:3001`.

2.  **Start the frontend client:**
    ```bash
    # From the /client directory
    npm run dev
    ```
    Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).

## ⚙️ API Endpoints

The backend exposes the following REST API endpoint:

#### `POST /api/analyze`

Analyzes the content provided in the request body.

-   **Request Body**:
    ```json
    {
      "content": "The string to be analyzed (e.g., URL, email text)"
    }
    ```
-   **Success Response (200 OK)**:
    -   Returns a structured JSON `AnalysisReport` object with the full results.
-   **Error Response (400/500)**:
    -   Returns a JSON object with an error message.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improving PhishGuard AI, please feel free to fork the repository and submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📜 License

This project is distributed under the MIT License. See `LICENSE` for more information.
`
