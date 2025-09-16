import { useState } from 'react';
import { Clock, MapPin, Star } from 'lucide-react';
import { XButton, XInput, XFormDatePicker, XBottomSheet, useToast } from 'x-app-ui';

interface Doctor {
    id: number;
    name: string;
    specialty: string;
    experience: string;
    rating: number;
    location: string;
    avatar: string;
}

export default function Appointment() {
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [showDoctorSheet, setShowDoctorSheet] = useState(false);
    const [showTimeSheet, setShowTimeSheet] = useState(false);
    const { showToast } = useToast();

    const specialties = [
        { id: 1, name: 'Tim mạch', doctors: 12 },
        { id: 2, name: 'Nội khoa', doctors: 8 },
        { id: 3, name: 'Ngoại khoa', doctors: 6 },
        { id: 4, name: 'Da liễu', doctors: 4 },
        { id: 5, name: 'Tai mũi họng', doctors: 5 },
        { id: 6, name: 'Mắt', doctors: 3 }
    ];

    const doctors = [
        {
            id: 1,
            name: 'BS. Nguyễn Thị Lan',
            specialty: 'Tim mạch',
            experience: '15 năm kinh nghiệm',
            rating: 4.8,
            location: 'Bệnh viện Bạch Mai',
            avatar: '👩‍⚕️'
        },
        {
            id: 2,
            name: 'BS. Trần Văn Nam',
            specialty: 'Nội khoa',
            experience: '12 năm kinh nghiệm',
            rating: 4.9,
            location: 'Bệnh viện Việt Đức',
            avatar: '👨‍⚕️'
        },
        {
            id: 3,
            name: 'BS. Lê Thị Hoa',
            specialty: 'Da liễu',
            experience: '10 năm kinh nghiệm',
            rating: 4.7,
            location: 'Bệnh viện K',
            avatar: '👩‍⚕️'
        }
    ];

    const timeSlots = [
        '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
        '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
    ];

    const handleBookAppointment = () => {
        if (!selectedDoctor || !selectedTime) {
            showToast('Vui lòng chọn đầy đủ thông tin', { status: 'error' });
            return;
        }
        
        // In real app, this would make an API call
        showToast('Đặt lịch thành công! Bạn sẽ nhận được xác nhận qua email.', { status: 'success' });
        
        // Reset form
        setSelectedDoctor(null);
        setSelectedTime('');
        setSymptoms('');
    };

    return (
        <div className="xa:bg-gray-50 xa:min-h-screen">
            {/* Header */}
            <div className="xa:bg-blue-600 xa:text-white xa:p-4">
                <h1 className="xa:text-xl xa:font-bold">Đặt lịch khám</h1>
                <p className="xa:text-blue-100">Chọn bác sĩ và thời gian phù hợp</p>
            </div>

            <div className="xa:p-4 xa:space-y-6">
                {/* Specialties */}
                <div>
                    <h2 className="xa:text-lg xa:font-semibold xa:mb-4">Chuyên khoa</h2>
                    <div className="xa:grid xa:grid-cols-2 xa:gap-3">
                        {specialties.map((specialty) => (
                            <div key={specialty.id} className="xa:bg-white xa:p-4 xa:rounded-lg xa:shadow-sm xa:border xa:border-gray-200">
                                <h3 className="xa:font-medium xa:text-gray-900">{specialty.name}</h3>
                                <p className="xa:text-sm xa:text-gray-600">{specialty.doctors} bác sĩ</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Selected Doctor */}
                <div>
                    <h2 className="xa:text-lg xa:font-semibold xa:mb-4">Chọn bác sĩ</h2>
                    <div 
                        className="xa:bg-white xa:p-4 xa:rounded-lg xa:shadow-sm xa:border xa:border-gray-200 xa:cursor-pointer"
                        onClick={() => setShowDoctorSheet(true)}
                    >
                        {selectedDoctor ? (
                            <div className="xa:flex xa:items-center xa:space-x-3">
                                <div className="xa:text-2xl">{selectedDoctor.avatar}</div>
                                <div>
                                    <h3 className="xa:font-medium xa:text-gray-900">{selectedDoctor.name}</h3>
                                    <p className="xa:text-sm xa:text-gray-600">{selectedDoctor.specialty}</p>
                                    <div className="xa:flex xa:items-center xa:text-sm xa:text-gray-500">
                                        <Star size={14} className="xa:text-yellow-400 xa:mr-1" />
                                        {selectedDoctor.rating}
                                        <MapPin size={14} className="xa:ml-2 xa:mr-1" />
                                        {selectedDoctor.location}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="xa:text-gray-500 xa:text-center xa:py-4">
                                Chọn bác sĩ
                            </div>
                        )}
                    </div>
                </div>

                {/* Date Selection */}
                <div>
                    <h2 className="xa:text-lg xa:font-semibold xa:mb-4">Chọn ngày khám</h2>
                    <div className="xa:bg-white xa:p-4 xa:rounded-lg xa:shadow-sm xa:border xa:border-gray-200">
                        <XFormDatePicker type="day" />
                    </div>
                </div>

                {/* Time Selection */}
                <div>
                    <h2 className="xa:text-lg xa:font-semibold xa:mb-4">Chọn giờ khám</h2>
                    <div 
                        className="xa:bg-white xa:p-4 xa:rounded-lg xa:shadow-sm xa:border xa:border-gray-200 xa:cursor-pointer"
                        onClick={() => setShowTimeSheet(true)}
                    >
                        {selectedTime ? (
                            <div className="xa:flex xa:items-center xa:space-x-2">
                                <Clock size={20} className="xa:text-blue-600" />
                                <span className="xa:font-medium">{selectedTime}</span>
                            </div>
                        ) : (
                            <div className="xa:text-gray-500 xa:text-center xa:py-4">
                                Chọn giờ khám
                            </div>
                        )}
                    </div>
                </div>

                {/* Symptoms */}
                <div>
                    <h2 className="xa:text-lg xa:font-semibold xa:mb-4">Triệu chứng (tùy chọn)</h2>
                    <XInput
                        placeholder="Mô tả triệu chứng của bạn..."
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                    />
                </div>

                {/* Book Button */}
                <XButton 
                    variant="highlight" 
                    className="xa:w-full"
                    onClick={handleBookAppointment}
                >
                    Đặt lịch khám
                </XButton>
            </div>

            {/* Doctor Selection Bottom Sheet */}
            <XBottomSheet
                isOpen={showDoctorSheet}
                onClose={() => setShowDoctorSheet(false)}
                title="Chọn bác sĩ"
            >
                <div className="xa:p-4 xa:space-y-4">
                    {doctors.map((doctor) => (
                        <div 
                            key={doctor.id}
                            className="xa:bg-gray-50 xa:p-4 xa:rounded-lg xa:cursor-pointer xa:hover:bg-gray-100"
                            onClick={() => {
                                setSelectedDoctor(doctor);
                                setShowDoctorSheet(false);
                            }}
                        >
                            <div className="xa:flex xa:items-center xa:space-x-3">
                                <div className="xa:text-2xl">{doctor.avatar}</div>
                                <div className="xa:flex-1">
                                    <h3 className="xa:font-medium xa:text-gray-900">{doctor.name}</h3>
                                    <p className="xa:text-sm xa:text-gray-600">{doctor.specialty}</p>
                                    <p className="xa:text-sm xa:text-gray-500">{doctor.experience}</p>
                                    <div className="xa:flex xa:items-center xa:text-sm xa:text-gray-500 xa:mt-1">
                                        <Star size={14} className="xa:text-yellow-400 xa:mr-1" />
                                        {doctor.rating}
                                        <MapPin size={14} className="xa:ml-2 xa:mr-1" />
                                        {doctor.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </XBottomSheet>

            {/* Time Selection Bottom Sheet */}
            <XBottomSheet
                isOpen={showTimeSheet}
                onClose={() => setShowTimeSheet(false)}
                title="Chọn giờ khám"
            >
                <div className="xa:p-4">
                    <div className="xa:grid xa:grid-cols-3 xa:gap-3">
                        {timeSlots.map((time) => (
                            <XButton
                                key={time}
                                variant={selectedTime === time ? "highlight" : "neutral"}
                                level="secondary"
                                onClick={() => {
                                    setSelectedTime(time);
                                    setShowTimeSheet(false);
                                }}
                            >
                                {time}
                            </XButton>
                        ))}
                    </div>
                </div>
            </XBottomSheet>
        </div>
    );
}
