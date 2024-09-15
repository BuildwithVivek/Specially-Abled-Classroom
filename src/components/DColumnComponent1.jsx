import React, { useState, useRef } from 'react';
import './DColumnComponent1.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";


const DColumnComponent1 = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    const videoRef = useRef(null);

    const handleCameraStart = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    const handleCameraStop = () => {
        const tracks = videoRef.current.srcObject?.getTracks();
        tracks && tracks.forEach(track => track.stop());
        videoRef.current.srcObject = null;
    };

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <>
            <div className="con-spe">
                <div className="hh_sp"><h2>Lecture Recorder</h2></div>
                <br/>
               <div className="descp"> <p>Press "Start Listening" to start recording the lecture , to get it's Real Time Captioning</p></div>
                <div className="vv">
                  <video ref={videoRef} autoPlay muted />
                </div>
                <div className="main-con" onClick={() =>  setTextToCopy(transcript)}>
                    {transcript}
                </div>

                <div className="btn-style">
                    <button className='bb' onClick={startListening}>Start Listening</button>
                    <button className='bb' onClick={SpeechRecognition.stopListening}>Stop Listening</button>
                    <button className='bb' onClick={handleCameraStart}>Start Camera</button>
                    <button className='bb' onClick={handleCameraStop}>Stop Camera</button>

                </div>

            </div>

        </>
    );
};

export default DColumnComponent1;