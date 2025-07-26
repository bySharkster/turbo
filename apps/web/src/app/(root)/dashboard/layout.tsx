import { Metadata } from 'next';
import { DashboardLayoutProvider } from '@/src/components/templates/providers/layout-dashboard-provider';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayoutProvider>{children}</DashboardLayoutProvider>;
}
