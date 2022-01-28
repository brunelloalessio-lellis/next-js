import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  //fetch data from db or files
  return {
    //need to be updated if data is changed inside the server
    props: {
      meetups: [
        {
          id: "m1",
          title: "A first meetup",
          image: "https://cataas.com/cat",
          address: "Some address 5, City",
          description: "This is a meetup",
        },
        {
          id: "m2",
          title: "A second meetup",
          image: "https://cataas.com/cat",
          address: "Some address 15, City",
          description: "This is a meetup",
        },
      ],
    },
    //revalidate data every 10 seconds
    revalidate: 10
  };
}

/*
export async function serverSideProps(context) {
  //run always after deploy

  const req = context.req;
  const res = context.res;
  //check coockies or auth

  return {
    props: {
      meetups: [
        {
          id: "m1",
          title: "A first meetup",
          image: "https://cataas.com/cat",
          address: "Some address 5, City",
          description: "This is a meetup",
        },
        {
          id: "m2",
          title: "A second meetup",
          image: "https://cataas.com/cat",
          address: "Some address 15, City",
          description: "This is a meetup",
        },
      ],
    },
  };
}*/

export default HomePage;
