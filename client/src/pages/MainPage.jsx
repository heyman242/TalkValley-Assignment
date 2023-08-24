import { useRef} from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import Webcam from "react-webcam"; 

const ScreenRecorder = () => {
  const webcamRef = useRef(null);
  const {
    status: screenRecordingStatus,
    startRecording: startScreenRecording,
    stopRecording: stopScreenRecording,
    mediaBlobUrl: screenMediaBlobUrl,
  } = useReactMediaRecorder({
    video: true,
    screen: true,
    mediaType: "video/mp4",
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
      "screen-recording.mp4",
      {
        type: "video/mp4",
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
    <div>
      <h1>Screen Recorder</h1>
      <div>
        <h3>
          Screen Recording:
          {screenRecordingStatus === "recording" ? (
            <div>
              <button onClick={handleScreenRecordingStop}>
                Stop Recording
              </button>
            </div>
          ) : (
            <button onClick={startScreenRecording}>Start Recording</button>
          )}
          {screenRecordingStatus === "stopped" && screenMediaBlobUrl && (
            <video src={screenMediaBlobUrl} controls />
          )}
        </h3>
      </div>
      <div>
        <h3>
          Webcam Recording:
          {webcamRecordingStatus === "recording" ? (
            <button onClick={handleWebcamRecordingStop}>Stop Recording</button>
          ) : (
            <button onClick={startWebcamRecording}>Start Recording</button>
          )}
          {webcamRecordingStatus === "stopped" && webcamMediaBlobUrl && (
            <video src={webcamMediaBlobUrl} controls />
          )}
          {webcamRecordingStatus === "recording" && (
            <Webcam 
              audio={true}
              videoConstraints={{ facingMode: "user" }} 
              ref={webcamRef}
            />
          )}
        </h3>
      </div>
    </div>
  );
};

export default ScreenRecorder;
