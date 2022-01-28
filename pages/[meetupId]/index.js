import { useRouter } from "next/router";
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetailPage = ()=>{
    const router = useRouter()

    return <MeetupDetail
        title='A first meetup'
        description='The meetup description'
        address='Some street 5, Italy'
        image='https://cataas.com/cat'
    />
}

export default MeetupDetailPage