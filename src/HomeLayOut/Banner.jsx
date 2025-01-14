
const Banner = () => {
    return (
        <div>
             <div className="carousel w-full min-h-[70vh] rounded-xl mt-5 ">
      <div id="slide1" className="carousel-item relative w-full">
        <div
          style={{
            background: `url("https://i.ibb.co.com/zF2fnDc/banner2.jpg")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="min-h-[70vh] w-full flex justify-center items-center "
        >
          <h1 className="text-xl md:text-2xl lg:text-4xl text-white font-bold">
          Unlock Global Opportunities with ScholarBridge
          </h1>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div
          style={{
            background: `url("https://i.ibb.co.com/8Mqd3Gn/banner1.jpg")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="min-h-[70vh] w-full bg-no-repeat bg-center bg-cover flex justify-center items-center "
        >
          <h1 className="text-xl md:text-2xl lg:text-4xl text-white font-bold">
          Unlock Global Opportunities with ScholarBridge
          </h1>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div
          style={{
            background: `url("https://i.ibb.co.com/gwkKfwy/banner3.jpg")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="min-h-[70vh] w-full bg-no-repeat bg-center bg-cover flex justify-center items-center "
        >
          <h1 className="text-xl md:text-2xl lg:text-4xl text-white font-bold">
          Unlock Global Opportunities with ScholarBridge
          </h1>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div
          style={{
            background: `url("https://i.ibb.co.com/58vHTMV/banner4.jpg")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="min-h-[70vh] w-full bg-no-repeat bg-center bg-cover flex justify-center items-center"
        >
          <h1 className="text-xl md:text-2xl lg:text-4xl text-white font-bold">
          Unlock Global Opportunities with ScholarBridge
          </h1>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;