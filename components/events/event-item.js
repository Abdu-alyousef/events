

import classes from './event-item.module.css'
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon	 from '../icons/arrow-right-icon';

export default function EventItem(props) {
    const {title, image, date, location, id} = props;
    const humenReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedAddress = location.replace(',', '\n');
    const exploreLink = `/events/${id}`

    return (
     <li className={classes.item}>
        <img src={'/' + image} alt={title} />
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.date}>
                    <time>{humenReadableDate}</time>
                    <DateIcon />
                </div>
                <div className={classes.address}>
                    <address>{formattedAddress}</address>
                    <AddressIcon />
                </div>
            </div>
            <div className={classes.actions}>
               <span><Button link={exploreLink}>Explore Event</Button></span>
               <span className={classes.icon}><ArrowRightIcon/></span>
            </div>
        </div>
     </li>
    );
  }
  