import React from 'react';

const Card = () => {
    return (
        <div className='bg-primary'>
            <div className=' lg:pl-4 flex-none justify-center lg:items-center lg:flex justify-evenly  py-12'>

                <div data-aos="zoom-in"
                    data-aos-delay="450"
                    data-aos-duration="1000"
                    class="card lg:w-96 bg-neutral shadow-xl text-primary-content">
                    <div class="card-body">
                        <h2 class="lg:text-4xl font-bold text-white">
                            01 <br />
                            UX/UI DESIGN</h2>
                        <p>Accomplished UX Designer with 6+ years of experience eager to make a positive impact at Jersey Frames. During my time at Greentibs, I increased user satisfaction by 20% with redesign of the website. Boosted conversions by 100% with website design. Worked with the Marketing & Dev teams to achieve quarterly KPIs.</p>

                    </div>
                </div>

                <div data-aos="zoom-in"
                    data-aos-delay="550"
                    data-aos-duration="1000"
                    class="card lg:w-96 lg:h-[400px] shadow-xl bg-success lg:bg-error text-primary-content">
                    <div class="card-body">
                        <h2 class="lg:text-4xl lg:text-white font-bold text-primary">
                            02 <br />
                            WEB-DEVELOPMENT</h2>
                        <p className='text-primary lg:text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam animi consequuntur, recusandae eum beatae eius nostrum ut. Optio dolorum excepturi magnam doloribus, laborum repellendus molestiae, dolorem, sint pariatur cupiditate dolore.</p>

                    </div>
                </div>

                <div data-aos="zoom-in-down"
                    data-aos-delay="700"
                    data-aos-duration="1000"
                    class="card lg:w-96 bg-neutral shadow-xl text-primary-content">
                    <div class="card-body">
                        <h2 class="lg:text-4xl font-bold text-white">
                            03 <br />
                            WEB DESIGN</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsam suscipit voluptate cupiditate quis, quae corporis tempora accusamus distinctio ipsum vero consequuntur modi nisi quidem nesciunt ut rerum. Animi, molestias!</p>

                    </div>
                </div>
            </div >
        </div>
    );
};

export default Card;