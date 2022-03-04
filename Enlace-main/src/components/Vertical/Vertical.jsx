import styles from "./vertical.module.css";
import Nav from "../Navbar.jsx";
import dates from "../../assets/dates.png";
import RegisterButton from "../RegisterButton.jsx";
import past1 from "../../assets/past/past-1.png";
import past2 from "../../assets/past/past-2.png";
import past3 from "../../assets/past/past-3.png";
import past4 from "../../assets/past/past-4.png";
import past5 from "../../assets/past/past-5.png";
import past6 from "../../assets/past/past-6.png";
import past7 from "../../assets/past/past-7.png";
import past8 from "../../assets/past/past-8.png";

const Vertical = () => {
  return (
    <div className={styles.VerticalWrapper}>
      <Nav />
      <div className={styles.page}>
        <div className="w-11/12 h-4/6 mx-auto flex flex-col flex-nowrap justify-around text-center items-center pt-32 lg:pt-32 lg:items-start lg:text-left md:text-left md:h-3/6 md:pt-16 md:items-start">
          <h2 className="text-4xl text-white lg:text-5xl font-semibold">Welcome to Enlace!</h2>
          <p className="w-9/12  pb-60 pt-12 lg:w-6/12 text-white text-1xl lg:text-3xl lg:py-12">A fest to mirror the beautiful chaos of nature and keep you on your toes, stir your souls and spark your creative flair.  </p>
          <p className="w-9/12  pb-60 pt-12 lg:hidden lg:w-6/12 text-white text-1xl lg:py-12">A fest to mirror the beautiful chaos of nature and keep you on your toes, stir your souls and spark your creative flair. </p>
          <RegisterButton />
        </div>

      </div>
      <div className={styles.page}>
        <div className="mx-auto w-11/12 h-full text-center flex flex-col flex-nowrap justify-center  items-center pt-48  lg:items-start lg:text-left md:text-left md:h-4/6 md:items-start">
          <h2 className="text-4xl text-white lg:text-5xl pb-24 pt-24">Welcome to Enlace!</h2>
          <p className="w-11/12  lg:w-6/12 text-white text-2xl py-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam fugit omnis pariatur porro, ipsum molestias velit aperiam suscipit accusamus quos corporis, reiciendis tempore dicta?</p>
          <p className="w-11/12 lg:w-6/12 text-white text-2xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vitae, maxime minima debitis autem similique culpa corporis reiciendis?</p>
        </div>
      </div>

      <div className={styles.page}>
        <div className="flex flex-col flex-start justify-center items-center text-center w-full pb-16">
          <img src={dates} alt="dates" className="pb-16" />
          <p className="text-2xl text-white pb-16 ">Register now and come join us in this wild journey!</p>
          <RegisterButton />
        </div>

        <div className="hidden lg:block mx-auto w-10/12 ">
          <p className="text-4xl text-opacity-100 text-white font-normal ">Into the wild</p>
          <p className="text-5xl text-opacity-80 text-white font-medium pt-2">Into the wild</p>
          <p className="text-6xl text-opacity-60 text-white font-semibold pt-4">Into the wild</p>
          <p className="text-9xl text-opacity-5 text-white font-black pt-8">Into the wild</p>
        </div>

        <div className="lg:hidden pt-36">
          <h1 className="text-center text-white text-3xl font-semibold">Who Are We</h1>
        </div>

      </div>


      <div className={styles.page} hidden>
        <div className="hidden lg:block">
          <div className="w-full h-2/6 mx-auto flex  flex-row  flex-wrap pt-12 px-4 ">
            <img data-aos="fade-down-right" data-aos-duration="1200" src={past1} alt="album" className="pl-24 " />
            <img data-aos="flip-up" data-aos-duration="1200" src={past8} alt="album" className="pl-24 " />
            <div data-aos="zoom-in-up" data-aos-duration="750" className="inline-block  ml-64  from-[#FFD4AC]/80 to-[#F0616D]/80 bg-gradient-to-br h-96 w-2/6 rounded items-center">
              <p className="text-white text-3xl py-6 px-6">Enlace, IIIT Kottayam’s cultural fest, has been celebrating arts, heritage, music and lifestyle since its inception in 2019. We bring a myriad of events to life with impressive and breathtaking performances. </p>
            </div>
          </div>

        </div>

      </div>
      <div className={styles.page} hidden >
        <div className="hidden lg:block">
          <div className="w-full h-3/6 mx-auto flex  flex-row  flex-wrap pt-12 px-4 ">
            <img data-aos="fade-right" data-aos-duration="1200" src={past5} alt="album" className="p-12 basis-2/6" />
            <img data-aos="flip-right" data-aos-duration="1200" src={past3} alt="album" className="p-16 basis-1/6" />
            <div data-aos="zoom-in-up" data-aos-duration="750" className="inline-block ml-24   basis-2/6  from-[#FFD4AC]/80 to-[#F0616D]/80 bg-gradient-to-br h-96 w-2/6 rounded items-center"><p className="text-white text-3xl py-6 px-6">Enlace, IIIT Kottayam’s cultural fest, has been celebrating arts, heritage, music and lifestyle since its inception in 2019. We bring a myriad of events to life with impressive and breathtaking performances. </p></div>

            <img data-aos="fade-up-right" data-aos-duration="1200" src={past2} alt="album" className="pl-16 pt-16" />
            <img data-aos="zoom-in-down" data-aos-duration="1200" src={past4} alt="album" className="pl-36 pt-16" />
            <img data-aos="fade-up" data-aos-duration="1200" src={past7} alt="album" className="pl-36 pt-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vertical;


