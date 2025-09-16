import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useToast } from 'x-app-ui';
import { useEffect, useState } from 'react';
import { fltSDK, FlutterMessageResponse, IPaymentResult, listenNotifiactionEvent, listenPaymentEvent } from 'x-app-sdk';

// Pages
import Login from '../pages/Login';
import Register from '../pages/Register';
import Health from '../pages/Health';
import MainLayout from '../components/MainLayout';

function RouterApp() {
    const { showToast } = useToast()
    const [data, setData] = useState<FlutterMessageResponse>();

    useEffect(() => {
        // Lắng nghe thanh toán
        const handelEVventPayment = (event: FlutterMessageResponse<IPaymentResult>) => {
            setData(event)
            showToast(
                event.data?.status ? "Thanh toán thành công" : "Thanh toán thất bại",
                { status: event.data?.status ? "success" : "error" }
            );
        }

        const handelNoti = (event: FlutterMessageResponse) => {
            setData(event)
            showToast(
                "Có thông báo mới"
            );
        }

        const unsubscribePayment = listenPaymentEvent((data) => {
            handelEVventPayment(data)
        }, fltSDK);

        // Lắng nghe thhông báo
        const unsubscribeNoti = listenNotifiactionEvent((data) => {
            handelNoti(data)
        }, fltSDK);

        return () => {
            unsubscribePayment();
            unsubscribeNoti();
        };
    }, [showToast]);

    return (
        <Router basename={import.meta.env.VITE_PRE_PATH}>
            <div>
                {
                    data &&
                    <div className="xa:border xa:rounded-lg  xa:p-4 xa:bg-white xa:shadow-sm xa:mb-6 xa:break-all xa:w-full xa:whitespace-pre-wrap xa:text-xs xa:text-gray-700">
                        <span className="xa:font-semibold xa:text-gray-800">Kết quả:</span>
                        <pre className="xa:mt-1 xa:overflow-x-auto">{JSON.stringify(data, null, 2)}</pre>
                    </div>
                }

                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/health" element={<Health />} />
                    <Route path="/*" element={<MainLayout />} />
                </Routes>
            </div>
        </Router>
    )
}
export default RouterApp