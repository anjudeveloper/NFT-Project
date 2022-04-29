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
            name: 'Explore',
            href: '/explore',
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
//     const paths = [
//         // {
//         //     params: { tokenId: '1' }
//         // },
//         // {
//         //     params: { tokenId: '5' }
//         // }
//     ];
//     return {
//         paths: paths,
//         fallback: false // false or 'blocking'
//     };
// }

// export async function getStaticProps(context) {
//     return {
//       props: {}, // will be passed to the page component as props
//     }
//   }

