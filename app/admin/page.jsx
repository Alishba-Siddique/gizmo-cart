'use client';
import { dummyAdminDashboardData } from '@/assets/assets';
import Loading from '@/components/Loading';
import {
  CircleDollarSignIcon,
  ShoppingBasketIcon,
  StoreIcon,
  TagsIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const OrdersAreaChart = dynamic(() => import('@/components/OrdersAreaChart'), {
  ssr: false,
  loading: () => <p className="text-center text-zinc-400">Loading chart...</p>,
});

export default function AdminDashboard() {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$';

  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    products: 0,
    revenue: 0,
    orders: 0,
    stores: 0,
    allOrders: [],
  });

  const dashboardCardsData = [
    {
      title: 'Total Products',
      value: dashboardData.products,
      icon: ShoppingBasketIcon,
    },
    {
      title: 'Total Revenue',
      value: currency + dashboardData.revenue,
      icon: CircleDollarSignIcon,
    },
    { title: 'Total Orders', value: dashboardData.orders, icon: TagsIcon },
    { title: 'Total Stores', value: dashboardData.stores, icon: StoreIcon },
  ];

  const fetchDashboardData = async () => {
    setDashboardData(dummyAdminDashboardData);
    setLoading(false);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="text-zinc-500">
      <h1 className="text-2xl">
        Admin <span className="text-zinc-800 font-medium">Dashboard</span>
      </h1>

      {/* Cards */}
      <div className="flex flex-wrap gap-5 my-10 mt-4">
        {dashboardCardsData.map((card, index) => (
          <div
            key={index}
            className="flex items-center gap-10 border border-zinc-200 p-3 px-6 rounded-lg"
          >
            <div className="flex flex-col gap-3 text-xs">
              <p>{card.title}</p>
              <b className="text-2xl font-medium text-zinc-700">{card.value}</b>
            </div>
            <card.icon
              size={50}
              className=" w-11 h-11 p-2.5 text-zinc-400 bg-zinc-100 rounded-full"
            />
          </div>
        ))}
      </div>

      {/* Area Chart */}
      <OrdersAreaChart allOrders={dashboardData.allOrders} />
    </div>
  );
}
