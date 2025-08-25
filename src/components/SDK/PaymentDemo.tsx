import { useState } from "react";
import { paymentRequest, FlutterMessageResponse } from "x-app-sdk";
import { XButton, XInput } from "x-app-ui";

interface PaymentDemoProps {
    onResult: (data: FlutterMessageResponse) => void;
}

export default function PaymentDemo({ onResult }: PaymentDemoProps) {
    const [activeTab, setActiveTab] = useState('preview');
    const [isLoading, setIsLoading] = useState(false);
    const [partnerOrderId, setPartnerOrderId] = useState("testMiniApp");
    const [totalAmount, setTotalAmount] = useState("100000");

    const onPaymentRequest = async () => {
        setIsLoading(true)
        const res = await paymentRequest({
            partnerOrderId,
            totalAmount: parseInt(totalAmount),
        })
        onResult(res as FlutterMessageResponse)
        setIsLoading(false)
    }

    return (
        <section className="xa:mb-6 xa:bg-white xa:rounded-lg xa:shadow-sm xa:p-4">
            <h2 className='xa:text-xl xa:font-bold xa:mb-2 xa:text-primary'>Thanh toán</h2>
            
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
                    <XInput
                        label="Partner Order ID"
                        value={partnerOrderId}
                        onChange={(e) => setPartnerOrderId(e.target.value)}
                        placeholder="Nhập Partner Order ID"
                        className="xa:mb-2"
                    />
                    <XInput
                        label="Số tiền"
                        value={totalAmount}
                        onChange={(e) => setTotalAmount(e.target.value)}
                        placeholder="Nhập số tiền"
                        type="number"
                        className="xa:mb-2"
                    />
                    <XButton
                        state={isLoading ? "loading" : "default"}
                        onClick={onPaymentRequest}
                        className="xa:w-full"
                    >
                        Thanh Toán
                    </XButton>
                </div>
            </div>

            <div className={`tab-content ${activeTab === 'code' ? 'active' : ''}`}>
                <div className="code-block">
                    <pre><code>{`import { paymentRequest } from "x-app-sdk";

const [isLoading, setIsLoading] = useState(false);
const [partnerOrderId, setPartnerOrderId] = useState("testMiniApp");
const [totalAmount, setTotalAmount] = useState("100000");

const onPaymentRequest = async () => {
  setIsLoading(true);
  const res = await paymentRequest({
    partnerOrderId,
    totalAmount: parseInt(totalAmount),
  });
  console.log(res);
  setIsLoading(false);
}

<XInput
  label="Partner Order ID"
  value={partnerOrderId}
  onChange={(e) => setPartnerOrderId(e.target.value)}
  placeholder="Nhập Partner Order ID"
/>
<XInput
  label="Số tiền"
  value={totalAmount}
  onChange={(e) => setTotalAmount(e.target.value)}
  placeholder="Nhập số tiền"
  type="number"
/>
<XButton
  state={isLoading ? "loading" : "default"}
  onClick={onPaymentRequest}
  className="xa:w-full"
>
  Thanh Toán
</XButton>`}</code></pre>
                </div>
            </div>
        </section>
    );
}
