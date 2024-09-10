import HonorCard from "./HonorCard/HonorCard"
import reward1 from "../../assets/honors/olp2022.jpg"
import reward2 from "../../assets/honors/olp2023.jpg"
import reward3 from "../../assets/honors/oms.jpg"
import reward4 from "../../assets/honors/KHCN.jpg"
import reward5 from "../../assets/honors/khoinghiep.jpg"

function Honors() {
  return (
    <div className="w-screen *:text-[#267452] mt-20">
      <h1 className="text-center tracking-normal 
                    font-[Inter] md:text-5xl text-xl font-bold">
        THÀNH TÍCH
      </h1>
      <div className="mx-auto mt-2 bg-[#39906A] md:w-[525px] w-[200px] h-[4px] mb-16"></div>
      <div className="honor__list flex gap-10 w-fit animate-[infiniteCarousel_20s_linear_infinite]">
        <HonorCard card={{
          name: "Cuộc thi OLP 2022",
          image: reward1,
        }}
        />
        <HonorCard card={{
          name: "Cuộc thi OLP 2023",
          image: reward2,
        }}
        />
        <HonorCard card={{
          name: "OMS Hackfest",
          image: reward3,
        }}
        />
        <HonorCard card={{
          name: "Khoa học và công nghệ dành cho SV",
          image: reward4,
        }}
        />
        <HonorCard card={{
          name: "Sinh viên khởi nghiệp",
          image: reward5,
        }}
        />
      </div>
    </div>
  )
}

export default Honors