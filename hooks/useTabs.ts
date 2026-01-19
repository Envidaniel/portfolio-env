import { tabs } from "@/components/navigation/tabs.config";
import { useState } from "react";



export function useTabs() {
    const [activeTab, setActiveTab] = useState<string>(tabs[0].id)

    const ActiveComponent: React.ComponentType | undefined = tabs.find(tab => tab.id === activeTab)?.component;

    return { tabs, activeTab, ActiveComponent, setActiveTab }
}