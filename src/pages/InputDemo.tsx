import { useState } from 'react';
import { XInput, XTextarea } from 'x-app-ui';

export default function XInputDemo() {
    const [activeTab, setActiveTab] = useState('preview');

    return (
        <div className="demo-section">
            <h2>XInput</h2>
            <p>Các input tương tác với nhiều kiểu và trạng thái khác nhau</p>

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
                    <h3>Loại</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                        <XInput label="Bình thường" placeholder="Placeholder" helperText="Helper Text" />
                        <XInput label="Mật khẩu" placeholder="Placeholder" helperText="Helper Text" type="password" />

                        <XTextarea label="Textarea" placeholder="Placeholder" helperText="Helper Text" />
                    </div>

                    <h3>Trạng thái validation của XInput</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                        <XInput label="Label" placeholder="Placeholder" helperText="Helper Text" />
                        <XInput label="Error" placeholder="Placeholder" helperText="Helper Text" status="error" />
                        <XInput label="Warning" placeholder="Placeholder" helperText="Helper Text Warning" status="warning" />
                        <XInput label="Success" placeholder="Placeholder" helperText="Helper Text Success" status="success" />
                    </div>

                    <h3>Trạng thái</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                        <XInput label="Label" placeholder="Placeholder" helperText="Helper Text" />
                        <XInput disabled label="Disable" placeholder="Placeholder" helperText="Helper Text" />
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
