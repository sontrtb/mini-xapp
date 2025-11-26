import { useState } from "react";
import { getStore, saveStore, clearStore, FlutterMessageResponse } from "x-app-sdk";
import { XButton, XInput, XTabBar } from "x-app-ui";

interface StoreDemoProps {
    onResult?: (data: FlutterMessageResponse) => void;
}

function StoreDemo({ onResult }: StoreDemoProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState("demo_value");
    const [retrievedData, setRetrievedData] = useState<string>("");
    const [result, setResult] = useState<FlutterMessageResponse | null>(null);

    const handleSaveStore = async () => {
        setIsLoading(true);
        try {
            console.log("sdsdsd")

            saveStore("key", value);
            console.log("saveStore key")

            saveStore("key1", "valuek1");
            console.log("saveStore key1")

            const res = await getStore("key")
            console.log("sdsdsd", res)
            
            setResult(res as FlutterMessageResponse);
            if (onResult) onResult(res as FlutterMessageResponse);
        } catch (error) {
            console.error("Save store error:", error);
        }
        setIsLoading(false);
    };

    const handleGetStore = async () => {
        setIsLoading(true);
        try {
            const res = await getStore("key");
            setResult(res as FlutterMessageResponse);
            if (res.data) {
                setRetrievedData(res.data);
            }
            if (onResult) onResult(res as FlutterMessageResponse);
        } catch (error) {
            console.error("Get store error:", error);
        }
        setIsLoading(false);
    };

    const handleClearStore = async () => {
        setIsLoading(true);
        try {
            const res = await clearStore("key");
            setResult(res as FlutterMessageResponse);
            setRetrievedData("");
            if (onResult) onResult(res as FlutterMessageResponse);
        } catch (error) {
            console.error("Clear store error:", error);
        }
        setIsLoading(false);
    };

    return (
        <div className="xa:py-4">
            <h1 className="xa:text-2xl xa:font-bold xa:mb-6 xa:text-primary">Store Demo</h1>
            
            <section className="xa:mb-6 xa:bg-white xa:rounded-lg xa:shadow-sm xa:p-4">
                <h2 className='xa:text-xl xa:font-bold xa:mb-2 xa:text-primary'>Lưu trữ dữ liệu</h2>
                
                <XTabBar tabs={[
                    {
                        key: "preview",
                        label: "Xem trước",
                        component: (
                            <div className="demo-container">
                                <XInput
                                    label="Value"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    placeholder="Nhập giá trị cần lưu"
                                    className="xa:mb-2"
                                />
                                
                                <div>
                                    <XButton
                                        state={isLoading ? "loading" : "default"}
                                        onClick={handleSaveStore}
                                    >
                                        Lưu dữ liệu
                                    </XButton>
                                    <br />
                                    <br />
                                    <XButton
                                        state={isLoading ? "loading" : "default"}
                                        onClick={handleGetStore}
                                        variant="neutral"
                                    >
                                        Lấy dữ liệu
                                    </XButton>
                                    <br />
                                    <br />
                                    <XButton
                                        state={isLoading ? "loading" : "default"}
                                        onClick={handleClearStore}
                                        variant="danger"
                                    >
                                        Xóa tất cả
                                    </XButton>
                                </div>

                                {retrievedData && (
                                    <div className="xa:p-3 xa:bg-gray-100 xa:rounded-md xa:mb-2">
                                        <h4 className="xa:font-semibold xa:text-sm xa:mb-1">Dữ liệu đã lấy:</h4>
                                        <p className="xa:text-sm">{retrievedData}</p>
                                    </div>
                                )}

                                {result && (
                                    <div className="xa:p-3 xa:bg-gray-100 xa:rounded-md">
                                        <h4 className="xa:font-semibold xa:text-sm xa:mb-1">Kết quả:</h4>
                                        <pre className="xa:text-xs xa:whitespace-pre-wrap">
                                            {JSON.stringify(result, null, 2)}
                                        </pre>
                                    </div>
                                )}
                            </div>
                        )
                    },
                    {
                        key: "code",
                        label: "Code",
                        component: (
                            <div className="code-block">
                                <pre><code>{`import { getStore, saveStore, clearStore } from "x-app-sdk";

const [value, setValue] = useState("demo_value");
const [retrievedData, setRetrievedData] = useState("");

// Lưu dữ liệu
const handleSaveStore = async () => {
  const res = await saveStore(value);
  console.log(res);
};

// Lấy dữ liệu
const handleGetStore = async () => {
  const res = await getStore();
  if (res.data) {
    setRetrievedData(res.data);
  }
};

// Xóa tất cả dữ liệu
const handleClearStore = async () => {
  const res = await clearStore();
  setRetrievedData("");
};

<XInput
  label="Value"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Nhập giá trị cần lưu"
/>

<XButton onClick={handleSaveStore}>
  Lưu dữ liệu
</XButton>
<XButton onClick={handleGetStore}>
  Lấy dữ liệu
</XButton>
<XButton onClick={handleClearStore}>
  Xóa tất cả
</XButton>`}</code></pre>
                            </div>
                        )
                    }
                ]} />
            </section>
        </div>
    );
}

export default StoreDemo