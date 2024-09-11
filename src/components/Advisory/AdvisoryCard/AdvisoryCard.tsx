
interface Advisor {
  image: string;
  name: string;
  role:string;
  position: string;
  addition: string;
}

function AdvisoryCard({ advisor }: { advisor: Advisor }) {
  return (
    
      <div className="snap-center select-none flex flex-col w-80 h-fit *:font-[crimson-text]">
          <div className="h-96 w-80">
            <img className="w-full h-full object-cover border-8 rounded-3xl "
              src={advisor.image}
              alt="advisor1"
            />
          </div>
          <h3
            className="italic text-2xl text-center
                       font-[playfair-display] font-bold tracking-wide
                       mt-3"
          >
            {advisor.name}
          </h3>
          <p
            className="text-center text-xl
                       font-normal font-[Jost]"
          >
            {advisor.role}<br/>{advisor.position} <br/> {advisor.addition}
          </p>
      </div>
  )
}

export default AdvisoryCard;