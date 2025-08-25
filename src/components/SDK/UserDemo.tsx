import { CircleCheck } from "lucide-react";
import { useState } from "react";
import { getInfo, EKeyInfor, FlutterMessageResponse } from "x-app-sdk";
import { XButton } from "x-app-ui";

interface UserDemoProps {
    onResult: (data: FlutterMessageResponse) => void;
}

export default function UserDemo({ onResult }: UserDemoProps) {
    const [activeTab, setActiveTab] = useState('preview');

    const getUserInfor = async () => {
        const res = await getInfo(EKeyInfor.USER);
        onResult(res)
    }

    return (
        <section className="xa:mb-6 xa:bg-white xa:rounded-lg xa:shadow-sm xa:p-4">
            <h2 className='xa:text-xl xa:font-bold xa:mb-2 xa:text-primary'>User</h2>
            
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
                        <p>Lấy thông tin user - Đã có cơ chế cache</p>
                    </div>
                    <XButton onClick={getUserInfor} className="xa:w-full">Thông tin user</XButton>
                </div>
            </div>

            <div className={`tab-content ${activeTab === 'code' ? 'active' : ''}`}>
                <div className="code-block">
                    <pre><code>{`import { getInfo, EKeyInfor } from "x-app-sdk";

const getUserInfor = async () => {
  const res = await getInfo(EKeyInfor.USER);
  console.log(res);
}

<XButton onClick={getUserInfor} className="xa:w-full">
  Thông tin user
</XButton>`}</code></pre>
                </div>
            </div>
        </section>
    );
}
