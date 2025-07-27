import React, { useState } from 'react';
import { Sidebar } from '../../components/sidebar/sidebar';
import './dashboardlayout.css';
import { DashboardHeader } from '../../components/dashboard_header/dashboard_header';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children}) => {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const [showNotifMenu, setShowNotifMenu] = useState(false);
    const [showHelpMenu, setShowHelpMenu] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const notifications = [
        {
            id: 1,
            user: 'Domingo, Joshua Ianmar C.',
            action: 'has signed',
            file: 'Nica.pdf',
            time: '4 hrs ago',
            unread: true,
        },
        {
            id: 1,
            user: 'Domingo, Joshua Ianmar C.',
            action: 'has signed',
            file: 'Nica.pdf',
            time: '4 hrs ago',
            unread: true,
        },        {
            id: 1,
            user: 'Domingo, Joshua Ianmar C.',
            action: 'has signed',
            file: 'Nica.pdf',
            time: '4 hrs ago',
            unread: true,
        },        {
            id: 1,
            user: 'Domingo, Joshua Ianmar C.',
            action: 'has signed',
            file: 'Nica.pdf',
            time: '4 hrs ago',
            unread: true,
        },        {
            id: 1,
            user: 'Domingo, Joshua Ianmar C.',
            action: 'has signed',
            file: 'Nica.pdf',
            time: '4 hrs ago',
            unread: true,
        },        {
            id: 1,
            user: 'Domingo, Joshua Ianmar C.',
            action: 'has signed',
            file: 'Nica.pdf',
            time: '4 hrs ago',
            unread: true,
        },        {
            id: 1,
            user: 'Domingo, Joshua Ianmar C.',
            action: 'has signed',
            file: 'Nica.pdf',
            time: '4 hrs ago',
            unread: true,
        },        {
            id: 1,
            user: 'Domingo, Joshua Ianmar C.',
            action: 'has signed',
            file: 'Nica.pdf',
            time: '4 hrs ago',
            unread: true,
        },
    ];

    const toggleSideBar = () => {
        setSideBarOpen(prev => !prev);
    };

    return (
        <div className='student-dashboard'>
        <div className='student-dashboard-col1'>
            <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={() => toggleSideBar()} />
        </div>
        <div className='student-dashboard-col2'>
            <DashboardHeader
                toggleSideBar={toggleSideBar}
                showNotifMenu={showNotifMenu}
                setShowNotifMenu={setShowNotifMenu}
                showHelpMenu={showHelpMenu}
                setShowHelpMenu={setShowHelpMenu}
                showProfileMenu={showProfileMenu}
                setShowProfileMenu={setShowProfileMenu}
                notifications={notifications}
            />

            {children}
        </div>
        </div>
    );
};
