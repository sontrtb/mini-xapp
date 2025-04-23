import { useState } from 'react';
import { XCheckbox } from 'x-app-ui';

export default function XCheckBoxDemo() {
    const [activeTab, setActiveTab] = useState('preview');

    return (
        <div className="demo-section">
            <h2>XCheckBox</h2>
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
                        <XCheckbox value label="Mặc định" />
                        <XCheckbox value={false} label="Mặc định" />
                        <XCheckbox disabled label="Disabled" />
                        <XCheckbox disabled value label="Disabled" />
                    </div>
                </div>
            </div>

            <div className={`tab-content ${activeTab === 'code' ? 'active' : ''}`}>
                <div className="code-block">
                    <code>{`import { XButton } from '../components/XButton';

// Các biến thể
<XButton variant="primary">Primary</XButton>
<XButton variant="secondary">Secondary</XButton>
<XButton variant="danger">Danger</XButton>
<XButton variant="outline">Outline</XButton>
<XButton variant="ghost">Ghost</XButton>

// Các kích thước
<XButton variant="primary" size="small">Small</XButton>
<XButton variant="primary" size="medium">Medium</XButton>
<XButton variant="primary" size="large">Large</XButton>

// Trạng thái
<XButton variant="primary">Bình thường</XButton>
<XButton variant="primary" disabled>Vô hiệu hóa</XButton>
<XButton variant="primary">
  <span style={{ marginRight: '0.5rem' }}>↻</span>
  Đang tải
</XButton>`}</code>
                </div>
            </div>
        </div>
    );
}
