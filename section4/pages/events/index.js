import React from "react";
import Link from "next/link";

const AllEventsPage = () => {
  const events = [
    { id: 1, name: "event1" },
    { id: 2, name: "event2" },
    { id: 3, name: "event3" },
  ];
  return (
    <div>
      <h1>All Events</h1>
      <ul>
        {events.map((event) => (
          <li>
            <Link href={{ pathname: `/events/${event.id}` }}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllEventsPage;
