import { useState, useContext } from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { useLocalStorage } from '../miscellaneous/hooks';
import { Metamask } from "../../context";
import { useRouter } from 'next/router';
import Image from 'next/image';

function EditProfile() {
    const [usersProfile, setUsersProfile] = useLocalStorage('user_profile', []);
    const { useUserStorage } = useContext(Metamask.context);
    const [userData] = useUserStorage();
    const userAddress = userData.address || '';
    const currentUserData = usersProfile.find(value => value.address === userAddress) || {
        name: 'Demo User',
        username: 'demo123',
        description: 'This is demo description',
        socialLinks: {
            facebook: '',
            instagram: '',
            twitter: ''
        }
    };
    const [formData, setFormData] = useState(currentUserData);
    const router = useRouter();

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let [newName, childName] = name.split('|');

        if(childName){
            let socialLinks = formData.socialLinks;
            socialLinks[childName] = value;
            value = socialLinks;
        }

        setFormData({ ...formData, [newName]: value });
    }

    function getKeyByValue(object, value) {
        if(!object.length) { return false; }
        console.log(Object.keys(object))
        return Object.keys(object).find(key => object[key].address === value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let newUsersProfile = usersProfile;
        let newFormData = formData;
        newFormData.address = userAddress;
        let dataKey = getKeyByValue(newUsersProfile, userAddress);
        if(dataKey) {
            newUsersProfile[dataKey] = newFormData;
        } else {
            newUsersProfile.push(newFormData);
        }
        setUsersProfile(newUsersProfile);
        router.push('/profile')
    }

    const inputStyle = "shadow appearance-none w-full w-full dark:bg-transparent bg-[#fff] border-2 border-[#ffffff14] rounded py-3 px-4 leading-tight  dark:text-white text-[#969696] text-sm text-white";
    return (
        <section className="profile_edit py-20" >
            <div className="container mx-auto ">
                <div className="lg:flex md:flex block flex-row">
                    <div className="basis-4/12  profile_edit_left_col " data-aos="fade-right" data-aos-duration="3000">
                        <div className="dark:bg-[#16151a] bg-[#f3f3f3] border-rounded-lg p-10">
                            <div className="profile_edit_left_col_imagebg">
                                <div className="profile_edit_left_col_backimg">
                                    <Image 
                                        src="/images/profile-image2.jpg"
                                        alt='Profile Bg Image'
                                        className='rounded-lg object-cover'
                                        height="300px"
                                        width="300px"
                                    />
                                </div>
                                <div className="profile_edit_left_col_profileimg">
                                    <Image 
                                        src="/images/profile-image1.jpg"
                                        alt='Profile Bg Image'
                                        className='rounded-lg rounded-full object-cover'
                                        height="400px"
                                        width="400px"
                                    />
                                </div>
                            </div>
                            <div className="profile_edit_left_col_profilecontent text-center -mt-10">
                                <h2 className="dark:text-white text-[#000] font-bold	text-lg	py-3" data-aos="zoom-in" data-aos-duration="3000">{currentUserData.name}</h2>
                                <p className="dark:text-[#acacac] text-[#969696] text-base" data-aos="zoom-in" data-aos-duration="3000">{currentUserData.description}</p>

                                <ul className="list-none  flex text-[#fff]   items-center justify-center profile_edit_left_col_profilecontent_lists mt-5 " data-aos="zoom-in" data-aos-duration="3000">
                                    {currentUserData.socialLinks.facebook && (
                                        <li className="text-[#fff] hover:text-[#fff]  rounded-full p-2  mr-4 ">
                                            <a href={currentUserData.socialLinks.facebook}><FaFacebookF /></a>
                                        </li>
                                    )}
                                    {currentUserData.socialLinks.instagram && (
                                        <li className="text-[#fff] hover:text-[#fff]  rounded-full p-2  mr-4">
                                            <a href={currentUserData.socialLinks.instagram}><BsInstagram /></a>
                                        </li>
                                    )}
                                    {currentUserData.socialLinks.twitter && (
                                        <li className=" text-[#fff] hover:text-[#fff]  rounded-full p-2  mr-4 ">
                                            <a href={currentUserData.socialLinks.twitter}><BsTwitter /></a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="basis-8/12  profile_edit_right_col lg:ml-10 md-ml-10 ml-0 lg:mt-0 md:mt-0 mt-10 dark:bg-[#16151a]  bg-[#f3f3f3] border-rounded-lg p-10" data-aos="fade-left" data-aos-duration="3000">
                        <div className="profile_edit_right_col_form_column " >
                            <h2 className="dark:text-white text-[#000]  text-3xl  font-semibold" data-aos="zoom-in" data-aos-duration="3000">Edit Proile</h2>
                            <div className="profile_edit_right_col_form_column_form">
                                <form className="w-full mb-10 mt-8 " data-aos="zoom-in" data-aos-duration="3000">
                                    <div className="grid grid-cols-1 mb-5">
                                        <div className=" px-3 mb-6 md:mb-0">
                                            <label className="block dark:text-[#fff] text-[#363434] text-md mb-2" htmlFor="grid-city">
                                                Name
                                            </label>
                                            <input className={inputStyle} type="text" name='name' value={formData.name} onChange={handleChange} placeholder="Name">
                                            </input>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 mb-5">
                                        <div className=" px-3 mb-6 md:mb-0">
                                            <label className="block dark:text-[#fff] text-[#363434] text-md mb-2" htmlFor="grid-city">
                                                Username
                                            </label>
                                            <input className={inputStyle} type="text" name='username' value={formData.username} onChange={handleChange} placeholder="example123">
                                            </input>
                                        </div>
                                    </div>
                                    <div className="grid  mb-5">
                                        <div className=" px-3 mb-6 md:mb-0">
                                            <label className="block dark:text-[#fff] text-[#363434] text-md mb-2" htmlFor="grid-city">
                                                Description
                                            </label>
                                            <input className={inputStyle} type="text" name='description' value={formData.description} onChange={handleChange} placeholder="Description">
                                            </input>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 mb-5">
                                        <div className=" px-3 mb-6 md:mb-0">
                                            <label className="block dark:text-[#fff] text-[#363434] text-md mb-2" htmlFor="grid-city">
                                                Facebook
                                            </label>
                                            <input className={inputStyle} type="text" name='socialLinks|facebook' value={formData.socialLinks.facebook} onChange={handleChange} placeholder="Facebook">
                                            </input>
                                        </div>

                                        <div className=" px-3 mb-6 md:mb-0">
                                            <label className="block dark:text-[#fff] text-[#363434]text-md mb-2" htmlFor="grid-city">
                                                Instagram
                                            </label>
                                            <input className={inputStyle} type="text" name='socialLinks|instagram' value={formData.socialLinks.instagram} onChange={handleChange} placeholder="Instagram">
                                            </input>
                                        </div>

                                        <div className=" px-3 mb-6 md:mb-0">
                                            <label className="block dark:text-[#fff] text-[#363434] text-md  mb-2" htmlFor="grid-city">
                                                Twitter
                                            </label>
                                            <input className={inputStyle} type="text" name='socialLinks|twitter' value={formData.socialLinks.twitter} onChange={handleChange} placeholder="Twitter">
                                            </input>
                                        </div>
                                    </div>
                                    <div className="grid mb-5 editprofile_submit_btn" >
                                        <button className="bg-blue-500 hover:bg-blue-700 rounded-full text-white font-bold py-3 px-6" onClick={handleSubmit}>Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EditProfile;
