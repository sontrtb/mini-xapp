import { CircleCheck } from "lucide-react";
import { useState } from "react";
import { configUIApp, IViewUiConfig, FlutterMessageResponse } from "x-app-sdk";
import { XButton, XInput, XTabBar } from "x-app-ui";

interface ConfigDemoProps {
    onResult: (data: FlutterMessageResponse) => void;
}

export default function ConfigDemo({ onResult }: ConfigDemoProps) {
    const [headerColor, setHeaderColor] = useState("#000000");
    const [headerTitle, setHeaderTitle] = useState("Tiêu đề mới");
    const [headerTextColor, setHeaderTextColor] = useState("#ffffff");
    const [headerIcon, setHeaderIcon] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png")
    const [headerSubTitle, setHeaderSubTitle] = useState("Mô tả nọi dung abc")

    const onConfigUIApp = async () => {
        const config: IViewUiConfig = {
            headerColor,
            headerTitle,
            headerTextColor,
            headerIcon,
            headerSubTitle
        }
        const res = await configUIApp(config)
        onResult(res)
    }

    return (
        <section className="xa:mb-6 xa:bg-white xa:rounded-lg xa:shadow-sm xa:p-4">
            <h2 className='xa:text-xl xa:font-bold xa:mb-2 xa:text-primary'>Config</h2>
            
            <XTabBar tabs={[
                {
                    key: "preview",
                    label: "Xem trước",
                    component: (
                        <div className="demo-container">
                            <div className="xa:flex xa:items-center xa:gap-2 xa:mb-2">
                                <CircleCheck size={18} color="green" />
                                <p>Chỉnh sửa header mini app <br /> <span className="xa:text-xs xa:text-gray-400">Thay đổi màu nền header, màu chữ header, chữ trên header</span></p>
                            </div>
                            <XInput
                                label="Màu nền header"
                                value={headerColor}
                                onChange={(e) => setHeaderColor(e.target.value)}
                                placeholder="#000000"
                                className="xa:mb-2"
                            />
                            <XInput
                                label="Tiêu đề header"
                                value={headerTitle}
                                onChange={(e) => setHeaderTitle(e.target.value)}
                                placeholder="Nhập tiêu đề"
                                className="xa:mb-2"
                            />
                            <XInput
                                label="Màu chữ header"
                                value={headerTextColor}
                                onChange={(e) => setHeaderTextColor(e.target.value)}
                                placeholder="#ffffff"
                                className="xa:mb-2"
                            />
                            <XInput
                                label="Subtitle"
                                value={headerSubTitle}
                                onChange={(e) => setHeaderSubTitle(e.target.value)}
                                placeholder=""
                                className="xa:mb-2"
                            />
                            <XInput
                                label="Icon header"
                                value={headerIcon}
                                onChange={(e) => setHeaderIcon(e.target.value)}
                                placeholder="#ffffff"
                                className="xa:mb-2"
                            />
                            <XButton onClick={onConfigUIApp} className="xa:w-full">Config UI</XButton>
                        </div>
                    )
                },
                {
                    key: "code",
                    label: "Code",
                    component: (
                        <div className="code-block">
                            <pre><code>{`import { configUIApp, IViewUiConfig } from "x-app-sdk";

const [headerColor, setHeaderColor] = useState("#000000");
const [headerTitle, setHeaderTitle] = useState("Test Header");
const [headerTextColor, setHeaderTextColor] = useState("#ffffff");

const onConfigUIApp = async () => {
  const config: IViewUiConfig = {
    headerColor,
    headerTitle,
    headerTextColor,
  }
  const res = await configUIApp(config);
  console.log(res);
}

<XInput
  label="Màu nền header"
  value={headerColor}
  onChange={(e) => setHeaderColor(e.target.value)}
  placeholder="#000000"
/>
<XInput
  label="Tiêu đề header"
  value={headerTitle}
  onChange={(e) => setHeaderTitle(e.target.value)}
  placeholder="Nhập tiêu đề"
/>
<XInput
  label="Màu chữ header"
  value={headerTextColor}
  onChange={(e) => setHeaderTextColor(e.target.value)}
  placeholder="#ffffff"
/>
<XButton onClick={onConfigUIApp} className="xa:w-full">
  Config UI
</XButton>`}</code></pre>
                        </div>
                    )
                }
            ]} />
        </section>
    );
}
