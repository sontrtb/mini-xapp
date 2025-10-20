import { CircleCheck } from "lucide-react";
import { getInfo, EKeyInfor, FlutterMessageResponse, getToken } from "x-app-sdk";
import { XButton, XTabBar } from "x-app-ui";

interface UserDemoProps {
    onResult: (data: FlutterMessageResponse) => void;
}

export default function UserDemo({ onResult }: UserDemoProps) {
    const getUserInfor = async () => {
        const res = await getInfo(EKeyInfor.USER);
        console.log("USER:", res)
        onResult(res)
    }

    const getUserToken = async () => {
        const res = await getToken();
        console.log("token:", res)
        onResult(res)
    }

    return (
        <section className="xa:mb-6 xa:bg-white xa:rounded-lg xa:shadow-sm xa:p-4">
            <h2 className='xa:text-xl xa:font-bold xa:mb-2 xa:text-primary'>User</h2>
            
            <XTabBar tabs={[
                {
                    key: "preview",
                    label: "Xem trước",
                    component: (
                        <div className="demo-container">
                            <div className="xa:flex xa:items-center xa:gap-2 xa:mb-2">
                                <CircleCheck size={18} color="green" />
                                <p>Lấy thông tin user - Đã có cơ chế cache</p>
                            </div>
                            <XButton onClick={getUserInfor} className="xa:w-full">Thông tin user</XButton>

                            <div className="xa:flex xa:items-center xa:gap-2 xa:mb-2">
                                <CircleCheck size={18} color="green" />
                                <p>Lấy token</p>
                            </div>
                            <XButton onClick={getUserToken} className="xa:w-full">Token</XButton>
                        </div>
                    )
                },
                {
                    key: "code",
                    label: "Code",
                    component: (
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
                    )
                }
            ]} />
        </section>
    );
}
