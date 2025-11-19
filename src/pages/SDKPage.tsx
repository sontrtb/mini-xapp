import { useState } from "react";
import { FlutterMessageResponse } from "x-app-sdk";

// Import SDK Components
import PermissionDemo from "../components/SDK/PermissionDemo";
import UserDemo from "../components/SDK/UserDemo";
import MediaDemo from "../components/SDK/MediaDemo";
import RoutingDemo from "../components/SDK/RoutingDemo";
import ConfigDemo from "../components/SDK/ConfigDemo";
import DeviceDemo from "../components/SDK/DeviceDemo";
import LocationDemo from "../components/SDK/LocationDemo";
import PaymentDemo from "../components/SDK/PaymentDemo";
import APICallDemo from "../components/SDK/APICallDemo";
import StoreDemo from "./StoreDemo";
import DownloadFileDemo from "../components/SDK/DownloadFileDemo";

function SDKPage() {
    const [data, setData] = useState<FlutterMessageResponse>();

    const handleResult = (result: FlutterMessageResponse) => {
        setData(result);
    };

    return (
        <div className="xa:bg-[#f7f9fa] min-h-screen xa:p-4">
            <h1 className='xa:text-3xl xa:font-extrabold xa:mb-2 xa:text-primary'>SDK Mini App V1</h1>
            <h2 className='xa:font-bold xa:text-base xa:text-gray-500 xa:mb-4'>Demo các tính năng của SDK</h2>

            <div className="xa:border xa:rounded-lg xa:p-4 xa:bg-white xa:shadow-sm xa:mb-6 xa:break-all xa:w-full xa:whitespace-pre-wrap xa:text-xs xa:text-gray-700">
                <span className="xa:font-semibold xa:text-gray-800">Kết quả:</span>
                <pre className="xa:mt-1 xa:overflow-x-auto">{JSON.stringify(data, null, 2)}</pre>
            </div>

            <PermissionDemo onResult={handleResult} />
            <UserDemo onResult={handleResult} />
            <MediaDemo onResult={handleResult} />
            <RoutingDemo />
            <ConfigDemo onResult={handleResult} />
            <DeviceDemo onResult={handleResult} />
            <LocationDemo onResult={handleResult} />
            <PaymentDemo onResult={handleResult} />
            <StoreDemo onResult={handleResult} />
            <APICallDemo onResult={handleResult} />
            <DownloadFileDemo />
        </div>
    )
}

export default SDKPage