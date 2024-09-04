import LeaderCard from "./LeaderCard/LeaderCard";
import leader1 from "../../assets/leaders/6_Admin_1.jpg";
import leader2 from "../../assets/leaders/6_Admin_2.jpg";
import leader3 from "../../assets/leaders/6_Admin_3.jpg";

function Leader() {
  return (
    <div id="leader" className="mt-[184px] mb-[120px] relative bg-white w-screen flex flex-col items-center justify-center">
      <p className="text-center text-[42px] font-playfair font-bold leading-normal tracking-[1.68px] text-[#267452] mb-8">
        BAN CHỦ NHIỆM
      </p>

      <div className="flex space-x-32 mt-[70px] mb-[8rem]">
        <div className="transform translate-y-32">
          <LeaderCard
            leader={{
              name: "Phạm Huy Hoàng",
              position: "Phó chủ nhiệm",
              image: leader2,
              facebook: "https://www.facebook.com",
              email: "https://mail.google.com"
            }}
          />
        </div>
        <div className="transform translate-y-0">
          <LeaderCard
            leader={{
              name: "Nguyễn Duy Mạnh",
              position: "Chủ nhiệm",
              image: leader1,
              facebook: "https://www.facebook.com",
              email: "https://mail.google.com"
            }}
          />
        </div>
        <div className="transform translate-y-32">
          <LeaderCard
            leader={{
              name: "Trịnh Thành Nam",
              position: "Phó chủ nhiệm",
              image: leader3,
              facebook: "https://www.facebook.com",
              email: "https://mail.google.com"
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Leader;
