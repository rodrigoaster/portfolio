import Image, { StaticImageData } from 'next/image';

type EventComponentProps = {
  imageEvent: StaticImageData;
  yearTitle: string;
  eventTitle: string;
  descriptionEvent: string;
}

export default function MobileTimeline({ imageEvent, yearTitle, eventTitle, descriptionEvent }: EventComponentProps) {
  return (
    <div className='flex flex-col items-center justify-center p-[5rem]'>
        <p className='text-[#aa52dd] font-normal'>{yearTitle}</p>
        <h1 className='mt-2 font-bold text-2xl max-w-[28rem]'>{eventTitle}</h1>
        <p className='text-[#666666] mt-5 text-[1.05rem] max-w-[28rem]'>{descriptionEvent}</p>
        <Image className='w-[30.625rem] mt-5 h-[21.875rem] rounded-3xl' src={imageEvent} alt='Group to developers.' />
    </div>
  );
}