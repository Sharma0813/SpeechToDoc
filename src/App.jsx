import React, { useRef } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const textRef = useRef();

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
        <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow">
          <h1 className="text-2xl font-semibold mb-4">Speech → Doc</h1>
          <p className="text-gray-700">
            Sorry — your browser does not support the Web Speech API.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Use the latest Chrome or Edge on desktop, or supported mobile
            browsers.
          </p>
        </div>
      </div>
    );
  }

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-US" });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  const downloadTxt = () => {
    const blob = new Blob([transcript], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transcript.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(transcript);
      alert("Transcript copied to clipboard");
    } catch (err) {
      alert("Unable to copy: " + err);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="card">
        <header className="flex items-start justify-between">
          <div>
            <h1>Speech → Doc</h1>
            <p>Convert your speech to editable text and download it.</p>
          </div>
          <div>
            Microphone:{" "}
            {listening ? (
              <span style={{ color: "limegreen" }}>ON</span>
            ) : (
              <span style={{ color: "red" }}>OFF</span>
            )}
          </div>
        </header>

        <main className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label>Transcript</label>
              <textarea
                ref={textRef}
                value={transcript}
                onChange={() => {}}
                placeholder="Your spoken words will appear here..."
              />
            </div>

            <button onClick={startListening} className="btn-primary">
              Start
            </button>
            <button onClick={stopListening} className="btn-secondary">
              Stop
            </button>
            <button
              onClick={() => SpeechRecognition.pauseListening()}
              className="btn-secondary"
            >
              Pause
            </button>
            <button
              onClick={() => SpeechRecognition.resumeListening()}
              className="btn-secondary"
            >
              Resume
            </button>
            <button onClick={copyToClipboard} className="btn-secondary">
              Copy
            </button>
            <button onClick={downloadTxt} className="btn-primary">
              Download TXT
            </button>
            <button onClick={resetTranscript} className="btn-danger">
              Reset
            </button>
          </div>
        </main>

        <footer></footer>
      </div>
    </div>
  );
}

export default App;
