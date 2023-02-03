import React from 'react';

const ChannelCard = ({channel}) => {
    return (
        <div className='w-full bg-lightBlack flex flex-col items-center rounded p-3'>
            <img src={channel.logo} className='w-48 h-48 md:w-32 md:h-32 object-contain mx-auto p-4 md:p-2' alt="" />
            {channel.name}
        </div>
    );
};

export default ChannelCard;