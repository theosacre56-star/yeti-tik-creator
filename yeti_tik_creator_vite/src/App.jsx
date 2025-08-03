import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const generateVideo = () => {
    setLoading(true);
    setUploaded(false);
    setVideoUrl(null);
    setTimeout(() => {
      setVideoUrl("/sample_yeti_video.mp4");
      setLoading(false);
      setUploaded(true);
    }, 3000);
  };

  const publishToTikTok = () => {
    alert("Connexion TikTok requise. Tu recevras les instructions à l'étape suivante.");
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', color: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <h1 style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>Yeti Tik Creator</h1>
      <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.1)', width: '100%', maxWidth: 400 }}>
        <button onClick={generateVideo} disabled={loading} style={{ width: '100%', padding: 10, backgroundColor: '#f0f0f0', borderRadius: 8 }}>
          {loading ? "Création en cours..." : "Créer une vidéo TikTok"}
        </button>
        {uploaded && videoUrl && (
          <video src={videoUrl} controls style={{ width: '100%', marginTop: 16, borderRadius: 8 }} />
        )}
        {uploaded && (
          <button onClick={publishToTikTok} style={{ marginTop: 10, width: '100%', padding: 10, backgroundColor: 'black', color: 'white', borderRadius: 8 }}>
            Publier sur TikTok
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
