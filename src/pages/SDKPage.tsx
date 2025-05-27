import { Ban, CircleCheck, TriangleAlert } from "lucide-react";
import { useState } from "react";
import {
    closeApp,
    configUIApp,
    EKeyInfor,
    // EPremissionsType,
    FlutterMessageResponse,
    getInfo,
    IViewUiConfig,
    openPickerImage,
    // premissionsRequest,
    vibrate,
    paymentRequest,
    ETypePayment
} from "../../../sdk";
import { XButton } from "x-app-ui";

function SDKPage() {
    const [data, setData] = useState<FlutterMessageResponse>();

    const getUserInfor = async () => {
        const res = await getInfo(EKeyInfor.USER);
        setData(res)
    }

    const onPickerImage = async () => {
        const res = await openPickerImage()
        setData(res)
    }

    const onCloseApp = async () => {
        closeApp({ data: "son fe" })
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

    const onPaymentRequest = async () => {
        const res = await paymentRequest({type: ETypePayment.ONE_PAY})
         setData(res as FlutterMessageResponse)
    }

    const requestPermisstion = async () => {
        // const res = await premissionsRequest(EPremissionsType.LOCATION)
        // setData(res as FlutterMessageResponse)
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
                <TriangleAlert size={18} color="orange" />
                <p>Quyền từng sự kiện <br />- Fake gọi api</p>
            </div>
            <div className="xa:flex">
                <TriangleAlert size={18} color="orange" />
                <p>Quyền từng nhóm quyền</p>
            </div>
            <XButton
                onClick={requestPermisstion}
            >
                Xin quyền
            </XButton>

            <br />
            <br />


            <h2 className='xa:text-xl xa:font-bold'>User</h2>
            <div className="xa:flex">
                <TriangleAlert size={18} color="orange" />
                <p>Lấy thông tin user<br />
                    - Đã có cơ chế cache (Mới dựng cấu trúc, chưa lấy được dữ liệu thật)</p>
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
                onClick={onPickerImage}
            >
                Lấy hình ảnh
            </XButton>
            <br />
            <br />
            <div className="xa:flex">
                <Ban size={18} color="red" />
                <p>Chọn file từ thiết bị</p>
            </div>

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
                <Ban size={18} color="red" />
                <p>Lấy thông tin Network</p>
            </div>
            <br />
            <div className="xa:flex">
                <Ban size={18} color="red" />
                <p>Mở ứng dụng gọi điện thoại của thiết bị</p>
            </div>
            <br />
            <div className="xa:flex">
                <Ban size={18} color="red" />
                <p>Mở ứng dụng tin nhắn của thiết bị</p>
            </div>

            <br />
            <br />
            <br />

            <h2 className='xa:text-xl xa:font-bold'>Location</h2>
            <div className="xa:flex">
                <Ban size={18} color="red" />
                <p>Lấy vị trí hiện tại của người dùng</p>
            </div>

            <br />
            <br />
            <br />

            <h2 className='xa:text-xl xa:font-bold'>Storage</h2>
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
            <br />

            <h2 className='xa:text-xl xa:font-bold'>Thanh toán</h2>
            <XButton
                onClick={onPaymentRequest}
            >
                OnePay
            </XButton>
            <br />

            <br />
            <br />
            <br />
        </div >
    )
}

export default SDKPage