import Layout from "../../components/Layout"
import { Profile } from "../../components/profile"

export default function BaseProfile() {

    const breadcrumbLinks = [
        {
            name: 'Home',
            href: '/',
            active: false
        },
        {
            name: 'Profile',
            href: '/profile',
            active: true
        }
    ];

    return (
        <Layout breadcrumb={true} breadcrumbLinks={breadcrumbLinks} title="Profile">
            <Profile />
        </Layout>
    )
}
