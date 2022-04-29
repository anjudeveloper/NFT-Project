import Layout from "../../components/Layout"
import { NFTDetails } from "../../components/nft"
// import { getNFTItems } from '../../helpers';

export default function BaseNftDetail() {

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
            name: 'Details',
            href: '',
            active: true
        }
    ];

    return (
        <Layout breadcrumb={true} breadcrumbLinks={breadcrumbLinks} title="Details">
            <NFTDetails />
        </Layout>
    )
}

// export async function getStaticPaths() {
//     const paths = [];
//     return {
//         paths: paths,
//         fallback: true // false or 'blocking'
//     };
// }

