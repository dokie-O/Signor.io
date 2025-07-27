import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';

interface SidebarProps {
    sideBarOpen: boolean;
    setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar: React.FC<SidebarProps> = ({ sideBarOpen, setSideBarOpen }) => {
    const sidebarRef = useRef<HTMLElement | null>(null);
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setSideBarOpen(false);
            }
        };

        if (sideBarOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sideBarOpen, setSideBarOpen]);

    return (
        <nav
            ref={sidebarRef as React.RefObject<HTMLElement>}
            className={`student-dashboard-side-bar stud-side-bar ${sideBarOpen ? 'show' : ''}`}
        >
            <div className='dashboard-logos'>
                <div className='dashboard-fox-logo'></div>
                <div className='dashboard-signor-logo'></div>
            </div>

            <ul className='student-dashboard-side-bar-links'>
                <li className={currentPath === '/studentDashboard' ? 'active' : ''}>
                    <Link to='/studentDashboard' className='link'>Dashboard</Link>
                </li>
                <li className={currentPath === '/studendDocuments' ? 'active' : ''}>
                    <Link to='/studendDocuments' className='link'>Documents</Link>
                </li>
                <li className={currentPath === '/studendTemplates' ? 'active' : ''}>
                    <Link to='/studendTemplates' className='link'>Templates</Link>
                </li>
                <li className={currentPath === '/studendContacts' ? 'active' : ''}>
                    <Link to='/studendContacts' className='link'>Contacts</Link>
                </li>
                <li className={currentPath === '/studendDrive' ? 'active' : ''}>
                    <Link to='/studendDrive' className='link'>Drive</Link>
                </li>
                <li className={currentPath === '/studentApplication' ? 'active' : ''}>
                    <Link to='/studentApplication' className='link'>Application</Link>
                </li>
            </ul>
        </nav>
    );
};
