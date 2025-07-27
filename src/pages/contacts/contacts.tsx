import { DashboardLayout } from "../../layout/dashboard_layout/dashboardlayout";

export const Contacts = () => {
    return (
        <>
            <DashboardLayout>
                <div className="contacts-top-bar">
                    <div className="contacts-type-tabs">
                    <button className="tab active">Student</button>
                    <button className="tab">Teacher</button>
                    </div>
                    <button className="add-contact-button">Add Contact</button>
                </div>
            </DashboardLayout>
        </>
    )
}