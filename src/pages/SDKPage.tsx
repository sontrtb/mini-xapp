import { Ban, CircleCheck } from "lucide-react";
import { useState } from "react";
import {
    closeApp,
    configUIApp,
    EKeyInfor,
    FlutterMessageResponse,
    getInfo,
    IViewUiConfig,
    openPickerImage,
    premissionsRequest,
    vibrate,
    paymentRequest,
    EMediaType,
    openPickerFile,
    call,
    sms,
    currentLocation,
    ETypeRequest,
} from "x-app-sdk";
import { XButton } from "x-app-ui";

function SDKPage() {
    const [data, setData] = useState<FlutterMessageResponse>();
    const [isLoading, setIsLoading] = useState(false)

    const getUserInfor = async () => {
        const res = await getInfo(EKeyInfor.USER);
        setData(res)
    }

    const onPickerImage = async (type: EMediaType) => {
        const res = await openPickerImage(type)
        setData(res)
    }

    const onPickerFile = async () => {
        const res = await openPickerFile()
        setData(res)
    }

    const onCloseApp = async () => {
        closeApp({ data: "son fe dev" })
    }

    const onConfigUIApp = async () => {
        const config: IViewUiConfig = {
            headerColor: "#000000",
            headerTitle: "Test Header",
            headerTextColor: "#ffffff",
        }
        const res = await configUIApp(config)
        setData(res)
    }

    const onVibrate = async () => {
        const res = await vibrate()
        setData(res as FlutterMessageResponse)
    }
    const onCall = async () => {
        const res = await call("0355677825");
        setData(res as FlutterMessageResponse)
    }
    const onSms = async () => {
        const res = await sms("0355677825");
        setData(res as FlutterMessageResponse)
    }

    const onPaymentRequest = async () => {
        setIsLoading(true)
        const res = await paymentRequest({ partnerOrderId: "testMiniApp", totalAmount: 100000 })
        setData(res as FlutterMessageResponse)
        setIsLoading(false)
    }

    const onGetLocation = async () => {
        const res = await currentLocation()
        setData(res as FlutterMessageResponse)
    }

    const requestPermisstion = async () => {
        const res = await premissionsRequest(ETypeRequest.RequestPickerFile)
        setData(res as FlutterMessageResponse)
    }

    return (
        <div className="xa:p-4">
            <h1 className='xa:text-2xl xa:font-bold'>SDK Mini App V1</h1>
            <h2 className='xa:font-bold'>SDK Mini App V1</h2>
            <br />
            <div className="xa:border xa:p-2 xa:break-all xa:w-[calc(100vw - 100px)] xa:whitespace-pre-wrap">
                {JSON.stringify(data, null, 2)}
            </div>

            <br />
            <h2 className='xa:text-xl xa:font-bold'>Phân quyền</h2>
            <div className="xa:flex">
                <CircleCheck size={18} color="green" />
                <p>Quyền từng sự kiện</p>
            </div>
            <XButton
                onClick={requestPermisstion}
            >
                Kiểm tra quyền
            </XButton>

            <br />
            <br />


            <h2 className='xa:text-xl xa:font-bold'>User</h2>
            <div className="xa:flex">
                <CircleCheck size={18} color="green" />
                <p>Lấy thông tin user - Đã có cơ chế cache</p>
            </div>
            <XButton
                onClick={getUserInfor}
            >
                Thông tin user
            </XButton>

            <br />
            <br />
            <br />

            <h2 className='xa:text-xl xa:font-bold'>Media</h2>
            <div className="xa:flex">
                <CircleCheck size={18} color="green" />
                <p>Lấy hình ảnh (từ file hoặc camera)</p>
            </div>
            <XButton
                onClick={() => onPickerImage(EMediaType.gallery)}
            >
                Lấy hình ảnh từ thư viện
            </XButton>
            <XButton
                onClick={() => onPickerImage(EMediaType.camera)}
            >
                Lấy hình ảnh từ máy ảnh
            </XButton>
            <br />
            <br />
            <div className="xa:flex">
                <CircleCheck size={18} color="green" />
                <p>Chọn file từ thiết bị</p>
            </div>
            <XButton
                onClick={() => onPickerFile()}
            >
                Chọn file
            </XButton>

            <br />
            <br />
            <br />

            <h2 className='xa:text-xl xa:font-bold'>Routing</h2>
            <div className="xa:flex">
                <CircleCheck size={18} color="green" />
                <p>Đóng Mini App <br /> - Có thể truyền data vào để xử lý khi đóng app</p>
            </div>
            <XButton
                onClick={onCloseApp}
            >
                Đóng App
            </XButton>
            <br />
            <br />
            <div className="xa:flex">
                <Ban size={18} color="red" />
                <p>Mở webview</p>
            </div>

            <br />
            <br />
            <br />

            <h2 className='xa:text-xl xa:font-bold'>Config</h2>
            <div className="xa:flex">
                <CircleCheck size={18} color="green" />
                <p>Chỉnh sửa header mini app <br /> - Thay đổi màu nền header, màu chữ header, chữ trên header</p>
            </div>
            <XButton
                onClick={onConfigUIApp}
            >
                Config UI
            </XButton>

            <br />
            <br />
            <br />

            <h2 className='xa:text-xl xa:font-bold'>Device</h2>
            <div className="xa:flex">
                <CircleCheck size={18} color="green" />
                <p>Rung</p>
            </div>
            <XButton
                onClick={onVibrate}
            >
                Rung
            </XButton>
            <br />
            <br />
            <div className="xa:flex">
                <CircleCheck size={18} color="green" />
                <p>Mở ứng dụng gọi điện thoại của thiết bị</p>
            </div>
            <XButton
                onClick={onCall}
            >
                Gọi điện
            </XButton>
            <br /><br />
            <div className="xa:flex">
                <CircleCheck size={18} color="green" />
                <p>Mở ứng dụng tin nhắn của thiết bị</p>
            </div>
            <XButton
                onClick={onSms}
            >
                Nhắn tin
            </XButton>

            <br />
            <br />
            <br />

            <h2 className='xa:text-xl xa:font-bold'>Location</h2>
            <div className="xa:flex">
                <CircleCheck size={18} color="green" />
                <p>Lấy vị trí hiện tại của người dùng</p>
            </div>
            <XButton
                onClick={onGetLocation}
            >
                Lấy vị trí
            </XButton>

            <br />
            <br />
            <br />

            {/* <h2 className='xa:text-xl xa:font-bold'>Storage</h2>
            <div className="xa:flex">
                <Ban size={18} color="red" />
                <p>Lưu dữ liệu ở thiết bị của người dùng.</p>
            </div>
            <br />
            <div className="xa:flex">
                <Ban size={18} color="red" />
                <p>Lấy dữ liệu đã lưu </p>
            </div>
            <br />
            <div className="xa:flex">
                <Ban size={18} color="red" />
                <p>Xóa dữ liệu đã lưu </p>
            </div>
            <br />
            <div className="xa:flex">
                <Ban size={18} color="red" />
                <p>Xóa tất cả dữ liệu đã lưu</p>
            </div>
            <br />
            <div className="xa:flex">
                <Ban size={18} color="red" />
                <p>Lấy thông tin bộ đệm</p>
            </div>

            <br />
            <br />
            <br /> */}

            <h2 className='xa:text-xl xa:font-bold'>Thanh toán</h2>
            <XButton
                state={isLoading ? "loading" : "default"}
                onClick={onPaymentRequest}
            >
                Thanh Toán
            </XButton>
            <br />

            <br />
            <br />
            <br />
        </div >
    )
}

export default SDKPage