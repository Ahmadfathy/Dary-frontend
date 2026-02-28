import {
  PropertyStats,
  RevenueChart,
  MarketOverview,
  RecentListings,
  UpcomingViewings,
  ActiveAgents,
} from './components';

export function Demo1LightSidebarContent() {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <div className="grid lg:grid-cols-3 gap-y-5 lg:gap-7.5 items-stretch">
        <div className="lg:col-span-1">
          <div className="grid grid-cols-2 gap-5 lg:gap-7.5 h-full items-stretch">
            <PropertyStats />
          </div>
        </div>
        <div className="lg:col-span-2">
          <MarketOverview className="h-full" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
        <div className="lg:col-span-1">
          <RecentListings limit={3} />
        </div>
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
        <div className="lg:col-span-1">
          <UpcomingViewings />
        </div>
        <div className="lg:col-span-2">
          <ActiveAgents />
        </div>
      </div>
    </div>
  );
}
