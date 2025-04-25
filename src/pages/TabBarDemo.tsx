import { useState } from 'react';
import { XTabBar } from 'x-app-ui';

export default function TabBarDemo() {
    const [activeTab, setActiveTab] = useState('preview');

    return (
        <div className="demo-section">
            <h2>TabBarDemo</h2>
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
                    <XTabBar tabs={[
                        {
                            key: "Home",
                            label: "Trang chủ",
                            component: <div className='xa:p-4'>Trang chủ</div>
                        },
                        {
                            key: "news",
                            label: "Tin tức",
                            component: <div className='xa:p-4'>Tin tức</div>
                        },
                        {
                            key: "manger",
                            label: "Quản lý",
                            component: <div className='xa:p-4'>Quản lý</div>
                        },
                        {
                            key: "profile",
                            label: "Trang cá nhân",
                            component: <div className='xa:p-4'>Trang cá nhân</div>
                        }
                    ]} />
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
