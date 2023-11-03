import React, { useState } from 'react';
import DisplayResults from './DisplayResults'; 
import analyzeImage from '../azure-image-analysis';

function ComputerVision() {
  const [url, setUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalyzeClick = async () => {
    if (!url) {
      alert('Please enter a URL to analyze.');
      return;
    }
    console.log(url);
    setIsProcessing(true);
    try {

        console.log(url);
      const result = await analyzeImage(url);
      setAnalysisResult(result);
    } catch (error) {
      console.error('Failed to analyze image:', error);
      alert('Failed to analyze the image.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <h1>Computer Vision</h1>
      <p>Insert URL or type Prompt:</p>
      <input 
        type="text" 
        placeholder='Enter URL to analyze or textual prompt to generate an image'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <br /><br />
      <button onClick={handleAnalyzeClick} disabled={isProcessing}>
        {isProcessing ? 'Analyzing...' : 'Analyze'}
      </button>
      <button>Generate</button>
      <hr />
      <DisplayResults results={analysisResult} imageUrl={url} />
      {/* {analysisResult && <pre>{JSON.stringify(analysisResult, null, 2)}</pre>} */}
    </div>
  );
}

export default ComputerVision;
