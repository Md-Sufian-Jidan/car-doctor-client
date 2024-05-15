// import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import useServices from "../../../Hooks/useServices";
import { useState } from "react";
import UseAuth from "../../../Hooks/UseAuth";
// dry --> do not repeat your self
const Services = () => {
    const { loading } = UseAuth()
    const [asc, setAsc] = useState(true);
    // const [asc, setAsc] = useState(false);
    const [search, setSearch] = useState("");
    const services = useServices(asc, search);
    // console.log(services);
    // const [services, setServices] = useState();
    //     useEffect(() => {
    //         fetch('http://localhost:5000/services')
    //             .then(res => res.json())
    //             .then(data => setServices(data))
    //     }, []);
    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.searchValue.value;
        console.log(searchText);
        setSearch(searchText)
    }
    if (loading) {
        return <p className="text-5xl text-center my-20">Loading...</p>
    }
    return (
        <div className="my-4">
            <div className="text-center">
                <h3 className="text-[#ff3811] font-bold">Services</h3>
                <h3 className="text-3xl">Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                <button onClick={() => setAsc(!asc)} className="btn btn-secondary my-5">
                    {asc ? 'Price: High to Low' : 'Price: Low to High'}
                </button>
                <form onSubmit={handleSearch} className="mb-5">
                    <input type="text" name="searchValue" id="" className="input input-bordered" />
                    <input type="submit" value="Search" className="btn" />
                </form>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    services?.map((service) => <ServiceCard key={service?._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;