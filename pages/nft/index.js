import Layout from "../../components/Layout"
import { NFT } from "../../components/nft"

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
            active: true
        }
    ];

    return (
        <Layout breadcrumb={true} breadcrumbLinks={breadcrumbLinks} title="My NFT">
            <NFT />
        </Layout>
    )
}
