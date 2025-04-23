import { useState } from 'react';
import { XButton } from 'x-app-ui';

export default function XButtonDemo() {
    const [activeTab, setActiveTab] = useState('preview');

    return (
        <div className="demo-section">
            <h2>XButtons</h2>
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
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                        <XButton variant="highlight">Highlight</XButton>
                        <XButton variant="neutral">Neutral</XButton>
                        <XButton variant="danger">Danger</XButton>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                        <XButton variant="highlight" level="secondary">Highlight</XButton>
                        <XButton variant="neutral" level="secondary">Neutral</XButton>
                        <XButton variant="danger" level="secondary">Danger</XButton>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem', marginTop: '0.5rem' }}>
                        <XButton variant="highlight" level="tertiary">Highlight</XButton>
                        <XButton variant="neutral" level="tertiary">Neutral</XButton>
                        <XButton variant="danger" level="tertiary">Danger</XButton>
                    </div>

                    <h3>Các kích thước</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem', marginTop: '0.5rem' }}>
                        <XButton size="small">Small</XButton>
                        <XButton size="medium">Medium</XButton>
                        <XButton size="large">Large</XButton>
                    </div>

                    <h3>Trạng thái</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                        <XButton state="default">Bình thường</XButton>
                        <XButton state="disabled">Vô hiệu hóa</XButton>
                        <XButton state="loading">Đang tải</XButton>
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
