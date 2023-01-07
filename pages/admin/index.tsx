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
      <Grid className="grid-cols-2 gap-x-2 md:grid-cols-4">
        <StatisticCard title="Members" value={3} />
        <StatisticCard title="Announcement" value={4} />
        <StatisticCard title="Training" value={9} />
        <StatisticCard title="Events" value={2} />
      </Grid>
      <div className="h-[34rem] overflow-hidden rounded-2xl bg-white p-6 drop-shadow-xl">
        <BarChart apiData={{}} />
      </div>
    </div>
  );
}

AdminDashboard.PageLayout = AdminDashboardLayout;

export default AdminDashboard;
