import React, { useState } from 'react';
import DisplayResults from './DisplayResults'; 
import analyzeImage from '../azure-image-analysis';
import generateImage from '../azure-image-generation';

function ComputerVision() {
  const [data, setData] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  // const [analysisResult, setAnalysisResult] = useState(null);
  // const [generatedImage, setGeneratedImage] = useState('');

  const handleAnalyzeClick = async () => {
    if (!data) {
      alert('Please enter a URL to analyze.');
      return;
    }
    console.log(data);
    setIsProcessing(true);
    try {

        console.log(data);
      const result = await analyzeImage(data);
      setAnalysisResult(result);
    } catch (error) {
      console.error('Failed to analyze image:', error);
      alert('Failed to analyze the image.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleGenerateClick = async () => {
    if (!data) {
      alert('Please enter a prompt to generate.');
      return;
    }

    console.log(data)
    setIsProcessing(true);
    try {

      console.log(data)
      const generatedImageUrl = await generateImage(data);
      setGeneratedImage(generatedImageUrl);
    } catch (error) {
      console.error('Failed to generate image:', error);
    }
    setIsProcessing(false);
  };

  return (
    <div>
      <h1>Computer Vision</h1>
      <p>Insert URL or type Prompt:</p>
      <input 
        type="text" 
        placeholder='Enter URL to analyze or textual prompt to generate an image'
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <br /><br />
      <button onClick={handleAnalyzeClick} disabled={isProcessing}>Analyze</button>
      <button onClick={handleGenerateClick} disabled={isProcessing}>Generate</button>
      <hr />
      {isProcessing ? <p>Processing...</p> : <DisplayResults />}
    </div>
  );
}

export default ComputerVision;
