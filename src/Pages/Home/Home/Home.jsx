// import Teams from "../../Teams/Teams";
import About from "../About/About";
import Banner from "../Banner/Banner";
import PopularProducts from "../PopularProducts/PopularProducts";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <PopularProducts />
            {/* <Teams /> */}
            {/* <h1 className="text-xl">this is home</h1> */}
        </div>
    );
};

export default Home;