import EventAttendanceWrapper from '@lib/hoc/event-attendance-wrapper';
import AttendanceFooterSection from '@molecules/m-attendance-footer-section';
import PeddlesoftAttendanceFeature from '@molecules/m-peddlesoft-attendance-feature-section';
import PeddlesoftAttendanceSalesAdSection from '@molecules/m-peddlesoft-attendance-sales-ad-section';
import PeddlesoftDownloadAppSection from '@molecules/m-peddlesoft-download-app-section';

interface EventAttendanceLayoutProps {
    children: React.ReactNode;
}

function EventAttendanceLayout({ children }: EventAttendanceLayoutProps) {
    return (
        <div>
            {children}
            <PeddlesoftAttendanceFeature />
            <PeddlesoftAttendanceSalesAdSection />
            <PeddlesoftDownloadAppSection />
            <AttendanceFooterSection />
        </div>
    );
}

export default EventAttendanceWrapper(EventAttendanceLayout);
