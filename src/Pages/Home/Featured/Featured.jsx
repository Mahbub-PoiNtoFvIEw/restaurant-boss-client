import React from 'react';
import SectionTitle from '../../../Componants/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import '../Featured/FeaturedItem.css';

const Featured = () => {
    return (
        <div className='featured-items bg-fixed bg-no-repeat bg-cover text-white'>
           <div className='bg-[#0000004D] pt-6 my-6'>
           <SectionTitle Heading="Featured item" subHeading="Check it out"></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 md:px-36 px-4'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2028</p>
                    <h3 className='uppercase'>where can i get some?</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid perspiciatis hic voluptatem. Sit eaque necessitatibus quo sapiente architecto quaerat. Modi quo nostrum ad ipsa? Repellat iure consequatur magni enim temporibus nisi ut necessitatibus at tempora iste. Quisquam, atque cupiditate. Saepe, quidem aspernatur numquam repudiandae impedit error assumenda? Iusto, in labore?</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4 rounded-lg'>Order Now</button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Featured;