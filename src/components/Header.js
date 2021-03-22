import '../assets/css/colors/blue.css'
import React from 'react';
import '../assets/css/colors/blue.css'
import '../assets/css/style.css'

import logo from '../assets/images/logo.png';
import avatarsm3 from '../assets/images/user-avatar-small-03.jpg';
import avatarsm2 from '../assets/images/user-avatar-small-02.jpg';
import avatarsm1 from '../assets/images/user-avatar-big-01.jpg';
import avatarsmph from '../assets/images/user-avatar-placeholder.png';


function Header() {

    return (

        <div id="wrapper">
            <header id="header-container" className="fullwidth">

                {/* Header */}
                <div id="header">
                    <div className="container">

                        {/* Left Side Content */}
                        <div className="left-side"  >

                            {/* Logo */}
                            <div id="logo" style={{ width: '20.4%', padding: '0px' }}>
                                <a href="/"><img src={logo} alt=""></img></a>
                            </div>

                            {/* Main Navigation */}
                            <nav id="navigation">
                                <ul id="responsive">

                                    <li><a href="/" className="current">Home</a>
                                        {/* <ul className="dropdown-nav">
                                            <li><a href="index.html">Home 1</a></li>
                                            <li><a href="index-2.html">Home 2</a></li>
                                            <li><a href="index-3.html">Home 3</a></li>
                                        </ul> */}
                                    </li>

                                    <li><a href="#">Search</a>
                                        <ul className="dropdown-nav">
                                            <li><a href="/jobs">Find Jobs</a>
                                                {/* <ul className="dropdown-nav">
                                                    <li><a href="jobs-list-layout-full-page-map.html">Full Page List + Map</a></li>
                                                    <li><a href="jobs-grid-layout-full-page-map.html">Full Page Grid + Map</a></li>
                                                    <li><a href="jobs-grid-layout-full-page.html">Full Page Grid</a></li>
                                                    <li><a href="jobs-list-layout-1.html">List Layout 1</a></li>
                                                    <li><a href="jobs-list-layout-2.html">List Layout 2</a></li>
                                                    <li><a href="jobs-grid-layout.html">Grid Layout</a></li>
                                                </ul> */}
                                            </li>
                                            {/* <li><a href="#">Browse Tasks</a>
                                                <ul className="dropdown-nav">
                                                    <li><a href="tasks-list-layout-1.html">List Layout 1</a></li>
                                                    <li><a href="tasks-list-layout-2.html">List Layout 2</a></li>
                                                    <li><a href="tasks-grid-layout.html">Grid Layout</a></li>
                                                    <li><a href="tasks-grid-layout-full-page.html">Full Page Grid</a></li>
                                                </ul>
                                            </li> */}
                                            {/* <li><a href="browse-companies.html">Browse Companies</a></li> */}
                                            <li><a href="/singleJobPage">Job Page</a></li>
                                            {/* <li><a href="single-task-page.html">Task Page</a></li> */}
                                            <li><a href="/employee">User Profile</a></li>
                                            <li><a href="/employeeManageJobs">Applied Jobs</a></li>
                                        </ul>
                                    </li>

                                    <li><a href="#">Earn</a>
                                        <ul className="dropdown-nav">
                                            <li><a href="/postJob">Post a Job</a></li>
                                            <li><a href="/manageJobs">Manage Jobs</a></li>
                                            <li><a href="/manageCandidates">Manage Candidates</a></li>
                                            <li><a href="/questionBank">Question Bank</a></li>
                                            <li><a href="/addQuestion">Add Questions</a></li>
                                        </ul>
                                    </li>

                                    {/* <li><a href="#">FAQ</a>
                                        <ul className="dropdown-nav">
                                            <li><a href="dashboard.html">Dashboard</a></li>
                                            <li><a href="dashboard-messages.html">Messages</a></li>
                                            <li><a href="dashboard-bookmarks.html">Bookmarks</a></li>
                                            <li><a href="dashboard-reviews.html">Reviews</a></li>
                                            <li><a href="dashboard-manage-jobs.html">Jobs</a>
                                                <ul className="dropdown-nav">
                                                    <li><a href="dashboard-manage-jobs.html">Manage Jobs</a></li>
                                                    <li><a href="dashboard-manage-candidates.html">Manage Candidates</a></li>
                                                    <li><a href="dashboard-post-a-job.html">Post a Job</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="dashboard-manage-tasks.html">Tasks</a>
                                                <ul className="dropdown-nav">
                                                    <li><a href="dashboard-manage-tasks.html">Manage Tasks</a></li>
                                                    <li><a href="dashboard-manage-bidders.html">Manage Bidders</a></li>
                                                    <li><a href="dashboard-my-active-bids.html">My Active Bids</a></li>
                                                    <li><a href="dashboard-post-a-task.html">Post a Task</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="dashboard-settings.html">Settings</a></li>
                                        </ul>
                                    </li> */}

                                    {/* <li><a href="#">Careers</a>
                                        <ul className="dropdown-nav">
                                            <li><a href="pages-blog.html">Blog</a></li>
                                            <li><a href="pages-pricing-plans.html">Pricing Plans</a></li>
                                            <li><a href="pages-checkout-page.html">Checkout Page</a></li>
                                            <li><a href="pages-invoice-template.html">Invoice Template</a></li>
                                            <li><a href="pages-user-interface-elements.html">User Interface Elements</a></li>
                                            <li><a href="pages-icons-cheatsheet.html">Icons Cheatsheet</a></li>
                                            <li><a href="pages-login.html">Login & Register</a></li>
                                            <li><a href="pages-404.html">404 Page</a></li>
                                            <li><a href="pages-contact.html">Contact</a></li>
                                        </ul>
                                    </li> */}
                                    <li><a href="/earn/home">Learn</a>
                                        {/* <ul className="dropdown-nav">
                                            <li><a href="pages-blog.html">Blog</a></li>
                                            <li><a href="pages-pricing-plans.html">Pricing Plans</a></li>
                                            <li><a href="pages-checkout-page.html">Checkout Page</a></li>
                                            <li><a href="pages-invoice-template.html">Invoice Template</a></li>
                                            <li><a href="pages-user-interface-elements.html">User Interface Elements</a></li>
                                            <li><a href="pages-icons-cheatsheet.html">Icons Cheatsheet</a></li>
                                            <li><a href="pages-login.html">Login & Register</a></li>
                                            <li><a href="pages-404.html">404 Page</a></li>
                                            <li><a href="pages-contact.html">Contact</a></li>
                                        </ul> */}
                                    </li>
                                    <li><a href="/resume">Contact Us </a>
                                        {/* <ul className="dropdown-nav">
                                            <li><a href="pages-blog.html">Blog</a></li>
                                            <li><a href="pages-pricing-plans.html">Pricing Plans</a></li>
                                            <li><a href="pages-checkout-page.html">Checkout Page</a></li>
                                            <li><a href="pages-invoice-template.html">Invoice Template</a></li>
                                            <li><a href="pages-user-interface-elements.html">User Interface Elements</a></li>
                                            <li><a href="pages-icons-cheatsheet.html">Icons Cheatsheet</a></li>
                                            <li><a href="pages-login.html">Login & Register</a></li>
                                            <li><a href="pages-404.html">404 Page</a></li>
                                            <li><a href="pages-contact.html">Contact</a></li>
                                        </ul> */}
                                    </li>

                                </ul>
                            </nav>
                            <div className="clearfix"></div>
                            {/* Main Navigation / End */}

                        </div>
                        {/* Left Side Content / End */}


                        {/* Right Side Content / End */}
                        <div className="right-side">

                            {/*  User Notifications */}
                            <div className="header-widget hide-on-mobile">

                                {/* 1.--------Bell Notifications------ */}
                                <div className="header-notifications">

                                    {/* Trigger */}
                                    <div className="header-notifications-trigger">
                                        <a href="#"><i className="icon-feather-bell" ></i><span style={{ backgroundColor: '#2a41e8' }}>4</span></a>
                                    </div>

                                    {/* Dropdown */}
                                    <div className="header-notifications-dropdown">

                                        <div className="header-notifications-headline">
                                            <h4>Notifications</h4>
                                            <button className="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
                                                <i className="icon-feather-check-square"></i>
                                            </button>
                                        </div>

                                        <div className="header-notifications-content">
                                            <div className="header-notifications-scroll" data-simplebar>
                                                <ul>
                                                    {/* Notification */}
                                                    <li className="notifications-not-read">
                                                        <a href="dashboard-manage-candidates.html">
                                                            <span className="notification-icon"><i className="icon-material-outline-group"></i></span>
                                                            <span className="notification-text">
                                                                <strong>Michael Shannah</strong> applied for a job <span className="color">Full Stack Software Engineer</span>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    {/* Notification */}
                                                    <li>
                                                        <a href="dashboard-manage-bidders.html">
                                                            <span className="notification-icon"><i className=" icon-material-outline-gavel"></i></span>
                                                            <span className="notification-text">
                                                                <strong>Gilbert Allanis</strong> placed a bid on your <span className="color">iOS App Development</span> project
                                                    </span>
                                                        </a>
                                                    </li>

                                                    {/* Notification */}
                                                    <li>
                                                        <a href="dashboard-manage-jobs.html">
                                                            <span className="notification-icon"><i className="icon-material-outline-autorenew"></i></span>
                                                            <span className="notification-text">
                                                                Your job listing <span className="color">Full Stack PHP Developer</span> is expiring.
                                                    </span>
                                                        </a>
                                                    </li>

                                                    {/* Notification */}
                                                    <li>
                                                        <a href="dashboard-manage-candidates.html">
                                                            <span className="notification-icon"><i className="icon-material-outline-group"></i></span>
                                                            <span className="notification-text">
                                                                <strong>Sindy Forrest</strong> applied for a job <span className="color">Full Stack Software Engineer</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                </div>


                                {/* 2.---------For wishlist ------- */}
                                <div className="header-notifications">

                                    {/* Trigger */}
                                    <div className="header-notifications-trigger">
                                        <a href="/cart">
                                            <i className="icon-material-outline-shopping-cart" ></i>
                                            {/* <span style={{ backgroundColor: '#2a41e8' }}>4</span> */}
                                        </a>
                                    </div>

                                    {/* Dropdown */}
                                    <div className="header-notifications-dropdown">

                                        <div className="header-notifications-headline">
                                            <h4>Notifications</h4>
                                            <button className="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
                                                <i className="icon-feather-check-square"></i>
                                            </button>
                                        </div>

                                        <div className="header-notifications-content">
                                            <div className="header-notifications-scroll" data-simplebar>
                                                <ul>
                                                    {/* Notification */}
                                                    <li className="notifications-not-read">
                                                        <a href="dashboard-manage-candidates.html">
                                                            <span className="notification-icon"><i className="icon-material-outline-group"></i></span>
                                                            <span className="notification-text">
                                                                <strong>Michael Shannah</strong> applied for a job <span className="color">Full Stack Software Engineer</span>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    {/* Notification */}
                                                    <li>
                                                        <a href="dashboard-manage-bidders.html">
                                                            <span className="notification-icon"><i className=" icon-material-outline-gavel"></i></span>
                                                            <span className="notification-text">
                                                                <strong>Gilbert Allanis</strong> placed a bid on your <span className="color">iOS App Development</span> project
                                                    </span>
                                                        </a>
                                                    </li>

                                                    {/* Notification */}
                                                    <li>
                                                        <a href="dashboard-manage-jobs.html">
                                                            <span className="notification-icon"><i className="icon-material-outline-autorenew"></i></span>
                                                            <span className="notification-text">
                                                                Your job listing <span className="color">Full Stack PHP Developer</span> is expiring.
                                                    </span>
                                                        </a>
                                                    </li>

                                                    {/* Notification */}
                                                    <li>
                                                        <a href="dashboard-manage-candidates.html">
                                                            <span className="notification-icon"><i className="icon-material-outline-group"></i></span>
                                                            <span className="notification-text">
                                                                <strong>Sindy Forrest</strong> applied for a job <span className="color">Full Stack Software Engineer</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                {/*3. ---------Wallet ------ */}
                                <div className="header-notifications">

                                    {/* Trigger */}
                                    <div className="header-notifications-trigger">
                                        <a href="/wallet">
                                            <i className="icon-material-outline-account-balance-wallet" ></i>
                                            {/* <span style={{ backgroundColor: '#2a41e8' }}>4</span> */}
                                        </a>
                                    </div>

                                    {/* Dropdown */}
                                    <div className="header-notifications-dropdown">

                                        <div className="header-notifications-headline">
                                            <h4>Notifications</h4>
                                            <button className="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
                                                <i className="icon-feather-check-square"></i>
                                            </button>
                                        </div>

                                        <div className="header-notifications-content">
                                            <div className="header-notifications-scroll" data-simplebar>
                                                <ul>
                                                    {/* Notification */}
                                                    <li className="notifications-not-read">
                                                        <a href="dashboard-manage-candidates.html">
                                                            <span className="notification-icon"><i className="icon-material-outline-group"></i></span>
                                                            <span className="notification-text">
                                                                <strong>Michael Shannah</strong> applied for a job <span className="color">Full Stack Software Engineer</span>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    {/* Notification */}
                                                    <li>
                                                        <a href="dashboard-manage-bidders.html">
                                                            <span className="notification-icon"><i className=" icon-material-outline-gavel"></i></span>
                                                            <span className="notification-text">
                                                                <strong>Gilbert Allanis</strong> placed a bid on your <span className="color">iOS App Development</span> project
                                                    </span>
                                                        </a>
                                                    </li>

                                                    {/* Notification */}
                                                    <li>
                                                        <a href="dashboard-manage-jobs.html">
                                                            <span className="notification-icon"><i className="icon-material-outline-autorenew"></i></span>
                                                            <span className="notification-text">
                                                                Your job listing <span className="color">Full Stack PHP Developer</span> is expiring.
                                                    </span>
                                                        </a>
                                                    </li>

                                                    {/* Notification */}
                                                    <li>
                                                        <a href="dashboard-manage-candidates.html">
                                                            <span className="notification-icon"><i className="icon-material-outline-group"></i></span>
                                                            <span className="notification-text">
                                                                <strong>Sindy Forrest</strong> applied for a job <span className="color">Full Stack Software Engineer</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                {/* Messages */}
                                {/* <div className="header-notifications">
                                    <div className="header-notifications-trigger">
                                        <a href="#"><i className="icon-feather-mail"></i><span>3</span></a>
                                    </div> */}

                                {/* Dropdown */}
                                {/* <div className="header-notifications-dropdown">

                                        <div className="header-notifications-headline">
                                            <h4>Messages</h4>
                                            <button className="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
                                                <i className="icon-feather-check-square"></i>
                                            </button>
                                        </div>

                                        <div className="header-notifications-content">
                                            <div className="header-notifications-scroll" data-simplebar>
                                                <ul> */}
                                {/* Notification */}
                                {/* <li className="notifications-not-read">
                                                        <a href="dashboard-messages.html">
                                                            <span className="notification-avatar status-online"><img src={avatarsm3} alt=""></img></span>
                                                            <div className="notification-text">
                                                                <strong>David Peterson</strong>
                                                                <p className="notification-msg-text">Thanks for reaching out. I'm quite busy right now on many...</p>
                                                                <span className="color">4 hours ago</span>
                                                            </div>
                                                        </a>
                                                    </li>

                                                    {/* Notification */}
                                {/* <li className="notifications-not-read">
                                    <a href="dashboard-messages.html">
                                        <span className="notification-avatar status-offline"><img src={avatarsm2} alt=""></img></span>
                                        <div className="notification-text">
                                            <strong>Sindy Forest</strong>
                                            <p className="notification-msg-text">Hi Tom! Hate to break it to you, but I'm actually on vacation until...</p>
                                            <span className="color">Yesterday</span>
                                        </div>
                                    </a>
                                </li>  */}

                                {/* Notification */}
                                {/* <li className="notifications-not-read">
                                                        <a href="dashboard-messages.html">
                                                            <span className="notification-avatar status-online"><img src={avatarsmph} alt=""></img></span>
                                                            <div className="notification-text">
                                                                <strong>Marcin Kowalski</strong>
                                                                <p className="notification-msg-text">I received payment. Thanks for cooperation!</p>
                                                                <span className="color">Yesterday</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <a href="dashboard-messages.html" className="header-notifications-button ripple-effect button-sliding-icon">View All Messages<i className="icon-material-outline-arrow-right-alt"></i></a>
                                    </div>
                                </div> */}

                            </div>
                            {/*  User Notifications / End */}

                            {/* User Menu */}
                            <div className="header-widget">

                                {/* Messages */}
                                <div className="header-notifications user-menu">
                                    <div className="header-notifications-trigger">
                                        <a href="/employee"><div className="user-avatar status-online"><img src={avatarsm1} alt=""></img></div></a>
                                    </div>

                                    {/* Dropdown */}
                                    <div className="header-notifications-dropdown dropdown-nav">

                                        {/* User Status */}
                                        <div className="user-status">

                                            {/* User Name / Avatar */}
                                            <div class="user-details">
                                                <div class="user-avatar status-online"><img src={avatarsm1} alt=""></img></div>
                                                <div class="user-name">
                                                    Tom Smith <span>Freelancer</span>
                                                </div>
                                            </div>

                                            {/* User Status Switcher */}
                                            <div className="status-switch" id="snackbar-user-status">
                                                <label className="user-online current-status">Online</label>
                                                <label className="user-invisible">Invisible</label>
                                                {/* Status Indicator */}
                                                <span className="status-indicator" aria-hidden="true"></span>
                                            </div>
                                        </div>

                                        <ul className="user-menu-small-nav">
                                            <li><a href="dashboard.html"><i className="icon-material-outline-dashboard"></i> Dashboard</a></li>
                                            <li><a href="dashboard-settings.html"><i className="icon-material-outline-settings"></i> Settings</a></li>
                                            <li><a href="index-logged-out.html"><i className="icon-material-outline-power-settings-new"></i> Logout</a></li>
                                        </ul>


                                    </div>

                                </div>
                                {/* User Menu / End */}

                                {/* Mobile Navigation Button */}
                                <span className="mmenu-trigger">
                                    <button className="hamburger hamburger--collapse" type="button">
                                        <span className="hamburger-box">
                                            <span className="hamburger-inner"></span>
                                        </span>
                                    </button>
                                </span>

                            </div>
                            {/* Right Side Content / End */}

                        </div>
                    </div>
                </div>
                {/* Header / End */}

            </header>
            <div className="clearfix"></div>
            {/* Header Container / End */}

        </div >

    )
}

export default Header;