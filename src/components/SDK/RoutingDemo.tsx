import { CircleCheck } from "lucide-react";
import { useState } from "react";
import { closeApp } from "x-app-sdk";
import { XButton, XInput } from "x-app-ui";

export default function RoutingDemo() {
    const [activeTab, setActiveTab] = useState('preview');
    const [closeAppData, setCloseAppData] = useState("son fe dev");

    const onCloseApp = async () => {
        closeApp({ data: closeAppData })
    }

    return (
        <section className="xa:mb-6 xa:bg-white xa:rounded-lg xa:shadow-sm xa:p-4">
            <h2 className='xa:text-xl xa:font-bold xa:mb-2 xa:text-primary'>Routing</h2>
            
            <div className="tabs xa:mb-4">
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
                    <div className="xa:flex xa:items-center xa:gap-2 xa:mb-2">
                        <CircleCheck size={18} color="green" />
                        <p>Đóng Mini App <br /> <span className="xa:text-xs xa:text-gray-400">Có thể truyền data vào để xử lý khi đóng app</span></p>
                    </div>
                    <XInput
                        label="Dữ liệu khi đóng app"
                        value={closeAppData}
                        onChange={(e) => setCloseAppData(e.target.value)}
                        placeholder="Nhập dữ liệu"
                        className="xa:mb-2"
                    />
                    <XButton onClick={onCloseApp} className="xa:w-full">Đóng App</XButton>
                </div>
            </div>

            <div className={`tab-content ${activeTab === 'code' ? 'active' : ''}`}>
                <div className="code-block">
                    <pre><code>{`import { closeApp } from "x-app-sdk";

const [closeAppData, setCloseAppData] = useState("data example");

const onCloseApp = async () => {
  closeApp({ data: closeAppData });
}

<XInput
  label="Dữ liệu khi đóng app"
  value={closeAppData}
  onChange={(e) => setCloseAppData(e.target.value)}
  placeholder="Nhập dữ liệu"
  className="xa:mb-2"
/>
<XButton onClick={onCloseApp} className="xa:w-full">
  Đóng App
</XButton>`}</code></pre>
                </div>
            </div>
        </section>
    );
}
