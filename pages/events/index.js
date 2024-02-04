import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/event-search";
import { useRouter } from "next/router";
import { getAllEvents } from "@/helpers/api-util";
import { Fragment } from "react";



export default function AllEventPage(props) {
 const {events} = props;
 const router = useRouter();


 function findEventsHandler(year, month) {
  const fullPath = `/events/${year}/${month}`
  router.push(fullPath)
 }
    return (
   <Fragment>
    <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={events}/>
      </Fragment>
    );
  }
  export async function getStaticProps () {
    const events = await getAllEvents()
    return {
      props: {
        events: events
      },
      revalidate: 60
    }
  }