const ScreenRecording = ({
  status,
  startRecording,
  stopRecording,
  screenMediaBlobUrl,
  handleScreenRecordingStop,
}) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-lg">
      <h3 className="text-xl font-semibold mb-2 text-center">
        Screen Recording
      </h3>
      <div className="text-center">
        {status === "recording" ? (
          <button
            onClick={handleScreenRecordingStop}
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
      {status === "stopped" && screenMediaBlobUrl && (
        <div className="mt-4">
          <video
            src={screenMediaBlobUrl}
            controls
            className="w-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ScreenRecording;
