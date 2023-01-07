import { IFrame } from "@organisms/o-Iframe";
import type { GetOrgAdminDashboardDataQuery } from "@gentypes/index";
import AdminDashboardLayout from "@lib/layout/page-layout/admin-dashboard-layout";
import Grid from "@atoms/a-grid";
import StatisticCard from "@molecules/m-card-statistics";
import BarChart from "@organisms/o-chart-bar";
import { useAppSelector } from "@lib/hooks/redux-hooks";
import useFetchQuery from "@lib/hooks/fetch-query";

interface AnalyticsData {
  totalAmountOfMembershipPayments: {};
  totalAnnouncementCount: number;
  totalEventsCount: number;
  totalMembersCount: number;
}

function AdminDashboard() {
  return (
    <div className="h-screen w-full space-y-4">
      <div className="space-y-6">
        <h1 className="text-xl font-bold text-primaryColor">Dashboard</h1>
        <span className="flex space-x-1 pb-4">
          <p className="font-thin">Welcome back </p>
          <p className=" font-thin text-primaryColor">
            {" "}
            to your Admin Dashboard
          </p>
        </span>
      </div>
      <IFrame />
    </div>
  );
}

AdminDashboard.PageLayout = AdminDashboardLayout;

export default AdminDashboard;
