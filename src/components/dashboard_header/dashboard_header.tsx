import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../breadcrumps/breadcrumbs.tsx';
import {
    faBell,
    faCircleInfo,
    faHeadphones,
    faExclamationTriangle,
    faFileContract,
    faLock,
    faGear,
    faMoon,
    faArrowRightFromBracket,
    faChevronDown,
    faBars,
} from '@fortawesome/free-solid-svg-icons';
import './dashboard_header.css';

interface DashboardHeaderProps {
    toggleSideBar: () => void;
    showNotifMenu: boolean;
    setShowNotifMenu: React.Dispatch<React.SetStateAction<boolean>>;
    showHelpMenu: boolean;
    setShowHelpMenu: React.Dispatch<React.SetStateAction<boolean>>;
    showProfileMenu: boolean;
    setShowProfileMenu: React.Dispatch<React.SetStateAction<boolean>>;
    notifications: any[];
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
    toggleSideBar,
    showNotifMenu,
    setShowNotifMenu,
    showHelpMenu,
    setShowHelpMenu,
    showProfileMenu,
    setShowProfileMenu,
    notifications,
}) => {
  return (
    <header className='student-dashboard-header'>
      <div className='stud-menu-container'>
        <FontAwesomeIcon
          onClick={toggleSideBar}
          icon={faBars}
          className='hamburger-icon stud-menu-bar'
        />
        <Breadcrumbs />
      </div>

      <div className='student-dashboard-header-con'>
        <div className='student-dashboard-header-notif'>
          <FontAwesomeIcon
            icon={faBell}
            style={{ cursor: 'pointer' }}
            onClick={() => setShowNotifMenu((prev) => !prev)}
          />
          {showNotifMenu && (
            <div className='student-dashboard-header-notif-menu'>
              <div className='notif-menu-arrow'></div>
              <div className='notif-menu-header'>Notifications</div>
              <ul>
                {notifications.map((notif) => (
                  <li key={notif.id} className='notif-item'>
                    <div className='notif-avatar'></div>
                    <div className='notif-info'>
                      <span className='notif-user'>
                        <b>{notif.user}</b>
                      </span>{' '}
                      {notif.action} <b>{notif.file}</b>
                      <div className='notif-time'>{notif.time}</div>
                    </div>
                    {notif.unread && <span className='notif-dot'></span>}
                  </li>
                ))}
              </ul>
              <div className='notif-menu-footer'>
                <a href='#' className='notif-view-all'>
                  View all
                </a>
              </div>
            </div>
          )}
        </div>

        <div className='student-dashboard-header-help-menu-container'>
          <button
            className='student-dashboard-header-help'
            onClick={() => setShowHelpMenu((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faCircleInfo} />
          </button>
          {showHelpMenu && (
            <div className='student-dashboard-header-help-menu'>
              <ul>
                <li>
                  <Link to='/helpCenter'>
                    <FontAwesomeIcon icon={faHeadphones} /> Help Center
                  </Link>
                </li>
                <li>
                  <Link to='/reportAProblem'>
                    <FontAwesomeIcon icon={faExclamationTriangle} /> Report a Problem
                  </Link>
                </li>
                <li>
                  <Link to='/term&Condition'>
                    <FontAwesomeIcon icon={faFileContract} /> Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to='/privacyPolicy'>
                    <FontAwesomeIcon icon={faLock} /> Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className='student-dashboard-header-profile'>
          <div className='student-dashboard-header-profile-image'></div>
          <div className='student-dashboard-header-user-info'>
            <p className='student-dashboard-header-user'>
              Ian Domingo
            </p>
            <p className='student-dashboard-header-user-role'>Student</p>
          </div>
          
          <FontAwesomeIcon
            icon={faChevronDown}
            className='header-drop-down'
            style={{ cursor: 'pointer', marginLeft: '8px' }}
            onClick={() => setShowProfileMenu((prev) => !prev)}
          />

          {showProfileMenu && (
            <div className='student-dashboard-profile-menu'>
              <ul>
                <li>
                  <Link to='/myProfile'>My Profile</Link>
                </li>
                <li>
                  <Link to='/settingsPrivacy'>
                    <FontAwesomeIcon icon={faGear} /> Settings & Privacy <span>&#8250;</span>
                  </Link>
                </li>
                <li>
                  <Link to='/displayAcce'>
                    <FontAwesomeIcon icon={faMoon} /> Display & Accessibility <span>&#8250;</span>
                  </Link>
                </li>
                <li>
                  <Link to='/logOut'>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} /> Log out
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
