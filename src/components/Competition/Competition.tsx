import CompetitionCard from "./CompetitionCard/CompetitionCard"
import Compe1 from "../../assets/competition/contest1.jpg"
import Compe2 from "../../assets/competition/contest2.jpg"
import Compe3 from "../../assets/competition/contest3.jpg"

function Competition() {
  return (
    <div id='competition' className='w-screen'>
      <h1
        className="text-center tracking-normal
                       font-[Inter] md:text-5xl text-xl font-bold text-[#267452]
                       "
      >
        CÁC CUỘC THI
      </h1>
      <div className="mx-auto mt-2 bg-[#39906A] md:w-[525px] w-[200px] h-[4px] mb-20"></div>
      <div className="honor__list flex flex-wrap gap-10 items-center justify-center px-2">
        <CompetitionCard card={{
          name: "OLP Tin học SV 2024",
          image: Compe1,
          desc: "Cuộc thi dành cho sinh viên các trường ĐH"
        }}
        />
        <CompetitionCard card={{
          name: "The IT Club Freshman Code War",
          image: Compe2,
          desc: "Cuộc thi dành cho sinh viên các trường ĐH"
        }}
        />
        <CompetitionCard card={{
          name: "OLP Tin học cấp trường",
          image: Compe3,
          desc: "Cuộc thi dành cho sinh viên các trường ĐH"
        }}
        />

      </div>
    </div>

  )
}

export default Competition