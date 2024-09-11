import React, {useRef,useState} from "react";
import AdvisoryCard from "./AdvisoryCard/AdvisoryCard";
import advisor1 from "../../assets/advisors/3_Adviser_1.jpg"
import advisor2 from "../../assets/advisors/3_Adviser_2.jpg"
import advisor3 from "../../assets/advisors/3_Adviser_3.jpg";
import advisor4 from "../../assets/advisors/3_Adviser_4.jpg"
import advisor5 from "../../assets/advisors/3_Adviser_5.jpg"
import advisor6 from "../../assets/advisors/3_Adviser_6.jpg"


function Advisory()  {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown,setIsDown] = useState(false);
  const [startX,setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  function handleMouseDown(e: React.MouseEvent) {
    if (!sliderRef.current) return;
      setIsDown(true);
      sliderRef.current.classList.add('active');
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
  }

  function handleMouseLeave()  {
    setIsDown(false);
    if (sliderRef.current) {
      sliderRef.current.classList.remove('active');
    }
  };

  function handleMouseUp()  {
    setIsDown(false);
    if (sliderRef.current) {
      sliderRef.current.classList.remove('active');
    }
  };
  function handleMouseMove(e: React.MouseEvent) {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
    console.log(walk);
  };
  return (
    <div className="bg-white w-screen h-full relative overflow-x-hidden *:text-[#267452]">
      <h1
        className="text-center tracking-normal mt-20
                   font-[Inter] text-5xl font-bold"
      >
        BAN CỐ VẤN
      </h1>
      <div className="mx-auto mt-2 bg-[#39906A] w-[525px] h-[4px] mb-20"></div>

      <div className="no-scrollbar px-6 no-scrollbar boards w-screen flex gap-20 cursor-grab
                      select-none overflow-scroll scroll-smooth snap-x"
           ref={sliderRef}
           onMouseDown={handleMouseDown}
           onMouseLeave={handleMouseLeave}
           onMouseUp={handleMouseUp}
           onMouseMove={handleMouseMove}>
        {/* Items */}
          <AdvisoryCard
            advisor={{
              name: "Phạm Xuân Tích",
              image: advisor1,
              role:"HLV trưởng đội tuyển OLP THSV trường ĐHGTVT",
              position: "Giảng viên bộ môn Khoa học máy tính",
              addition:"",
            }}
          />
          <AdvisoryCard 
            advisor={{
              name: "Đinh Công Tùng",
              image: advisor2,
              role:"Trợ lý đội tuyển OLP THSV trường ĐHGTVT",
              position: "Giảng viên bộ môn CNPM",
              addition:"Bí thư LCĐ khoa CNTT",
            }}
          />
          <AdvisoryCard 
            advisor={{
              name: "Cao Thị Luyên",
              image: advisor3,
              role:"",
              position: "Phó trưởng bộ môn CMPM",
              addition:"Phó chủ tịch công đoàn",
            }}
          />
         <AdvisoryCard 
            advisor={{
              name: "Nguyễn Đức Dư",
              image: advisor4,
              role:"Người sáng lập CLB",
              position: "Giảng viên bộ môn CNPM",
              addition:"Giám đốc trung tâm thông tin - thư viện",
            }}
          />
          <AdvisoryCard 
            advisor={{
              name: "Cao Thị Luyên",
              image: advisor5,
              role:"",
              position: "Phó trưởng bộ môn CNPM",
              addition:"Phó chủ tịch công đoàn",
            }}
          />
          <AdvisoryCard 
            advisor={{
              name: "Nguyễn Xuân Anh",
              image: advisor6,
              role:"Cựu chủ nhiệm CLB Tin học",
              position: "Kỹ sư phát triển phần mềm Cty điện tử Thiên Quang",
              addition:"Giám đốc trung tâm thông tin - thư viện",
            }}
          />
      </div>
    </div>
  );
};

export default Advisory;