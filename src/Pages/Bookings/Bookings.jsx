import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import BookingRow from "./BookingRow";
// import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const [bookings, setBookings] = useState()
    // const [display, setBookings] = useState()
    // const url = `${import.meta.env.VITE_API_URL}/booking?email=${user?.email}`;

    const url = `/booking?email=${user?.email}`;
    useEffect(() => {
        // axios.get(url, { withCredentials: true })
        //     .then(res => {
        //         setBookings(res.data);
        //     })
        axiosSecure.get(url)
            .then(res => setBookings(res.data))
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setBookings(data);
        //     })
    }, [url, axiosSecure]);
    const handleDelete = (id) => {
        const proceed = confirm("Are You sure you want to delete?")
        if (proceed) {
            fetch(`${import.meta.env.VITE_API_URL}/booking/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log(data);
                        alert('booking data deleted');
                        const remaining = bookings.filter((booking) => booking._id != id);
                        setBookings(remaining)
                    }
                })
        }
    }

    const handleConfirm = (id) => {
        console.log(id);
        fetch(`${import.meta.env.VITE_API_URL}/booking/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirmed' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    console.log(data);
                    alert('data updated')
                }
            })
    }

    return (
        <div>
            <h3 className="text-3xl text-center">bookings : {bookings?.length}</h3>
            {/* table start here */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service Name</th>
                            <th>Date</th>
                            <th>Favorite</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings?.map((booking) => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;