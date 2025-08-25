import { XButton } from 'x-app-ui';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';

function Start() {
    return (
        <div>
            <section className="demo-section">
                <h2>🚀 Cài đặt thư viện</h2>
                <p>Cài đặt các thư viện cần thiết cho dự án của bạn</p>

                <div className="component-grid">
                    <Card>
                        <CardHeader>
                            <CardTitle>X-App UI</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Thư viện UI components với nhiều thành phần đẹp và dễ sử dụng</p>
                            <div className="code-block">
                                <code>npm install x-app-ui</code>
                            </div>
                            <div className="code-block" style={{ marginTop: '0.5rem' }}>
                                <code>yarn add x-app-ui</code>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>X-App SDK</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>SDK cung cấp các tiện ích và API hỗ trợ phát triển ứng dụng</p>
                            <div className="code-block">
                                <code>npm install x-app-sdk</code>
                            </div>
                            <div className="code-block" style={{ marginTop: '0.5rem' }}>
                                <code>yarn add x-app-sdk</code>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="demo-section">
                <h2>⚡ Bắt đầu nhanh</h2>
                <p>Thiết lập dự án Vite + React với X-App libraries</p>

                <div className="demo-container">
                    <h3>1. Tạo dự án React mới với Vite</h3>
                    <div className="code-block">
                        <code>{`npm create vite@latest `}</code>
                    </div>

                    <h3 style={{ marginTop: '2rem' }}>2. Cài đặt X-App libraries</h3>
                    <div className="code-block">
                        <code>{`# Cài đặt thư viện X-App
npm install x-app-ui x-app-sdk
npm install react-router-dom`}</code>
                    </div>

                    <h3 style={{ marginTop: '2rem' }}>3. Import và sử dụng</h3>
                    <div className="code-block">
                        <code>{`// App.tsx
import { XButton, XInput } from 'x-app-ui';

  return (
    <div className="App">
      <XButton variant="primary">
        Hello X-App!
      </XButton>
      <XInput 
        placeholder="Nhập văn bản..." 
        label="Example Input"
      />
    </div>
  );
}`}</code>
                    </div>
                </div>
            </section>

            <section className="demo-section">
                <h2>⚙️ Cấu hình môi trường</h2>
                <p>Thiết lập môi trường phát triển</p>

                <div className="demo-container">
                    <h3>Cấu trúc file cần thiết</h3>
                    <h2>.env</h2>
                    <div className="code-block">
                        <code>VITE_PRE_PATH = ""</code>
                    </div>
                    <h2>Cấu hình router</h2>
                    <div className="code-block">
                        <code>
                            {
                                `
                                 <Router basename={import.meta.env.VITE_PRE_PATH}>
                                `
                            }
                        </code>
                    </div>
                </div>
            </section>

            <section className="demo-section">
                <h2>🎯 Bước tiếp theo</h2>
                <p>Khám phá các component và tính năng chi tiết</p>

                <div className="component-grid">
                    <Card>
                        <CardHeader>
                            <CardTitle>Xem demo components</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Khám phá tất cả các UI components với ví dụ thực tế</p>

                            <a href="https://github.com/sontrtb/mini-xapp" target="_blank">
                                <XButton style={{ marginTop: '1rem' }}>
                                    Xem Demo
                                </XButton>
                            </a>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Documentation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Đọc tài liệu chi tiết ¸¸¸trên NPM</p>
                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                                <XButton>
                                    <a href="https://www.npmjs.com/package/x-app-ui" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                        X-App UI
                                    </a>
                                </XButton>
                                <XButton>
                                    <a href="https://www.npmjs.com/package/x-app-sdk" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                        X-App SDK
                                    </a>
                                </XButton>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}

export default Start;