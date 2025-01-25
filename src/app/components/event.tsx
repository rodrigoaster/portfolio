import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import Image, { StaticImageData } from 'next/image';

type EventComponentProps = {
  imageEvent: StaticImageData;
  yearTitle: string;
  eventTitle: string;
  descriptionEvent: string;
}

export default function EventComponent({ imageEvent, yearTitle, eventTitle, descriptionEvent }: EventComponentProps) {
  return (
    <Timeline className='my-9' position="alternate">
      <TimelineItem className='max-w-[64rem] mx-auto'>
        <TimelineOppositeContent
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <Image className='w-[30.625rem] h-[21.875rem] rounded-3xl' src={imageEvent} alt='Group to developers.' />
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot 
            sx={{ width: 20, height: 20, background: '#ff53d4'}} 
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