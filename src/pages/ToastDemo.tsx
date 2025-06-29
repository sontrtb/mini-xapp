import { useState } from 'react';
import { useToast, XButton } from 'x-app-ui';

export default function ToastDemo() {
    const { showToast } = useToast()

    const [activeTab, setActiveTab] = useState('preview');

    return (
        <div className="demo-section">
            <h2>ToastDemo</h2>
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
                    <h3 className='xa:font-bold'>Nhấn nút để bật loading</h3>
                    <div>
                        <XButton onClick={() => {
                            showToast("Thôngbáothànhcông!ThôngbáothànhThôngbáothànhThôngbáothànhThôngbáothành", { status: "success" });
                        }}>Thành công</XButton>
                        <br />
                        <br />
                        <XButton onClick={() => {
                            showToast("Thông báo thất bại!", { status: "error" });
                        }}>Thất bại</XButton>
                        <br />
                        <br />
                        <XButton onClick={() => {
                            showToast("Thông báo !");
                        }}>Thông tin</XButton>
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
