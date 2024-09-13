import AdvisoryCard from "./AdvisoryCard/AdvisoryCard";
import advisor1 from "../../assets/advisors/3_Adviser_1.jpg";
import advisor2 from "../../assets/advisors/3_Adviser_2.jpg";
import advisor3 from "../../assets/advisors/3_Adviser_3.jpg";
import advisor4 from "../../assets/advisors/3_Adviser_4.jpg";
import advisor6 from "../../assets/advisors/3_Adviser_6.jpg";
import { useEffect, useRef } from "react";

function Advisory() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
    }
  }, []);

  return (
    <div className="bg-white w-screen h-full relative overflow-x-hidden *:text-[#267452]">
      <h1
        className="text-center tracking-normal mt-20
                   font-[Inter] md:text-5xl text-xl font-bold"
      >
        BAN CỐ VẤN
      </h1>
      <div className="mx-auto mt-2 bg-[#39906A] md:w-[525px] w-[200px] h-[4px] mb-20"></div>

      <div
        ref={containerRef}
        className="px-6 boards w-screen flex gap-20
                      select-none overflow-scroll scroll-smooth hide-scrollbar">
        {/* Items */}
        <AdvisoryCard
          advisor={{
            name: "Phạm Xuân Tích",
            image: advisor1,
            role: "HLV trưởng đội tuyển OLP THSV trường ĐHGTVT",
            position: "Giảng viên bộ môn Khoa học máy tính",
            addition: "",
          }}
        />
        <AdvisoryCard
          advisor={{
            name: "Đinh Công Tùng",
            image: advisor2,
            role: "Trợ lý đội tuyển OLP THSV trường ĐHGTVT",
            position: "Giảng viên bộ môn CNPM",
            addition: "Bí thư LCĐ khoa CNTT",
          }}
        />
        <AdvisoryCard
          advisor={{
            name: "Cao Thị Luyên",
            image: advisor3,
            role: "",
            position: "Phó trưởng bộ môn CNPM",
            addition: "Phó chủ tịch công đoàn",
          }}
        />
        <AdvisoryCard
          advisor={{
            name: "Nguyễn Đức Dư",
            image: advisor4,
            role: "Người sáng lập CLB",
            position: "Giảng viên bộ môn CNPM",
            addition: "Giám đốc trung tâm thông tin - thư viện",
          }}
        />
        <AdvisoryCard
          advisor={{
            name: "Nguyễn Xuân Anh",
            image: advisor6,
            role: "Cựu chủ nhiệm CLB Tin học",
            position: "Kỹ sư phát triển phần mềm Cty điện tử Thiên Quang",
            addition: "",
          }}
        />
      </div>
    </div>
  );
}

export default Advisory;
