import { CircleCheck, Plus, LogIn, Send } from "lucide-react";
import { useState } from "react";
import { EStatus, ETypeResponse, FlutterMessageResponse } from "x-app-sdk";
import { XButton, XTabBar, XInput } from "x-app-ui";

interface APICallDemoProps {
    onResult: (data: FlutterMessageResponse) => void;
}

export default function APICallDemo({ onResult }: APICallDemoProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isPostLoading, setIsPostLoading] = useState(false);
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const [userName, setUserName] = useState("");
    const [userImage, setUserImage] = useState("");
    const [loginUsername, setLoginUsername] = useState("0983541031");
    const [loginPassword, setLoginPassword] = useState("3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c");
    // State cho tab post form data
    const [formName, setFormName] = useState("");
    const [formAvatar, setFormAvatar] = useState("");
    const [isFormLoading, setIsFormLoading] = useState(false);
  // Hàm gửi form data (multipart/form-data)
  const postFormData = async () => {
    if (!formName.trim() || !formAvatar.trim()) {
      onResult({
        status: EStatus.ERROR,
        type: ETypeResponse.ResponseCall,
        data: { message: "Vui lòng nhập đầy đủ thông tin" }
      });
      return;
    }
    setIsFormLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", formName);
      formData.append("image", formAvatar);
      const response = await fetch("https://68ef738db06cc802829d72fe.mockapi.io/user", {
        method: "POST",
        body: formData
      });
      const result = await response.json();
      onResult({
        status: EStatus.SUCCESS,
        type: ETypeResponse.ResponseCall,
        data: result,
      });
      setFormName("");
      setFormAvatar("");
    } catch (error) {
      console.log("error", error)
      onResult({
        status: EStatus.ERROR,
        type: ETypeResponse.ResponseCall,
        data: { message: "Lỗi khi gửi form data" }
      });
    } finally {
      setIsFormLoading(false);
    }
  };

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
        } catch (_) {
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

    const loginUser = async () => {
        if (!loginUsername.trim() || !loginPassword.trim()) {
            onResult({
                status: EStatus.ERROR,
                type: ETypeResponse.ResponseCall,
                data: { message: "Vui lòng nhập đầy đủ thông tin đăng nhập" }
            })
            return
        }

        setIsLoginLoading(true)
        try {
            const response = await fetch('https://api.sandbox.mypoint.com.vn/8854/gup2start/rest/iam/v1/authentication/account-login', {
                method: 'POST',
                headers: {
                    'User-Agent': 'MyPoint-Dev/1.21.10 (com.icom.vn.MyPoint; build:1; iOS 18.3.1) Alamofire/5.4.4',
                    'Accept-Language': 'en-VN;q=1.0, vi-VN;q=0.9, en;q=0.8',
                    'Accept-Encoding': 'br;q=1.0, gzip;q=0.9, deflate;q=0.8',
                    'Authorization': 'Bearer ',
                    'Content-Type': 'application/json',
                    'device-name': 'iPhone SE 3nd gen',
                    'version': '1.21.10',
                    'device-key': '13sd26fc-748f-4d1a-a064-af8d78712345',
                    'operating-system': 'iOS',
                    'lang': 'vi',
                    'requestId': '1D8C73B8-472A-46DE-95B6-8AF63CC8EEEF'
                },
                body: JSON.stringify({
                    lang: 'vi',
                    username: loginUsername,
                    device_key: '13sd26fc-748f-4d1a-a064-af8d78712345',
                    workspace_code: '8854',
                    password: loginPassword
                })
            })
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
                data: { message: "Lỗi khi đăng nhập" }
            })
        } finally {
            setIsLoginLoading(false)
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
                        <p>Tạo user mới với API POST (JSON)</p>
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
                  key: "post-form",
                  label: "POST Form Data",
                  component: (
                    <div className="demo-container">
                      <div className="xa:flex xa:items-center xa:gap-2 xa:mb-4">
                        <Send size={18} color="purple" />
                        <p>Gửi user bằng form-data (multipart/form-data)</p>
                      </div>
                      <div className="xa:space-y-3 xa:mb-4">
                        <XInput
                          placeholder="Nhập tên user"
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          className="xa:w-full"
                        />
                        <XInput
                          placeholder="Nhập URL hình ảnh"
                          value={formAvatar}
                          onChange={(e) => setFormAvatar(e.target.value)}
                          className="xa:w-full"
                        />
                      </div>
                      <XButton
                        state={isFormLoading ? "loading" : "default"}
                        onClick={postFormData}
                        className="xa:w-full"
                        disabled={!formName.trim() || !formAvatar.trim()}
                      >
                        Gửi Form Data
                      </XButton>
                    </div>
                  )
                },
                {
                    key: "login",
                    label: "LOGIN",
                    component: (
                        <div className="demo-container">
                            <div className="xa:flex xa:items-center xa:gap-2 xa:mb-4">
                                <LogIn size={18} color="orange" />
                                <p>Đăng nhập với MyPoint API</p>
                            </div>
                            
                            <div className="xa:space-y-3 xa:mb-4">
                                <XInput
                                    placeholder="Số điện thoại"
                                    value={loginUsername}
                                    onChange={(e) => setLoginUsername(e.target.value)}
                                    className="xa:w-full"
                                />
                                <XInput
                                    placeholder="Mật khẩu (hash)"
                                    value={loginPassword}
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                    className="xa:w-full"
                                    type="password"
                                />
                            </div>
                            
                            <XButton
                                state={isLoginLoading ? "loading" : "default"}
                                onClick={loginUser}
                                className="xa:w-full"
                                disabled={!loginUsername.trim() || !loginPassword.trim()}
                            >
                                Đăng Nhập
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

// LOGIN API
const loginUser = async () => {
  setIsLoginLoading(true);
  try {
    const response = await fetch('https://api.sandbox.mypoint.com.vn/8854/gup2start/rest/iam/v1/authentication/account-login', {
      method: 'POST',
      headers: {
        'User-Agent': 'MyPoint-Dev/1.21.10 (com.icom.vn.MyPoint; build:1; iOS 18.3.1) Alamofire/5.4.4',
        'Accept-Language': 'en-VN;q=1.0, vi-VN;q=0.9, en;q=0.8',
        'Accept-Encoding': 'br;q=1.0, gzip;q=0.9, deflate;q=0.8',
        'Authorization': 'Bearer ',
        'Content-Type': 'application/json',
        'device-name': 'iPhone SE 3nd gen',
        'version': '1.21.10',
        'device-key': '13sd26fc-748f-4d1a-a064-af8d78712345',
        'operating-system': 'iOS',
        'lang': 'vi',
        'requestId': '1D8C73B8-472A-46DE-95B6-8AF63CC8EEEF'
      },
      body: JSON.stringify({
        lang: 'vi',
        username: loginUsername,
        device_key: '13sd26fc-748f-4d1a-a064-af8d78712345',
        workspace_code: '8854',
        password: loginPassword
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
    setIsLoginLoading(false);
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
</XButton>

<XButton
  state={isLoginLoading ? "loading" : "default"}
  onClick={loginUser}
  disabled={!loginUsername.trim() || !loginPassword.trim()}
>
  Đăng Nhập
</XButton>`}</code></pre>
                        </div>
                    )
                }
            ]} />
        </section>
    );
}
