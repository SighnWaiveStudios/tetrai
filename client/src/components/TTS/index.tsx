import React from 'react';
import './module.css';
import { TextToSpeech, TTSAudioData } from 'tts-react';
import { audiosrc } from './audiosrc'

export default function TTS() {

  const fetchAudioData = () => new Promise<TTSAudioData>((resolve) => {
      setTimeout(() => {
        resolve({
          audio: audiosrc
        })
      }, 1000)
  })

  return (
    <div 
      className="hidden"
    >
      <TextToSpeech
        autoPlay={true}
        fetchAudioData={fetchAudioData}
        rate={0.85}
        volume={1}
        children={undefined}
      />
    </div>
  );
}