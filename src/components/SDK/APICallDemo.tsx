import { CircleCheck, Plus } from "lucide-react";
import { useState } from "react";
import { EStatus, ETypeResponse, FlutterMessageResponse } from "x-app-sdk";
import { XButton, XTabBar, XInput } from "x-app-ui";

interface APICallDemoProps {
    onResult: (data: FlutterMessageResponse) => void;
}

export default function APICallDemo({ onResult }: APICallDemoProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isPostLoading, setIsPostLoading] = useState(false);
    const [userName, setUserName] = useState("");
    const [userImage, setUserImage] = useState("");

    const callApi = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('https://api-xsmb-today.onrender.com/api/v1')
            const result = await response.json()
            onResult({
                status: EStatus.SUCCESS,
                type: ETypeResponse.ResponseCall,
                data: result,
            })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            onResult({
                status: EStatus.ERROR,
                type: ETypeResponse.ResponseCall,
            })
        } finally {
            setIsLoading(false)
        }
    }

    const createUser = async () => {
        if (!userName.trim() || !userImage.trim()) {
            onResult({
                status: EStatus.ERROR,
                type: ETypeResponse.ResponseCall,
                data: { message: "Vui lòng nhập đầy đủ thông tin" }
            })
            return
        }

        setIsPostLoading(true)
        try {
            const response = await fetch('https://68ef738db06cc802829d72fe.mockapi.io/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: userName,
                    image: userImage
                })
            })
            const result = await response.json()
            onResult({
                status: EStatus.SUCCESS,
                type: ETypeResponse.ResponseCall,
                data: result,
            })
            // Reset form after successful creation
            setUserName("")
            setUserImage("")
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            onResult({
                status: EStatus.ERROR,
                type: ETypeResponse.ResponseCall,
                data: { message: "Lỗi khi tạo user" }
            })
        } finally {
            setIsPostLoading(false)
        }
    }

    return (
        <section className="xa:mb-10 xa:bg-white xa:rounded-lg xa:shadow-sm xa:p-4">
            <h2 className='xa:text-xl xa:font-bold xa:mb-2 xa:text-primary'>API Call</h2>
            
            <XTabBar tabs={[
                {
                    key: "get",
                    label: "GET API",
                    component: (
                        <div className="demo-container">
                            <div className="xa:flex xa:items-center xa:gap-2 xa:mb-2">
                                <CircleCheck size={18} color="green" />
                                <p>Gọi API lấy dữ liệu từ server</p>
                            </div>
                            <XButton
                                state={isLoading ? "loading" : "default"}
                                onClick={callApi}
                                className="xa:w-full"
                            >
                                Gọi API GET
                            </XButton>
                        </div>
                    )
                },
                {
                    key: "post",
                    label: "POST API",
                    component: (
                        <div className="demo-container">
                            <div className="xa:flex xa:items-center xa:gap-2 xa:mb-4">
                                <Plus size={18} color="blue" />
                                <p>Tạo user mới với API POST</p>
                            </div>
                            
                            <div className="xa:space-y-3 xa:mb-4">
                                <XInput
                                    placeholder="Nhập tên user"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    className="xa:w-full"
                                />
                                <XInput
                                    placeholder="Nhập URL hình ảnh"
                                    value={userImage}
                                    onChange={(e) => setUserImage(e.target.value)}
                                    className="xa:w-full"
                                />
                            </div>
                            
                            <XButton
                                state={isPostLoading ? "loading" : "default"}
                                onClick={createUser}
                                className="xa:w-full"
                                disabled={!userName.trim() || !userImage.trim()}
                            >
                                Tạo User
                            </XButton>
                        </div>
                    )
                },
                {
                    key: "code",
                    label: "Code",
                    component: (
                        <div className="code-block">
                            <pre><code>{`// GET API
import { EStatus, ETypeResponse } from "x-app-sdk";

const [isLoading, setIsLoading] = useState(false);

const callApi = async () => {
  setIsLoading(true);
  try {
    const response = await fetch('https://api-example.com/api/v1');
    const result = await response.json();
    console.log({
      status: EStatus.SUCCESS,
      type: ETypeResponse.ResponseCall,
      data: result,
    });
  } catch (error) {
    console.log({
      status: EStatus.ERROR,
      type: ETypeResponse.ResponseCall,
    });
  } finally {
    setIsLoading(false);
  }
}

// POST API
const createUser = async () => {
  setIsPostLoading(true);
  try {
    const response = await fetch('https://68ef738db06cc802829d72fe.mockapi.io/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: userName,
        image: userImage
      })
    });
    const result = await response.json();
    console.log({
      status: EStatus.SUCCESS,
      type: ETypeResponse.ResponseCall,
      data: result,
    });
  } catch (error) {
    console.log({
      status: EStatus.ERROR,
      type: ETypeResponse.ResponseCall,
    });
  } finally {
    setIsPostLoading(false);
  }
}

<XButton
  state={isLoading ? "loading" : "default"}
  onClick={callApi}
>
  Gọi API GET
</XButton>

<XButton
  state={isPostLoading ? "loading" : "default"}
  onClick={createUser}
  disabled={!userName.trim() || !userImage.trim()}
>
  Tạo User
</XButton>`}</code></pre>
                        </div>
                    )
                }
            ]} />
        </section>
    );
}
