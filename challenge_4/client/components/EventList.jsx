import React from 'react';

import EventListEntry from './EventListEntry';

const EventList = ({ events }) => {
  return (
    <div id="event-list">
      {
        events.map((event, index) => (
          <EventListEntry key={index + event.date} event={event} />
        ))
      }
    </div>
  );
}

export default EventList;