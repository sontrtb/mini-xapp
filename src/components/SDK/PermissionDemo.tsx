import { CircleCheck } from "lucide-react";
import { premissionsRequest, ETypeRequest, FlutterMessageResponse } from "x-app-sdk";
import { XButton, XTabBar } from "x-app-ui";

interface PermissionDemoProps {
    onResult: (data: FlutterMessageResponse) => void;
}

export default function PermissionDemo({ onResult }: PermissionDemoProps) {
    const requestPermisstion = async () => {
        const res = await premissionsRequest(ETypeRequest.RequestPickerFile)
        onResult(res as FlutterMessageResponse)
    }

    return (
        <section className="xa:mb-6 xa:bg-white xa:rounded-lg xa:shadow-sm xa:p-4">
            <h2 className='xa:text-xl xa:font-bold xa:mb-2 xa:text-primary'>Phân quyền</h2>
            
            <XTabBar tabs={[
                {
                    key: "preview",
                    label: "Xem trước",
                    component: (
                        <div className="demo-container">
                            <div className="xa:flex xa:items-center xa:gap-2 xa:mb-2">
                                <CircleCheck size={18} color="green" />
                                <p>Quyền từng sự kiện</p>
                            </div>
                            <XButton onClick={requestPermisstion} className="xa:w-full">Kiểm tra quyền</XButton>
                        </div>
                    )
                },
                {
                    key: "code",
                    label: "Code",
                    component: (
                        <div className="code-block">
                            <pre><code>{`import { premissionsRequest, ETypeRequest } from "x-app-sdk";

const requestPermisstion = async () => {
  const res = await premissionsRequest(ETypeRequest.RequestPickerFile);
  console.log(res);
}

<XButton onClick={requestPermisstion} className="xa:w-full">
  Kiểm tra quyền
</XButton>`}</code></pre>
                        </div>
                    )
                }
            ]} />
        </section>
    );
}
