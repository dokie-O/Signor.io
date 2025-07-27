import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './breadcrumbs.css';

const routeNameMap: Record<string, string> = {
    studentDashboard: 'Dashboard',
    studendDocuments: 'Documents',
    studendTemplates: 'Templates',
    studendContacts: 'Contacts',
    studendDrive: 'Drive',
    studentApplication: 'Applications',
};

const Breadcrumbs: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(Boolean); // removes empty segments

    return (
        <nav className="student-dashboard-breadcrumbs">
            <ul>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    const label = routeNameMap[name] ?? (
                        name
                            .replace(/-/g, ' ')
                            .replace(/\b\w/g, l => l.toUpperCase())
                    );

                    return (
                        <React.Fragment key={routeTo}>
                            {index > 0 && <li><span>&gt;</span></li>}
                            <li>
                                {isLast ? (
                                    <span className="active-breadcrumb">{label}</span>
                                ) : (
                                    <Link to={routeTo}>{label}</Link>
                                )}
                            </li>
                        </React.Fragment>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
