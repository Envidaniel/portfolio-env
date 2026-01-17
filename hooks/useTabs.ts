import { tabs } from "@/components/navigation/tabs.config";
import { useState } from "react";



export function useTabs() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

    return { tabs, activeTab, ActiveComponent, setActiveTab }
}