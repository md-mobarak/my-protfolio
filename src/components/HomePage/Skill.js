import React from 'react';

const Skill = () => {
    return (
        <div className='bg-neutral'>
            <h1 className='text-2xl lg:text-6xl  text-center text-success font-bold py-6'>PROFESSIONAL SKILLS</h1>
            <div className='text-center grid grid-cols-1 lg:grid-cols-2 gap-6 pb-12'>
                <p className='text-white font-bold text-2xl'>HTML <br /> <progress class="progress progress-success w-80 bg-white" value="100" max="100"></progress></p>
                <p className='text-white font-bold text-2xl'>CSS <br /> <progress class="progress progress-success w-80 bg-white" value="90" max="100"></progress></p>
                <p className='text-white font-bold text-2xl'>BOOTSTRAP <br /> <progress class="progress progress-success bg-white w-80" value="95" max="100"></progress></p>
                <p className='text-white font-bold text-2xl'>TAILWIND-CSS <br /> <progress class="progress progress-success w-80 bg-white" value="90" max="100"></progress></p>
                <p className='text-white font-bold text-2xl'>JAVASCRIPT <br /> <progress class="progress progress-success bg-white w-80" value="70" max="100"></progress></p>
                <p className='text-white font-bold text-2xl'>REACT <br /> <progress class="progress progress-success bg-white w-80" value="90" max="100"></progress></p>

            </div>
        </div>
    );
};

export default Skill;