import { CircleCheck } from "lucide-react";
import { useState } from "react";
import { vibrate, call, sms, FlutterMessageResponse } from "x-app-sdk";
import { XButton, XInput } from "x-app-ui";

interface DeviceDemoProps {
    onResult: (data: FlutterMessageResponse) => void;
}

export default function DeviceDemo({ onResult }: DeviceDemoProps) {
    const [activeTab, setActiveTab] = useState('preview');
    const [phoneNumber, setPhoneNumber] = useState("0355677825");
    const [smsPhoneNumber, setSmsPhoneNumber] = useState("0355677825");

    const onVibrate = async () => {
        const res = await vibrate()
        onResult(res as FlutterMessageResponse)
    }

    const onCall = async () => {
        const res = await call(phoneNumber);
        onResult(res as FlutterMessageResponse)
    }

    const onSms = async () => {
        const res = await sms(smsPhoneNumber);
        onResult(res as FlutterMessageResponse)
    }

    return (
        <section className="xa:mb-6 xa:bg-white xa:rounded-lg xa:shadow-sm xa:p-4">
            <h2 className='xa:text-xl xa:font-bold xa:mb-2 xa:text-primary'>Device</h2>
            
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
                        <p>Rung</p>
                    </div>
                    <XButton onClick={onVibrate} className="xa:w-full xa:mb-4">Rung</XButton>
                    
                    <div className="xa:flex xa:items-center xa:gap-2 xa:mb-2">
                        <CircleCheck size={18} color="green" />
                        <p>Mở ứng dụng gọi điện thoại của thiết bị</p>
                    </div>
                    <XInput
                        label="Số điện thoại"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Nhập số điện thoại"
                        className="xa:mb-2"
                    />
                    <XButton onClick={onCall} className="xa:w-full xa:mb-4">Gọi điện</XButton>
                    
                    <div className="xa:flex xa:items-center xa:gap-2 xa:mb-2">
                        <CircleCheck size={18} color="green" />
                        <p>Mở ứng dụng tin nhắn của thiết bị</p>
                    </div>
                    <XInput
                        label="Số điện thoại"
                        value={smsPhoneNumber}
                        onChange={(e) => setSmsPhoneNumber(e.target.value)}
                        placeholder="Nhập số điện thoại"
                        className="xa:mb-2"
                    />
                    <XButton onClick={onSms} className="xa:w-full">Nhắn tin</XButton>
                </div>
            </div>

            <div className={`tab-content ${activeTab === 'code' ? 'active' : ''}`}>
                <div className="code-block">
                    <pre><code>{`import { vibrate, call, sms } from "x-app-sdk";

const [phoneNumber, setPhoneNumber] = useState("0355677825");
const [smsPhoneNumber, setSmsPhoneNumber] = useState("0355677825");

// Rung thiết bị
const onVibrate = async () => {
  const res = await vibrate();
  console.log(res);
}

// Gọi điện
const onCall = async () => {
  const res = await call(phoneNumber);
  console.log(res);
}

// Nhắn tin
const onSms = async () => {
  const res = await sms(smsPhoneNumber);
  console.log(res);
}

<XButton onClick={onVibrate} className="xa:w-full">Rung</XButton>

<XInput
  label="Số điện thoại"
  value={phoneNumber}
  onChange={(e) => setPhoneNumber(e.target.value)}
  placeholder="Nhập số điện thoại"
/>
<XButton onClick={onCall} className="xa:w-full">Gọi điện</XButton>

<XButton onClick={onSms} className="xa:w-full">Nhắn tin</XButton>`}</code></pre>
                </div>
            </div>
        </section>
    );
}
