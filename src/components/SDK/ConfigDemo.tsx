import { CircleCheck } from "lucide-react";
import { useState } from "react";
import { configUIApp, IViewUiConfig, FlutterMessageResponse, EHeaderMode, EIconNavigationPosision } from "x-app-sdk";
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
    const [mode, setMode] = useState<EHeaderMode | undefined>();
    const [iconNavigationColor, setIconNavigationColor] = useState("#000000");
    const [navigationColor, setNavigationColor] = useState("#ffffff");
    const [iconNavigationPosision, setIconNavigationPosision] = useState<EIconNavigationPosision | undefined>();

    const onConfigUIApp = async () => {
        const config: IViewUiConfig = {
            headerColor,
            headerTitle,
            headerTextColor,
            headerIcon,
            headerSubTitle,
            mode: mode,
            iconNavigationColor,
            navigationColor,
            iconNavigationPosision: iconNavigationPosision
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
                                placeholder="URL icon"
                                className="xa:mb-2"
                            />
                            <XInput
                                label="Màu icon navigation"
                                value={iconNavigationColor}
                                onChange={(e) => setIconNavigationColor(e.target.value)}
                                placeholder="#000000"
                                className="xa:mb-2"
                            />
                            <XInput
                                label="Màu navigation"
                                value={navigationColor}
                                onChange={(e) => setNavigationColor(e.target.value)}
                                placeholder="#ffffff"
                                className="xa:mb-2"
                            />
                            <div className="xa:mb-2">
                                <label className="xa:block xa:text-sm xa:font-medium xa:text-gray-700 xa:mb-1">
                                    Header Mode
                                </label>
                                <div className="xa:space-y-2">
                                    <label className="xa:flex xa:items-center xa:space-x-2">
                                        <input
                                            type="radio"
                                            name="mode"
                                            value="MINI"
                                            checked={mode === EHeaderMode.MINI}
                                            onChange={() => setMode(EHeaderMode.MINI)}
                                            className="xa:form-radio"
                                        />
                                        <span>Mini</span>
                                    </label>
                                    <label className="xa:flex xa:items-center xa:space-x-2">
                                        <input
                                            type="radio"
                                            name="mode"
                                            value="FULL"
                                            checked={mode === EHeaderMode.FULL}
                                            onChange={() => setMode(EHeaderMode.FULL)}
                                            className="xa:form-radio"
                                        />
                                        <span>Full</span>
                                    </label>
                                </div>
                            </div>
                            <div className="xa:mb-4">
                                <label className="xa:block xa:text-sm xa:font-medium xa:text-gray-700 xa:mb-1">
                                    Icon Navigation Position
                                </label>
                                <div className="xa:space-y-2">
                                    <label className="xa:flex xa:items-center xa:space-x-2">
                                        <input
                                            type="radio"
                                            name="iconNavigationPosition"
                                            value="LEFT"
                                            checked={iconNavigationPosision === EIconNavigationPosision.LEFT}
                                            onChange={() => setIconNavigationPosision(EIconNavigationPosision.LEFT)}
                                            className="xa:form-radio"
                                        />
                                        <span>Left</span>
                                    </label>
                                    <label className="xa:flex xa:items-center xa:space-x-2">
                                        <input
                                            type="radio"
                                            name="iconNavigationPosition"
                                            value="RIGHT"
                                            checked={iconNavigationPosision === EIconNavigationPosision.RIGHT}
                                            onChange={() => setIconNavigationPosision(EIconNavigationPosision.RIGHT)}
                                            className="xa:form-radio"
                                        />
                                        <span>Right</span>
                                    </label>
                                </div>
                            </div>
                            <XButton onClick={onConfigUIApp} className="xa:w-full">Config UI</XButton>
                        </div>
                    )
                },
                {
                    key: "code",
                    label: "Code",
                    component: (
                        <div className="code-block">
                            <pre><code>{`import { configUIApp, IViewUiConfig, EHeaderMode, EIconNavigationPosision } from "x-app-sdk";

const [headerColor, setHeaderColor] = useState("#000000");
const [headerTitle, setHeaderTitle] = useState("Test Header");
const [headerTextColor, setHeaderTextColor] = useState("#ffffff");
const [headerIcon, setHeaderIcon] = useState("URL icon");
const [headerSubTitle, setHeaderSubTitle] = useState("Subtitle");
const [mode, setMode] = useState<EHeaderMode | undefined>();
const [iconNavigationColor, setIconNavigationColor] = useState("#000000");
const [navigationColor, setNavigationColor] = useState("#ffffff");
const [iconNavigationPosision, setIconNavigationPosision] = useState<EIconNavigationPosision | undefined>();

const onConfigUIApp = async () => {
  const config: IViewUiConfig = {
    headerColor,
    headerTitle,
    headerTextColor,
    headerIcon,
    headerSubTitle,
    mode,
    iconNavigationColor,
    navigationColor,
    iconNavigationPosision
  }
  const res = await configUIApp(config);
  console.log(res);
}

// Header Mode Radio Group
<div>
  <label>Header Mode</label>
  <label>
    <input
      type="radio"
      name="mode"
      value="MINI"
      checked={mode === EHeaderMode.MINI}
      onChange={() => setMode(EHeaderMode.MINI)}
    />
    Mini
  </label>
  <label>
    <input
      type="radio"
      name="mode"
      value="FULL"
      checked={mode === EHeaderMode.FULL}
      onChange={() => setMode(EHeaderMode.FULL)}
    />
    Full
  </label>
</div>

// Icon Navigation Position Radio Group
<div>
  <label>Icon Navigation Position</label>
  <label>
    <input
      type="radio"
      name="iconNavigationPosition"
      value="LEFT"
      checked={iconNavigationPosision === EIconNavigationPosision.LEFT}
      onChange={() => setIconNavigationPosision(EIconNavigationPosision.LEFT)}
    />
    Left
  </label>
  <label>
    <input
      type="radio"
      name="iconNavigationPosition"
      value="RIGHT"
      checked={iconNavigationPosision === EIconNavigationPosision.RIGHT}
      onChange={() => setIconNavigationPosision(EIconNavigationPosision.RIGHT)}
    />
    Right
  </label>
</div>`}</code></pre>
                        </div>
                    )
                }
            ]} />
        </section>
    );
}
