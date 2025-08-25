import { CircleCheck } from "lucide-react";
import { useState } from "react";
import { EStatus, ETypeResponse, FlutterMessageResponse } from "x-app-sdk";
import { XButton, XTabBar } from "x-app-ui";

interface APICallDemoProps {
    onResult: (data: FlutterMessageResponse) => void;
}

export default function APICallDemo({ onResult }: APICallDemoProps) {
    const [isLoading, setIsLoading] = useState(false);

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

    return (
        <section className="xa:mb-10 xa:bg-white xa:rounded-lg xa:shadow-sm xa:p-4">
            <h2 className='xa:text-xl xa:font-bold xa:mb-2 xa:text-primary'>API Call</h2>
            
            <XTabBar tabs={[
                {
                    key: "preview",
                    label: "Xem trước",
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
                                Gọi API
                            </XButton>
                        </div>
                    )
                },
                {
                    key: "code",
                    label: "Code",
                    component: (
                        <div className="code-block">
                            <pre><code>{`import { EStatus, ETypeResponse } from "x-app-sdk";

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

<XButton
  state={isLoading ? "loading" : "default"}
  onClick={callApi}
  className="xa:w-full"
>
  Gọi API
</XButton>`}</code></pre>
                        </div>
                    )
                }
            ]} />
        </section>
    );
}
