import React, { useEffect, useState } from 'react';
import { DashboardLayout } from '../../layout/dashboard_layout/dashboardlayout';
import { DashboardHeader } from '../../components/dashboard_header/dashboard_header';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './student_dashboard.css';


type Activity = {
  id: number;
  fileName: string;
  dateCreated: string;
  status: string;
};

export const StudentDashboard = () => {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const [showNotifMenu, setShowNotifMenu] = useState(false);
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

    useEffect(() => {
        setTimeout(() => {
            setActivities([
                {
                id: 1,
                fileName: 'Nica.pdf',
                dateCreated: '10/20/2025',
                status: 'Completed 3hrs ago',
                },
                {
                id: 2,
                fileName: 'Report.pdf',
                dateCreated: '10/19/2025',
                status: 'Viewed 2hrs ago',
                },
                {
                id: 3,
                fileName: 'Report.pdf',
                dateCreated: '10/19/2025',
                status: 'Rejected 1hr ago',
                },
                {
                id: 4,
                fileName: 'Report.pdf',
                dateCreated: '10/19/2025',
                status: 'Viewed 2hrs ago',
                },
                {
                id: 5,
                fileName: 'Report.pdf',
                dateCreated: '10/19/2025',
                status: 'Viewed 2hrs ago',
                },
                {
                id: 6,
                fileName: 'Nica.pdf',
                dateCreated: '10/20/2025',
                status: 'Sent 3hrs ago',
                },
                {
                id: 7,
                fileName: 'Report.pdf',
                dateCreated: '10/19/2025',
                status: 'Viewed 2hrs ago',
                },
                {
                id: 8,
                fileName: 'Report.pdf',
                dateCreated: '10/19/2025',
                status: 'Viewed 2hrs ago',
                },
                {
                id: 9,
                fileName: 'Report.pdf',
                dateCreated: '10/19/2025',
                status: 'Viewed 2hrs ago',
                },
                {
                id: 10,
                fileName: 'Report.pdf',
                dateCreated: '10/19/2025',
                status: 'Viewed 2hrs ago',
                },
            ]);
        }, 500);
    }, []);

    const getStatusClass = (status: string) => {
        const lower = status.toLowerCase();
        if (lower.includes('rejected')) return 'status-rejected';
        if (lower.includes('completed')) return 'status-completed';
        return '';
    };

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            const allIds = activities.map((activity) => activity.id);
            setSelectedIds(allIds);
        } else {
            setSelectedIds([]);
        }
    };

    const handleCheckboxChange = (id: number) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    return (
        <DashboardLayout>
            <div className='student-dashboard-col2'>
                <main className='student-dashboard-content'>
                    <h1 className='student-dash-board-greetings'>Welcome, Ian!</h1> {/* Username */} 
                    <section className='student-dashboard-content-stats'>
                        <div className='stats-box unsigned-docs'>
                            <div className='unsigned-docs-image'></div>
                            <div className='stats-box-info unsigned-docs-info'>
                                <h1>10</h1>
                                <p>Unsigned Documents</p>
                            </div>
                        </div>
                        <div className='stats-box completed'>
                            <div className='completed-image'></div>
                            <div className='stats-box-info completed-info'>
                                <h1>10</h1>
                                <p>Completed</p>
                            </div>
                        </div>
                        <div className='stats-box pending'>
                            <div className='pending-image'></div>
                            <div className='stats-box-info pending-info'>
                                <h1>10</h1>
                                <p>Pending</p>
                            </div>
                        </div>
                        <div className='stats-box rejected'>
                            <div className='rejected-image'></div>
                            <div className='stats-box-info rejected-info'>
                                <h1>10</h1>
                                <p>Rejected</p>
                            </div>
                        </div>
                    </section>  

                    <section className='student-dashboard-row2'>
                        <div className='student-dashboard-row2-col1'>
                            <div className='recent-activity-topbar'></div>
                            <div className='student-dashboard-row2-col1-header'>
                                <h2>Recent Activity</h2>
                                <label className='student-dashboard-select-all-btn'>
                                    <input
                                        type='checkbox'
                                        id='select-all-checkbox'
                                        onChange={handleSelectAll}
                                        checked={selectedIds.length === activities.length && activities.length > 0}
                                    />
                                    Select All
                                </label>
                            </div>
                            <article className='student-dashboard-row2-col1-activity-info'>
                                <div className='activity-info-container'>
                                    {activities.map((activity) => (
                                        <div className='activity-info-box' key={activity.id}>
                                            <div className='activity-info-col1'>
                                                <div className='checkbox-and-text'>
                                                    <input
                                                        type='checkbox'
                                                        checked={selectedIds.includes(activity.id)}
                                                        onChange={() => handleCheckboxChange(activity.id)}
                                                    />
                                                    <div className='file-info'>
                                                        <h3>{activity.fileName}</h3>
                                                        <p>
                                                            <span className='label-accent'>Date Created:</span>{' '}
                                                            {activity.dateCreated}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='activity-info-col2'>
                                                <p className={`status-text ${getStatusClass(activity.status)}`}>
                                                    <span className='label-accent'>Status:</span> {activity.status}
                                                </p>
                                            </div>
                                            <div className='activity-info-col3'>
                                                <button id='view-btn'>View</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        </div>
                            <div className='student-dashboard-row2-col2'>
                                <div className='calendar-card'>
                                    <Calendar />
                                </div>
                                <div className='reminders'>
                                    <h1>Reminders</h1>
                                    <p>Don't forgot your due tomorrow</p>

                                    <div className='reminder-card'>
                                        <div className='reminder-icon'>
                                            <span role='img' aria-label='calendar' style={{fontSize: '1.5rem', color: '#3344EE'}}>📅</span>
                                        </div>
                                        <div className='reminder-info'>
                                            <div className='reminder-title'>Signing for Agreement Form</div>
                                            <div className='reminder-date'>03/09/2025</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </section>
                </main>
            </div>
        </DashboardLayout>
    )
};