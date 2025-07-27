import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Hero } from './pages/hero/hero';
import { Features } from './pages/features/features';
import { AboutUs } from './pages/aboutUs/aboutUs';
import { ContactUs } from './pages/contactUs/contactUs';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { StudentDashboard } from './pages/student_dashboard/student_dashboard';

import { Cookies } from './components/cookies/cookies';
import { Chatbot } from './components/chatbot/chatbot';
import { HelpCenter } from './pages/help_center/help_center';
import { PrivacyPolicy } from './pages/privacy_policy/privacy_policy';
import { TermsAndConditions } from './pages/terms_conditions/terms_conditions';
import { ReportAProblem } from './pages/report_problem/report_problem';
import { Profile } from './pages/profile/profile';
import { Documents } from './pages/documents/documents';
import { Templates } from './pages/templates/templates';
import { Contacts } from './pages/contacts/contacts';
import { Drive } from './pages/drive/drive';
import { Applications } from './pages/application/application';

function App() {
    // For dark mode toggle, place toggle switch on setting
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.toggle('dark-theme', dark);
  }, [dark]);
  
  return (
    <Router>
      <Cookies />
      <Chatbot />
      <Routes>
        <Route path="/hero" element={<Hero />} />
        <Route path="/" element={<Hero />} />
        <Route path="/features" element={<Features />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/studentDashboard" element={<StudentDashboard />} />
        <Route path="/helpCenter" element={<HelpCenter />} />
        <Route path="/reportAProblem" element={<ReportAProblem />} />
        <Route path="/term&Condition" element={<TermsAndConditions />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/myProfile" element={<Profile />} />
        <Route path="/studendDocuments" element={<Documents />} />
        <Route path="/studendTemplates" element={<Templates />} />
        <Route path="/studendContacts" element={<Contacts />} />
        <Route path="/studendDrive" element={<Drive />} />
        <Route path="/studentApplication" element={<Applications />} />
      </Routes>
    </Router>
  );
}

export default App;
