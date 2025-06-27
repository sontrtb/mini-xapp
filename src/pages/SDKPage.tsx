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
        <div className="xa:p-4 xa:bg-[#f7f9fa] min-h-screen">
            <h1 className='xa:text-3xl xa:font-extrabold xa:mb-2 xa:text-primary'>SDK Mini App V1</h1>
            <h2 className='xa:font-bold xa:text-base xa:text-gray-500 xa:mb-4'>Demo các tính năng của SDK</h2>

            <div className="xa:border xa:rounded-lg xa:p-4 xa:bg-white xa:shadow-sm xa:mb-6 xa:break-all xa:w-full xa:whitespace-pre-wrap xa:text-xs xa:text-gray-700">
                <span className="xa:font-semibold xa:text-gray-800">Kết quả:</span>
                <pre className="xa:mt-1 xa:overflow-x-auto">{JSON.stringify(data, null, 2)}</pre>
            </div>

            {/* Section: Phân quyền */}
            <section className="xa:mb-6 xa:bg-white xa:rounded-lg xa:p-4 xa:shadow-sm">
                <h2 className='xa:text-xl xa:font-bold xa:mb-2 xa:text-primary'>Phân quyền</h2>
                <div className="xa:flex xa:items-center xa:gap-2 xa:mb-2">
                    <CircleCheck size={18} color="green" />
                    <p>Quyền từng sự kiện</p>
                </div>
                <XButton onClick={requestPermisstion} className="xa:w-full">Kiểm tra quyền</XButton>
            </section>

            {/* Section: User */}
            <section className="xa:mb-6 xa:bg-white xa:rounded-lg xa:p-4 xa:shadow-sm">
                <h2 className='xa:text-xl xa:font-bold xa:mb-2 xa:text-primary'>User</h2>
                <div className="xa:flex xa:items-center xa:gap-2 xa:mb-2">
                    <CircleCheck size={18} color="green" />
                    <p>Lấy thông tin user - Đã có cơ chế cache</p>
                </div>
                <XButton onClick={getUserInfor} className="xa:w-full">Thông tin user</XButton>
            </section>

            {/* Section: Media */}
            <section className="xa:mb-6 xa:bg-white xa:rounded-lg xa:p-4 xa:shadow-sm">
                <h2 className='xa:text-xl xa:font-bold xa:mb-2 xa:text-primary'>Media</h2>
                <div className="xa:flex xa:items-center xa:gap-2 xa:mb-2">
                    <CircleCheck size={18} color="green" />
                    <p>Lấy hình ảnh (từ file hoặc camera)</p>
                </div>
                <div className="xa:flex xa:gap-2 xa:mb-2">
                    <XButton onClick={() => onPickerImage(EMediaType.gallery)} className="xa:flex-1">Thư viện</XButton>
                    <XButton onClick={() => onPickerImage(EMediaType.camera)} className="xa:flex-1">Máy ảnh</XButton>
                </div>
                <div className="xa:flex xa:items-center xa:gap-2 xa:mb-2">
                    <CircleCheck size={18} color="green" />
                    <p>Chọn file từ thiết bị</p>
                </div>
                <XButton onClick={onPickerFile} className="xa:w-full">Chọn file</XButton>
            </section>

            {/* Section: Routing */}
            <section className="xa:mb-6 xa:bg-white xa:rounded-lg xa:p-4 xa:shadow-sm">
                <h2 className='xa:text-xl xa:font-bold xa:mb-2 xa:text-primary'>Routing</h2>
                <div className="xa:flex xa:items-center xa:gap-2 xa:mb-2">
                    <CircleCheck size={18} color="green" />
                    <p>Đóng Mini App <br /> <span className="xa:text-xs xa:text-gray-400">Có thể truyền data vào để xử lý khi đóng app</span></p>
                </div>
                <XButton onClick={onCloseApp} className="xa:w-full">Đóng App</XButton>
                <div className="xa:flex xa:items-center xa:gap-2 xa:mt-2">
                    <Ban size={18} color="red" />
                    <p>Mở webview</p>
                </div>
            </section>

            {/* Section: Config */}
            <section className="xa:mb-6 xa:bg-white xa:rounded-lg xa:p-4 xa:shadow-sm">
                <h2 className='xa:text-xl xa:font-bold xa:mb-2 xa:text-primary'>Config</h2>
                <div className="xa:flex xa:items-center xa:gap-2 xa:mb-2">
                    <CircleCheck size={18} color="green" />
                    <p>Chỉnh sửa header mini app <br /> <span className="xa:text-xs xa:text-gray-400">Thay đổi màu nền header, màu chữ header, chữ trên header</span></p>
                </div>
                <XButton onClick={onConfigUIApp} className="xa:w-full">Config UI</XButton>
            </section>

            {/* Section: Device */}
            <section className="xa:mb-6 xa:bg-white xa:rounded-lg xa:p-4 xa:shadow-sm">
                <h2 className='xa:text-xl xa:font-bold xa:mb-2 xa:text-primary'>Device</h2>
                <div className="xa:flex xa:items-center xa:gap-2 xa:mb-2">
                    <CircleCheck size={18} color="green" />
                    <p>Rung</p>
                </div>
                <XButton onClick={onVibrate} className="xa:w-full">Rung</XButton>
                <div className="xa:flex xa:items-center xa:gap-2 xa:mt-4 xa:mb-2">
                    <CircleCheck size={18} color="green" />
                    <p>Mở ứng dụng gọi điện thoại của thiết bị</p>
                </div>
                <XButton onClick={onCall} className="xa:w-full">Gọi điện</XButton>
                <div className="xa:flex xa:items-center xa:gap-2 xa:mt-4 xa:mb-2">
                    <CircleCheck size={18} color="green" />
                    <p>Mở ứng dụng tin nhắn của thiết bị</p>
                </div>
                <XButton onClick={onSms} className="xa:w-full">Nhắn tin</XButton>
            </section>

            {/* Section: Location */}
            <section className="xa:mb-6 xa:bg-white xa:rounded-lg xa:p-4 xa:shadow-sm">
                <h2 className='xa:text-xl xa:font-bold xa:mb-2 xa:text-primary'>Location</h2>
                <div className="xa:flex xa:items-center xa:gap-2 xa:mb-2">
                    <CircleCheck size={18} color="green" />
                    <p>Lấy vị trí hiện tại của người dùng</p>
                </div>
                <XButton onClick={onGetLocation} className="xa:w-full">Lấy vị trí</XButton>
            </section>

            {/* Section: Thanh toán */}
            <section className="xa:mb-10 xa:bg-white xa:rounded-lg xa:p-4 xa:shadow-sm">
                <h2 className='xa:text-xl xa:font-bold xa:mb-2 xa:text-primary'>Thanh toán</h2>
                <XButton
                    state={isLoading ? "loading" : "default"}
                    onClick={onPaymentRequest}
                    className="xa:w-full"
                >
                    Thanh Toán
                </XButton>
            </section>
        </div >
    )
}

export default SDKPage