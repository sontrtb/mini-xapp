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
                    <pre><code>{`import { XTabBar } from 'x-app-ui';

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
]} />`}</code></pre>
                </div>
            </div>
        </div>
    );
}
