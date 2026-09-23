import { useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useToast } from 'x-app-ui';
import {
  fltSDK,
  FlutterMessageResponse,
  IPaymentResult,
  listenNotifiactionEvent,
  listenPaymentEvent,
  listenFocusEvent,
} from 'x-app-sdk';
import Home from '../pages/Home';
import config from '../../config.json';

function RouterApp() {
  const { showToast } = useToast();

  // Lắng nghe sự kiện thanh toán
  const handlePaymentEvent = useCallback(
    (event: FlutterMessageResponse<IPaymentResult>) => {
      showToast(
        event.data?.status ? 'Thanh toán thành công' : 'Thanh toán thất bại',
        { status: event.data?.status ? 'success' : 'error' }
      );
    },
    [showToast]
  );

  // Lắng nghe sự kiện focus
  const handleFocusEvent = useCallback((event: FlutterMessageResponse) => {
    console.log('Focus event:', new Date(), event);
  }, []);

  // Lắng nghe sự kiện thông báo
  const handleNotiEvent = useCallback(
    (event: FlutterMessageResponse) => {
      showToast('Có thông báo mới');
      console.log('Notification event:', event);
    },
    [showToast]
  );

  useEffect(() => {
    // Lắng nghe thanh toán
    const unsubscribePayment = listenPaymentEvent(handlePaymentEvent, fltSDK);

    // Lắng nghe thông báo
    const unsubscribeNoti = listenNotifiactionEvent(handleNotiEvent, fltSDK);

    // Lắng nghe focus
    const unsubscribeFocus = listenFocusEvent(handleFocusEvent, fltSDK);

    return () => {
      unsubscribePayment();
      unsubscribeNoti();
      unsubscribeFocus();
    };
  }, [handlePaymentEvent, handleNotiEvent, handleFocusEvent]);

  return (
    <Router basename={config.prePath}>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default RouterApp;