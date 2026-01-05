import * as React from 'react';

import { StaticImageData } from 'next/image';
import DesktopTimeline from './desktop.timeline';
import MobileTimeline from './mobile.timeline';
import { useIsDesktop } from '@/app/hooks/use.desktop.hook';

type EventComponentProps = {
  imageEvent: StaticImageData;
  yearTitle: string;
  eventTitle: string;
  descriptionEvent: string;
}

export default function EventComponent({ imageEvent, yearTitle, eventTitle, descriptionEvent }: EventComponentProps) {
  const isDesktop = useIsDesktop();

  return (
   <>
      {
        isDesktop ? 
        <DesktopTimeline 
          imageEvent={imageEvent} 
          yearTitle={yearTitle} 
          eventTitle={eventTitle} 
          descriptionEvent={descriptionEvent} 
        /> : 
        
        <MobileTimeline 
        imageEvent={imageEvent} 
        yearTitle={yearTitle} 
        eventTitle={eventTitle} 
        descriptionEvent={descriptionEvent} 
        />
      }
   </>
  );
}