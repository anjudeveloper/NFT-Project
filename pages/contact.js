import Layout from "../components/Layout"
import Contact from "../components/Contact"

export default function BaseContact() {

    const breadcrumbLinks = [
        {
            name: 'Home',
            href: '/',
            active: false
        },
        {
            name: 'Contact',
            href: '/contact',
            active: true
        }
    ];

    return (
        <Layout breadcrumb={true} breadcrumbLinks={breadcrumbLinks} title="Contact">
            <Contact />
        </Layout>
    )
}
