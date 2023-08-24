import React, { useRef } from "react";
import { useReactMediaRecorder } from "react-media-recorder-2";
import { ScreenRecording, WebcamRecording } from "../components";

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

  const handleScreenRecordingStop = () => {
    saveScreenRecordingToLocalStorage();
    stopScreenRecording();
  };

  const handleWebcamRecordingStop = () => {
    saveWebcamRecordingToLocalStorage();
    stopWebcamRecording();
  };

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

  return (
    <div className="p-4 bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-500 underline">
          RecordHub Lets You Record Your Screen And Webcam For Free!!!
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ScreenRecording
          status={screenRecordingStatus}
          startRecording={startScreenRecording}
          stopRecording={stopScreenRecording}
          screenMediaBlobUrl={screenMediaBlobUrl}
          handleScreenRecordingStop={handleScreenRecordingStop}
        />
        <WebcamRecording
          status={webcamRecordingStatus}
          startRecording={startWebcamRecording}
          stopRecording={stopWebcamRecording}
          webcamMediaBlobUrl={webcamMediaBlobUrl}
          webcamRef={webcamRef}
          handleWebcamRecordingStop={handleWebcamRecordingStop}
        />
      </div>
    </div>
  );
};

export default MainPage;
