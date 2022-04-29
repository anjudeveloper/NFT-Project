import Layout from "../../components/Layout"
import Explore from "../../components/Explore"

export default function BaseExplore() {

    const breadcrumbLinks = [
        {
            name: 'Home',
            href: '/',
            active: false
        },
        {
            name: 'Explore',
            href: '/explore',
            active: true
        }
    ];

    return (
        <Layout breadcrumb={true} breadcrumbLinks={breadcrumbLinks} title="Explore">
            <Explore />
        </Layout>
    )
}
