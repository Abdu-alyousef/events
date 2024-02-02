import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/dummy-data";



export default function AllEventPage() {
 const event = getAllEvents()
    return (
     <div>
      <EventList items={event}/>
     </div>
    );
  }
  