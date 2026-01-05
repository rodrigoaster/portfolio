import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "@mui/lab";
import Image, { StaticImageData } from 'next/image';

type EventComponentProps = {
  imageEvent: StaticImageData;
  yearTitle: string;
  eventTitle: string;
  descriptionEvent: string;
}

export default function DesktopTimeline({ imageEvent, yearTitle, eventTitle, descriptionEvent }: EventComponentProps) {
  return (
    <Timeline className='my-9' position="alternate">
      <TimelineItem className='max-w-[64rem] mx-auto'>
        <TimelineOppositeContent
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <div className="relative">
            <Image 
              className='w-[30.625rem] h-[21.875rem] rounded-3xl' 
              src={imageEvent} alt='Group to developers.' 
              />
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot 
            sx={{ width: 10, height: 10, background: '#FF1493'}} 
            color='secondary' 
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <p className='text-[#aa52dd] font-normal'>{yearTitle}</p>
          <h1 className='mt-2 font-bold text-2xl'>{eventTitle}</h1>
          <p className='text-[#666666] mt-16 text-[1.05rem]'>{descriptionEvent}</p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}