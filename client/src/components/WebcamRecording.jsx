import Webcam from "react-webcam";

const WebcamRecording = ({
  status,
  startRecording,
  stopRecording,
  webcamMediaBlobUrl,
  webcamRef,
  handleWebcamRecordingStop,
}) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-lg">
      <h3 className="text-xl font-semibold mb-2 text-center">
        Webcam Recording
      </h3>
      <div className="text-center">
        {status === "recording" ? (
          <button
            onClick={handleWebcamRecordingStop}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Stop Recording
          </button>
        ) : (
          <button
            onClick={startRecording}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Start Recording
          </button>
        )}
      </div>
      {status === "stopped" && webcamMediaBlobUrl && (
        <div className="mt-4">
          <video
            src={webcamMediaBlobUrl}
            controls
            className="w-full rounded-lg"
          />
        </div>
      )}
      {status === "recording" && (
        <div className="mt-4">
          <Webcam
            audio={true}
            videoConstraints={{ facingMode: "user" }}
            ref={webcamRef}
          />
        </div>
      )}
    </div>
  );
};

export default WebcamRecording;
