import { useState } from 'react';
import { XSwitch } from 'x-app-ui';

export default function SwitchDemo() {
    const [activeTab, setActiveTab] = useState('preview');

    return (
        <div className="demo-section">
            <h2>SwitchDemo</h2>
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
                    <h3>Các biến thể của XButton</h3>
                    <div style={{ display: 'flex', flexDirection: "column", gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                        <XSwitch label="Mặc định" />
                        <XSwitch defaultChecked label="Mặc định" />
                        <XSwitch disabled label="Disabled" />
                        <XSwitch disabled defaultChecked label="Disabled" />
                    </div>
                </div>
            </div>

            <div className={`tab-content ${activeTab === 'code' ? 'active' : ''}`}>
                <div className="code-block">
                    <pre><code>{`import { XSwitch } from 'x-app-ui';

// Trạng thái switch
<XSwitch label="Mặc định" />
<XSwitch defaultChecked label="Mặc định" />
<XSwitch disabled label="Disabled" />
<XSwitch disabled defaultChecked label="Disabled" />`}</code></pre>
                </div>
            </div>
        </div>
    );
}
