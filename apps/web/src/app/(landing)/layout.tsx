import { Navbar } from '@/src/components/templates/layouts/navbar';
import { LayoutMainProvider } from '@/src/components/templates/providers/layout-main-provider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'TaskMeIn',
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LayoutMainProvider>
        <header className="flex flex-row items-center justify-between p-4 gap-4 h-16 ">
          <Navbar />
        </header>
        {children}
      </LayoutMainProvider>
    </>
  );
}
