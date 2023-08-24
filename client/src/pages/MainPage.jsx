import { useRef} from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import Webcam from "react-webcam"; 

const MainPage = () => {
  const webcamRef = useRef(null);
  const {
    status: screenRecordingStatus,
    startRecording: startScreenRecording,
    stopRecording: stopScreenRecording,
    mediaBlobUrl: screenMediaBlobUrl,
  } = useReactMediaRecorder({
    video: true,
    screen: true,
    mediaType: "video/webm",
  });

  const {
    status: webcamRecordingStatus,
    startRecording: startWebcamRecording,
    stopRecording: stopWebcamRecording,
    mediaBlobUrl: webcamMediaBlobUrl,
  } = useReactMediaRecorder({
    video: true,
    audio: true,
    mediaType: "video/mp4",
  });

  const saveScreenRecordingToLocalStorage = () => {
    const screenRecordingFile = new File(
      [screenMediaBlobUrl],
      "screen-recording.webm",
      {
        type: "video/webm",
      }
    );

    localStorage.setItem(
      "screen-recording",
      JSON.stringify(screenRecordingFile)
    );
  };

  const saveWebcamRecordingToLocalStorage = () => {
    const webcamRecordingFile = new File(
      [webcamMediaBlobUrl],
      "webcam-recording.mp4",
      {
        type: "video/mp4",
      }
    );

    localStorage.setItem(
      "webcam-recording",
      JSON.stringify(webcamRecordingFile)
    );
  };

  const handleScreenRecordingStop = () => {
    saveScreenRecordingToLocalStorage();
    stopScreenRecording();
  };

  const handleWebcamRecordingStop = () => {
    saveWebcamRecordingToLocalStorage();
    stopWebcamRecording();
  };

  return (
    <div className="p-4 bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 text-red-600 underline">
          RecordHub Lets You Record Your Screen And Webcam For Free!!!
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-4 bg-white shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-center">
            Screen Recording
          </h3>
          <div className="text-center">
            {screenRecordingStatus === "recording" ? (
              <button
                onClick={handleScreenRecordingStop}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Stop Recording
              </button>
            ) : (
              <button
                onClick={startScreenRecording}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Start Recording
              </button>
            )}
          </div>
          {screenRecordingStatus === "stopped" && screenMediaBlobUrl && (
            <div className="mt-4">
              <video
                src={screenMediaBlobUrl}
                controls
                className="w-full rounded-lg"
              />
            </div>
          )}
        </div>
        <div className="border rounded-lg p-4 bg-white shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-center">
            Webcam Recording
          </h3>
          <div className="text-center">
            {webcamRecordingStatus === "recording" ? (
              <button
                onClick={handleWebcamRecordingStop}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Stop Recording
              </button>
            ) : (
              <button
                onClick={startWebcamRecording}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Start Recording
              </button>
            )}
          </div>
          {webcamRecordingStatus === "stopped" && webcamMediaBlobUrl && (
            <div className="mt-4">
              <video
                src={webcamMediaBlobUrl}
                controls
                className="w-full rounded-lg"
              />
            </div>
          )}
          {webcamRecordingStatus === "recording" && (
            <div className="mt-4">
              <Webcam
                audio={true}
                videoConstraints={{ facingMode: "user" }}
                ref={webcamRef}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
