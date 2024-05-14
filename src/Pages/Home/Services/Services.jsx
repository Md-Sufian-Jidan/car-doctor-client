// import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import useServices from "../../../Hooks/useServices";
// dry --> do not repeat your self
const Services = () => {
    const services = useServices();

    //     const [services, setServices] = useState();
    //     useEffect(() => {
    //         fetch('http://localhost:5000/services')
    //             .then(res => res.json())
    //             .then(data => setServices(data))
    //     }, []);
    return (
        <div className="my-4">
            <div className="text-center">
                <h3 className="text-[#ff3811] font-bold">Services</h3>
                <h3 className="text-3xl">Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {/* <p>services {services.length}</p> */}
                {
                    services?.map((service) => <ServiceCard key={service?._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;