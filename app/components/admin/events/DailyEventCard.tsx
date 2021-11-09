import moment from 'moment';
import * as React from 'react';
import styles from './events.module.scss';

export default function DailyEventCard({ events }) {
  return (
    <div style={{ marginTop: '20px' }}>
      {events.map((event, index) => (
        <div className={styles.todayEvents} key={`today-event-id-${index}`}>
          <div className={styles.eventTitle}>{event.name}</div>
          <div className={styles.eventTiming}>
            {event.startDateTime
              ? moment(event.startDateTime).format('hh:mm A')
              : '-'}{' '}
            -{' '}
            {event.endDateTime
              ? moment(event.endDateTime).format('hh:mm A')
              : '-'}
          </div>
        </div>
      ))}
    </div>
  );
}
