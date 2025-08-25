import { CircleCheck } from "lucide-react";
import { currentLocation, FlutterMessageResponse } from "x-app-sdk";
import { XButton, XTabBar } from "x-app-ui";

interface LocationDemoProps {
    onResult: (data: FlutterMessageResponse) => void;
}

export default function LocationDemo({ onResult }: LocationDemoProps) {
    

    const onGetLocation = async () => {
        const res = await currentLocation()
        onResult(res as FlutterMessageResponse)
    }

    return (
        <section className="xa:mb-6 xa:bg-white xa:rounded-lg xa:shadow-sm xa:p-4">
            <h2 className='xa:text-xl xa:font-bold xa:mb-2 xa:text-primary'>Location</h2>
            
            <XTabBar tabs={[
                {
                    key: "preview",
                    label: "Xem trước",
                    component: (
                        <div className="demo-container">
                            <div className="xa:flex xa:items-center xa:gap-2 xa:mb-2">
                                <CircleCheck size={18} color="green" />
                                <p>Lấy vị trí hiện tại của người dùng</p>
                            </div>
                            <XButton onClick={onGetLocation} className="xa:w-full">Lấy vị trí</XButton>
                        </div>
                    )
                },
                {
                    key: "code",
                    label: "Code",
                    component: (
                        <div className="code-block">
                            <pre><code>{`import { currentLocation } from "x-app-sdk";

const onGetLocation = async () => {
  const res = await currentLocation();
  console.log(res);
}

<XButton onClick={onGetLocation} className="xa:w-full">
  Lấy vị trí
</XButton>`}</code></pre>
                        </div>
                    )
                }
            ]} />
        </section>
    );
}
