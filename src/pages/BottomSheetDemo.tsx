import { useState } from 'react';
import { XBottomSheet, XButton } from 'x-app-ui';

export default function BottomSheetDemoDemo() {
    const [activeTab, setActiveTab] = useState('preview');

    const [isOpenBottomSheet, setOpenBottomSheet] = useState({
        isOpen: false,
        isTitle: false
    });

    return (
        <div className="demo-section">
            <h2>XBottomSheet Demo</h2>
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
                    <h3>Buttom Sheet mặc định</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                        <XButton
                            onClick={() => setOpenBottomSheet({
                                isOpen: true,
                                isTitle: false
                            })}
                        >
                            Open sheet
                        </XButton>
                    </div>

                    <h3>Buttom Sheet với tiêu đề</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                        <XButton
                            onClick={() => setOpenBottomSheet({
                                isOpen: true,
                                isTitle: true
                            })}
                        >
                            Open sheet with title
                        </XButton>
                    </div>
                </div>
            </div>

            <XBottomSheet
                title={isOpenBottomSheet.isTitle ? "Tiêu đề Bottom Sheet" : undefined}
                isOpen={isOpenBottomSheet.isOpen}
                onClose={() => setOpenBottomSheet(pre => ({ ...pre, isOpen: false }))}
            >
                <div className="xa:h-[300px] xa:px-4">Nội dung Bottom Sheet...</div>
            </XBottomSheet>

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
