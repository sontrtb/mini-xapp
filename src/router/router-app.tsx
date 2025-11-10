import LoadingDemo from '../pages/LoadingDemo';
import SDKPage from '../pages/SDKPage';
import ToastDemo from '../pages/ToastDemo';
import Start from '../pages/Start';
// Pages
import Home from '../pages/Home';
import ButtonDemo from '../pages/ButtonDemo';
import XInputDemo from '../pages/InputDemo';
import BottomSheetDemo from '../pages/BottomSheetDemo';
import ModalDemo from '../pages/ModalDemo';
import XCheckBoxDemo from '../pages/CheckBoxDemo';
import XRadioDemo from '../pages/RadioDemo';
import DatePickerDemo from '../pages/DatePickerDemo';
import BottomTabDemo from '../pages/BottomTabDemo';
import SwitchDemo from '../pages/SwitchDemo';
import SliderDemo from '../pages/SliderDemo';
import TabBarDemo from '../pages/TabBarDemo';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useToast } from 'x-app-ui';
import { useEffect, useState } from 'react';
import { fltSDK, FlutterMessageResponse, IPaymentResult, listenNotifiactionEvent, listenPaymentEvent } from 'x-app-sdk';
import IFame from '../pages/IFame';

function RouterApp() {
    const { showToast } = useToast()
    const [data, setData] = useState<FlutterMessageResponse>();

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

    useEffect(() => {
        // Lắng nghe thanh toán
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
                <header className="header">
                    <div className="container header-container">
                        <div className="logo">
                            <Link to="/">
                                <h1>XAppUI</h1>
                            </Link>
                        </div>
                        <nav className="main-nav">
                            <ul>
                                <li><Link to="/">Trang chủ</Link></li>
                                <li><Link to="/start">Bắt đầu</Link></li>
                                <li><Link to="/buttons">Buttons</Link></li>
                                <li><Link to="/inputs">Inputs</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>



                <main className="main-content">
                    <div className="container">
                        {
                            data &&
                            <div className="xa:border xa:rounded-lg  xa:p-4 xa:bg-white xa:shadow-sm xa:mb-6 xa:break-all xa:w-full xa:whitespace-pre-wrap xa:text-xs xa:text-gray-700">
                                <span className="xa:font-semibold xa:text-gray-800">Kết quả:</span>
                                <pre className="xa:mt-1 xa:overflow-x-auto">{JSON.stringify(data, null, 2)}</pre>
                            </div>
                        }


                        <Routes>
                            <Route path="/sdk-page" element={<SDKPage />} />
                            <Route path="/start" element={<Start />} />

                            <Route path="/" element={<Home />} />
                            <Route path="/buttons" element={<ButtonDemo />} />
                            <Route path="/inputs" element={<XInputDemo />} />
                            <Route path="/bottom-sheet" element={<BottomSheetDemo />} />
                            <Route path="/modal" element={<ModalDemo />} />
                            <Route path="/check-box" element={<XCheckBoxDemo />} />
                            <Route path="/radio" element={<XRadioDemo />} />
                            <Route path="/date-picker" element={<DatePickerDemo />} />
                            <Route path="/bottom-tab" element={<BottomTabDemo />} />
                            <Route path="/switch" element={<SwitchDemo />} />
                            <Route path="/slider" element={<SliderDemo />} />
                            <Route path="/tab-bar" element={<TabBarDemo />} />
                            <Route path="/loading" element={<LoadingDemo />} />
                            <Route path="/toast" element={<ToastDemo />} />
                            <Route path="/i-frame" element={<IFame />} />
                        </Routes>
                    </div>
                </main>

                <footer className="footer">
                    <div className="container">
                        <p>&copy; 2025 XAppUI</p>
                        <a href='https://www.google.com/'>Link</a>
                    </div>
                </footer>
            </div>
        </Router>
    )
}
export default RouterApp