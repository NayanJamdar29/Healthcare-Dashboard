import React from 'react';
import bodyImg from './Anatomay.png';
import { healthStatus } from '../data/healthStatus';
import './AnatomySection.css';

const AnatomySection = () => {
    return (
        <div className="anatomy-container">
            {/* Left - Image with floating labels */}
            <div className="anatomy-image-container">
                <div style={{ textAlign: 'left' }}>
                    <h2 style={{ marginBottom: '10px', color: '#222' }}>Dashboard</h2>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '260px' }}>
                        <img
                            src={bodyImg}
                            alt="Human Anatomy"
                            style={{ width: '100%', borderRadius: '8px', height: '400px' }}
                        />

                        {/* Floating Labels */}
                        <div style={{
                            position: 'absolute',
                            top: '27%',
                            right: '-10px',
                            backgroundColor: '#3b45c4',
                            color: '#fff',
                            padding: '6px 12px',
                            borderRadius: '20px',
                            fontSize: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            whiteSpace: 'nowrap'
                        }}>
                            ❤️ Healthy Heart
                        </div>

                        <div style={{
                            position: 'absolute',
                            bottom: '15%',
                            left: '-10px',
                            backgroundColor: '#00c4cc',
                            color: '#fff',
                            padding: '6px 12px',
                            borderRadius: '20px',
                            fontSize: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            whiteSpace: 'nowrap'
                        }}>
                            🦿 Healthy Leg
                        </div>
                    </div>
                </div>
            </div>

            {/* Right - Status Cards */}
            <div className="anatomy-status-cards">
                {healthStatus.map(({ icon, label, date, progress, color }, index) => (
                    <div key={index} className="anatomy-card">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <img src={icon} alt={label} style={{ height: '30px', width: '30px', objectFit: 'contain' }} />
                            <div>
                                <h4 style={{ margin: 0 }}>{label}</h4>
                                <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>{date}</p>
                            </div>
                        </div>
                        <div
                            style={{
                                height: '8px',
                                width: '100%',
                                background: '#ddd',
                                borderRadius: '4px',
                                overflow: 'hidden',
                                marginTop: '8px'
                            }}
                        >
                            <div style={{ width: `${progress}%`, height: '100%', backgroundColor: color }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnatomySection;
