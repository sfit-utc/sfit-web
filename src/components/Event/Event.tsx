import EventCard from "./EventCard/EventCard";
import activity1 from "../../assets/acitivity/8_Activity_1(25-5).jpg";
import activity2 from "../../assets/acitivity/8_Activity_2(21-4).jpg";
import activity4 from "../../assets/acitivity/8_Activity_4(13-11).jpg";
import activity6 from "../../assets/acitivity/8_Activity_6(29-10).jpg";
import activity7 from "../../assets/acitivity/8_Activity_7(29-10).jpg";
import activity8 from "../../assets/acitivity/8_Activity_8(20-10).jpg";
import activity9 from "../../assets/acitivity/8_Activity_9(15-10).jpg";
import activity10 from "../../assets/acitivity/8_Activity_10(8-10).jpg";
import activity12 from "../../assets/acitivity/8_Activity_12(23-9).jpg";
import activity13 from "../../assets/acitivity/8_Activity_13(19-7).jpg";
import activity14 from "../../assets/acitivity/8_Activity_14(28-6).jpg";
import activity15 from "../../assets/acitivity/8_Activity_15(21-5).jpg";
import activity16 from "../../assets/acitivity/8_Activity_16(23-2).jpg";
import activity17 from "../../assets/acitivity/8_Activity_17(12-2).jpg";
import activity18 from "../../assets/acitivity/8_Activity_18(22-12).jpg";
import activity19 from "../../assets/acitivity/8_Activity_19(12-11).jpg";

function Event() {
  return (
    <div id="activity">
      <h1
        className="text-center tracking-normal
                   font-[Inter] md:text-5xl text-xl font-bold text-[#267452]
                   mt-20"
      >
        CÁC HOẠT ĐỘNG THAM GIA
      </h1>
      <div className="mx-auto mt-2 bg-[#39906A] md:w-[525px] w-[200px] h-[4px] mb-20"></div>
      <div className="honor__list flex gap-10 w-fit animate-[infiniteCarousel_20s_linear_infinite]">
        <EventCard card={{
          date: "25/5",
          image: activity1,
        }} />
        <EventCard card={{
          date: "21/4",
          image: activity2,
        }} />
        <EventCard card={{
          date: "13/11",
          image: activity4,
        }} />
        <EventCard card={{
          date: "29/10",
          image: activity6,
        }} />
        <EventCard card={{
          date: "29/10",
          image: activity7,
        }} />
        <EventCard card={{
          date: "20/10",
          image: activity8,
        }} />
        <EventCard card={{
          date: "15/10",
          image: activity9,
        }} />
        <EventCard card={{
          date: "8/10",
          image: activity10,
        }} />
        <EventCard card={{
          date: "23/9",
          image: activity12,
        }} />
        <EventCard card={{
          date: "19/7",
          image: activity13,
        }} />
        <EventCard card={{
          date: "28/6",
          image: activity14,
        }} />
        <EventCard card={{
          date: "21/5",
          image: activity15,
        }} />
        <EventCard card={{
          date: "23/2",
          image: activity16,
        }} />
        <EventCard card={{
          date: "12/2",
          image: activity17,
        }} />
        <EventCard card={{
          date: "22/12",
          image: activity18,
        }} />
        <EventCard card={{
          date: "12/11",
          image: activity19,
        }} />
      </div>
    </div>
  );
}

export default Event;
