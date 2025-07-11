// Importing necessary libraries and components
import { SidebarProvider,SidebarTrigger } from '@/components/ui/sidebar';
import { Outlet } from 'react-router';

// Importing custom sidebar component
import CustomSidebar from './components/custom/CustomSidebar';

// Layout component
const Layout = () => {
    return (
        <>
            <div className="flex">
                <div>
                <SidebarProvider>
                    <CustomSidebar /> 
                    <SidebarTrigger />
                </SidebarProvider>
                </div>
                <div className='overflow-hidden w-full'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout