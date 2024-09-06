interface TeamCardProps {
    team: {
        name: string;
        activate: string;
        leader: string;
        image: string;
    };
    type: boolean;
}

const colors = [
    '#f2aa73',
    '#01c7be',
    '#f56569',
    '#ffd952',
    '#4fc491',
    '#74b3da',
    '#dea9e8',
    '#ff8eb4',
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

function TeamCard({ team, type }: TeamCardProps) {
    const randomColor = getRandomColor();

    return (
        type ? (
            <div className="transition-transform duration-500 ease-in-out transform hover:scale-105 flex justify-center mb-[100px] translate-x-[-6rem] relative">
                <div className="w-[1136px] h-[400px] flex justify-center items-center">
                    <div className="w-[1136px] h-[400px] relative">
                        <div className="w-[400px] h-[400px] absolute bg-[#d9d9d9] rounded-[30px]" style={{
                            backgroundImage: `url(${team.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }} >
                        </div>
                        <div className="w-[609px] h-[85px] absolute left-[526px] top-[47px] text-center text-black text-[44px] font-semibold font-['Crimson Text']">
                            {team.name}
                        </div>
                        <div className="w-[610px] h-[166px] absolute left-[526px] top-[203px] text-center">
                            <span className="text-black text-2xl font-bold font-['Crimson Text']">Hoạt động</span>
                            <span className="text-black text-2xl font-semibold font-['Crimson Text']"> : {team.activate}</span>
                        </div>
                        <div className="w-[610px] h-[45px] absolute left-[526px] top-[132px] text-center">
                            <span className="text-black text-2xl font-bold font-['Crimson Text']">Trưởng ban </span>
                            <span className="text-black text-2xl font-semibold font-['Crimson Text']">: {team.leader}</span>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[683px] h-[683px] left-[80%] absolute rounded-full blur-[85px]"
                    style={{
                        backgroundColor: `${randomColor}40`,
                    }}
                />
            </div>
        ) : (
            <div className='transition-transform duration-500 ease-in-out transform hover:scale-105 flex justify-center mb-[100px] translate-x-[6rem] relative'>
                <div className="w-[1135px] h-[400px] flex justify-center items-center">
                    <div className="w-[1135px] h-[400px] relative">
                        <div className="w-[400px] h-[400px] absolute left-[735px] top-0 bg-[#d9d9d9] rounded-[30px]" style={{
                            backgroundImage: `url(${team.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        </div>
                        <div className="w-[609px] h-[85px] absolute left-0 top-[39px] text-center text-black text-[44px] font-semibold font-['Crimson Text']">
                            {team.name}
                        </div>
                        <div className="w-[610px] h-[166px] absolute left-0 top-[195px] text-center">
                            <span className="text-black text-2xl font-bold font-['Crimson Text']">Hoạt động</span>
                            <span className="text-black text-2xl font-semibold font-['Crimson Text']"> : {team.activate}</span>
                        </div>
                        <div className="w-[610px] h-[45px] absolute left-0 top-[124px] text-center">
                            <span className="text-black text-2xl font-bold font-['Crimson Text']">Trưởng ban </span>
                            <span className="text-black text-2xl font-semibold font-['Crimson Text']">: {team.leader}</span>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[683px] h-[683px] left-[-10%] absolute rounded-full blur-[85px]"
                    style={{
                        backgroundColor: `${randomColor}40`, // Màu cố định trong trường hợp này
                    }}
                />
            </div>
        )
    )
}

export default TeamCard;
