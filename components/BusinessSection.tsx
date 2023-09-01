import React from 'react';

type BusinessSectionProps = {
    
};

const BusinessSection:React.FC<BusinessSectionProps> = () => {
    
    return    <div className="absolute top-[148rem] left-[0rem] w-[90rem] h-[59.25rem] text-left text-[1.13rem] text-secondary3 font-poppins">
    <div className="absolute top-[0rem] left-[0rem] bg-pink w-[90rem] h-[59.25rem]" />
    <div className="absolute top-[38.28rem] left-[54.28rem] box-border w-[9.88rem] h-[0.06rem] border-t-[1px] border-solid border-dimgray" />
    <div className="absolute top-[41.06rem] left-[54rem] w-[7.13rem] h-[1.19rem]">
      <img
        className="absolute top-[0rem] left-[0rem] w-[1.19rem] h-[1.19rem] object-cover"
        alt=""
        src="/star-1-1@2x.png"
      />
      <img
        className="absolute top-[0rem] left-[1.44rem] w-[1.19rem] h-[1.19rem] object-cover"
        alt=""
        src="/star-1-1@2x.png"
      />
      <img
        className="absolute top-[0rem] left-[4.5rem] w-[1.19rem] h-[1.19rem] object-cover"
        alt=""
        src="/star-1-1@2x.png"
      />
      <img
        className="absolute top-[0rem] left-[2.88rem] w-[1.19rem] h-[1.19rem] object-cover"
        alt=""
        src="/star-1-1@2x.png"
      />
      <img
        className="absolute top-[0rem] left-[5.94rem] w-[1.19rem] h-[1.19rem] object-cover"
        alt=""
        src="/star-1-1@2x.png"
      />
    </div>
    <div className="absolute top-[32.44rem] left-[65.06rem] w-[10.13rem] h-[2.88rem] font-roboto">
      <div className="absolute top-[0rem] left-[0rem] box-border w-[10.13rem] h-[2.88rem] border-[2.5px] border-solid border-secondary3" />
      <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_47px)] leading-[117.02%] font-semibold">
        Get a demo
      </div>
    </div>
    <div className="absolute top-[32.44rem] left-[54rem] w-[10.13rem] h-[2.88rem] text-white font-roboto">
      <div className="absolute top-[0rem] left-[0rem] bg-secondary3 box-border w-[10.13rem] h-[2.94rem] border-[1.5px] border-solid border-white" />
      <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_53px)] leading-[117.02%] font-semibold">
        Try it for free
      </div>
    </div>
    <div className="absolute top-[11.81rem] left-[53.75rem] text-[3.5rem] leading-[123.52%] font-medium text-primary3 inline-block w-[27.5rem]">
      Perfect Solution for Small Businesses
    </div>
    <div className="absolute top-[27.56rem] left-[53.75rem] leading-[181.02%] text-gray-200 text-center inline-block w-[19.13rem]">
      Pricing plans that fit like a glove.
    </div>
    <div className="absolute top-[40.25rem] left-[64rem] leading-[181.02%] text-center inline-block w-[17.13rem] text-gray-100">
      <span className="font-medium">3 million calls</span>
      <span className="text-gray-200">
        {" "}
        completed with a 96.8% 5 star rating
      </span>
    </div>
    <img
      className="absolute top-[8.63rem] left-[0rem] w-[46.44rem] h-[36.81rem]"
      alt=""
      src="/group-5.svg"
    />
  </div>
}
export default BusinessSection;