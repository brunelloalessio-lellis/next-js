
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [{
    id: 'm1',
    title: 'A first meetup',
    image:'https://cataas.com/cat',
    address: 'Some address 5, City',
    description: 'This is a meetup'
},{
    id: 'm2',
    title: 'A second meetup',
    image:'https://cataas.com/cat',
    address: 'Some address 15, City',
    description: 'This is a meetup'
}]

const HomePage = ()=>{

    return <MeetupList meetups={DUMMY_MEETUPS}/>

}

export default HomePage