// Importing necessary components and libraries
import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton
} from "@/components/ui/sidebar";

// Importing icons and Link component
import { Home, Inbox } from "lucide-react";
import { Link } from "react-router";

// Custom Sidebar component
const CustomSidebar = () => {

    // Sidebar items with title, URL, and icon
    const items = [
        {
            title: "All Announcements",
            url: "/",
            icon: Home,
        },
        {
            title: "Create Announcement",
            url: "/create-announcement",
            icon: Inbox,
        }
    ];



    return (

        // Sidebar component with header and content
        <Sidebar className="pl-6">
            <SidebarHeader>
                <h1 className="text-2xl font-bold">SincX <span className="text-red-500">Learn</span></h1>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item, index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.url} className="flex items-center gap-2">
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};

export default CustomSidebar;
