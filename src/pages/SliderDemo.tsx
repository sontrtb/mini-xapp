import { useState } from 'react';
import { XSlider } from 'x-app-ui';

export default function SliderDemo() {
    const [activeTab, setActiveTab] = useState('preview');

    return (
        <div className="demo-section">
            <h2>SliderDemo</h2>
            <p>Các nút tương tác với nhiều kiểu và trạng thái khác nhau</p>

            <div className="tabs">
                <div
                    className={`tab ${activeTab === 'preview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('preview')}
                >
                    Xem trước
                </div>
                <div
                    className={`tab ${activeTab === 'code' ? 'active' : ''}`}
                    onClick={() => setActiveTab('code')}
                >
                    Code
                </div>
            </div>

            <div className={`tab-content ${activeTab === 'preview' ? 'active' : ''}`}>
                <div className="demo-container">
                    <h3>Singer</h3>
                    <div style={{ display: 'flex', flexDirection: "column", gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                        <XSlider />
                        <XSlider defaultValue={100} min={0} max={300} disabled />
                    </div>

                    <h3>Range</h3>
                    <div style={{ display: 'flex', flexDirection: "column", gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                        <XSlider type="range"/>
                        <XSlider type="range" defaultValue={[100, 150]} min={0} max={300} disabled />
                    </div>
                </div>
            </div>

            <div className={`tab-content ${activeTab === 'code' ? 'active' : ''}`}>
                <div className="code-block">
                    <pre><code>{`import { XSlider } from 'x-app-ui';

// Single slider
<XSlider />
<XSlider defaultValue={100} min={0} max={300} disabled />

// Range slider
<XSlider type="range"/>
<XSlider type="range" defaultValue={[100, 150]} min={0} max={300} disabled />`}</code></pre>
                </div>
            </div>
        </div>
    );
}
