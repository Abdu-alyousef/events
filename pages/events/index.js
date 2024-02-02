import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/event-search";
import { useRouter } from "next/router";
import { getAllEvents } from "@/dummy-data";
import { Fragment } from "react";



export default function AllEventPage() {
 const event = getAllEvents();
 const router = useRouter();
 function findEventsHandler(year, month) {
  const fullPath = `/events/${year}/${month}`
  router.push(fullPath)
 }
    return (
   <Fragment>
    <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={event}/>
      </Fragment>
    );
  }
  