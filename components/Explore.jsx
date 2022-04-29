import { useEffect, useState, useContext } from 'react';
import { Filter, NFTCard } from './nft'
import { getNFTItems } from '../helpers';
import NoDataFound from './miscellaneous/NoDataFound';
import { Metamask } from '../context';

export default function Explore() {
    const [isLoading, setIsLoading] = useState(false);
    const [explores, setExplores] = useState([]);
    const [allExplores, setAllExplores] = useState([]);
    const { useUserStorage } = useContext(Metamask.context)
    const [userData, setUserData] = useUserStorage();
    const userAddress = userData.address || '';

    useEffect(() => {
        loadExplores();
    }, [userAddress]);
    

    const loadExplores = async () => {
        setIsLoading(true)
        const items = await getNFTItems("fetchAllMarketItems");
        setExplores(items)
        setAllExplores(items);
        setIsLoading(false)
    }

    return (
        <div className="dark:bg-[#09080d] bg-[#fff]">
            <section className="explore_section  pb-20 pt-20" >
                <div className="container mx-auto">
                    <div className="flex flex-row space-x-2 pb-10 ">
                        <h2 className="dark:text-white text-[#000] text-4xl font-semibold	text-center" data-aos="zoom-in" data-aos-duration="3000" >Explore</h2>
                    </div>
                    <Filter data={allExplores} setData={setExplores} />
                    <div className="lg:flex md:flex block flex-wrap ">
                        {isLoading ? (
                            <div className="nodatafound_row lg:pb-10 md:pb-10 pb-10 px-3 ">
                                <NoDataFound>Loading...</NoDataFound>
                            </div>
                        ) :
                            (explores.length ?
                                explores.map((nft, key) => {
                                    return <NFTCard key={key} {...nft} />
                                }) : (
                                    <div className="nodatafound_row lg:pb-10 md:pb-10 pb-10 px-3 ">
                                        <NoDataFound>No Explore Found</NoDataFound>
                                    </div>
                                )
                            )}
                    </div>
                </div>


            </section>

        </div>
    )
}
