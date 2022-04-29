import Layout from "../components/Layout"
import About from "../components/About"

export default function BaseAbout() {

    const breadcrumbLinks = [
        {
            name: 'Home',
            href: '/',
            active: false
        },
        {
            name: 'About',
            href: '/about',
            active: true
        }
    ];

    return (
        <Layout breadcrumb={true} breadcrumbLinks={breadcrumbLinks} title="About">
            <About />
        </Layout>
    )
}
