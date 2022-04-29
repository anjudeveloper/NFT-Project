import Layout from "../../components/Layout"
import { NftForm } from "../../components/nft"

export default function BaseNFT() {
    const breadcrumbLinks = [
        {
            name: 'Home',
            href: '/',
            active: false
        },
        {
            name: 'NFT',
            href: '/nft',
            active: false
        },
        {
            name: 'Create',
            href: '/nft/create',
            active: true
        }
    ];

    return (
        <Layout breadcrumb={true} breadcrumbLinks={breadcrumbLinks} title="All NFT">
            <NftForm />
        </Layout>
    )
}
