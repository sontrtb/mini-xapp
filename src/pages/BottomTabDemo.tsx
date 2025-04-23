import { Bell, CircleUser, House } from 'lucide-react';
import { useState } from 'react';
import { XBottomTab } from 'x-app-ui';

export default function BottomTabDemo() {
    const [activeTab, setActiveTab] = useState('preview');

    const bottomTabs = [
        {
            component: <div>Trang chủ</div>,
            title: "Trang chủ",
            icon: (color: string) => <House color={color} />
        },
        {
            component: <p>Thông báo</p>,
            title: "Thông báo",
            icon: (color: string) => <Bell color={color} />,
            numberNotifications: 5
        },
        {
            component: <p>Tài khoản</p>,
            title: "Tài khoản",
            icon: (color: string) => <CircleUser color={color} />
        }
    ]

    return (
        <div className="demo-section">
            <h2>BottomTabDemo</h2>
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
                <XBottomTab tabs={bottomTabs} />
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
