import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Events = () => {
    const { user } = useContext(AuthContext);
    const [events, setEvents] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/myBookings/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
      });
    }, [user])
    return (
        <div className="mt-8 mx-8 md:mx-16 lg:mx-32 grid md:grid-cols-2">
            {
                events.map(event => (
                    <div className="flex gap-6 mt-6" key={event._id}>
                        <div>
                        <img className="w-52" src={event.img} alt="" />
                        </div>
                        <div className="space-y-6">
                        <h4 className="text-2xl font-bold">{event.title}</h4>
                        <h6 className="text-xl font-bold">{event.date}</h6>
                        <button className="btn btn-outline btn-sm">Cancel</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Events;