import Layout from "../../components/Layout"
import { EditProfile } from "../../components/profile"

export default function BaseEditProfile() {

    const breadcrumbLinks = [
        {
            name: 'Home',
            href: '/',
            active: false
        },
        {
            name: 'Profile',
            href: '/profile',
            active: false
        },
        {
            name: 'Edit',
            href: '/profile/edit',
            active: true
        }
    ];

    return (
        <Layout breadcrumb={true} breadcrumbLinks={breadcrumbLinks} title="Profile Edit">
            <EditProfile />
        </Layout>
    )
}
