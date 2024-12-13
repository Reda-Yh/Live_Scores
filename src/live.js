import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assure-toi d'avoir installé Bootstrap
const LiveScoreWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.scorebat.com/embed/embed.js?v=arrv';
    script.async = true;
    script.id = 'scorebat-jssdk';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="card shadow-lg fs-2 fw-bold" style={{ 
            backgroundColor: '#1E1E1E',
            border: '1px solid #333',
            borderRadius: '15px'
          }}>
            <div className="card-header bg-dark text-white" style={{
              borderBottom: '2px solid #333',
              borderRadius: '15px 15px 0 0'
            }}>
              Live Scores
            </div>
            <div className="card-body p-0">
              <iframe
                src="https://www.scorebat.com/embed/livescore/"
                frameBorder="0"
                width="600"
                height="760"
                allowFullScreen
                allow="autoplay; fullscreen"
                style={{ 
                  width: "100%", 
                  height: "760px", 
                  overflow: "hidden", 
                  display: "block",
                  borderRadius: '0 0 15px 15px'
                }}
                className="_scorebatEmbeddedPlayer_"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LiveScoreWidget;