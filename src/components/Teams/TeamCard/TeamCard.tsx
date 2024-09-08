interface TeamCardProps {
    team: {
        name: string;
        activate: string;
        leader: string;
        image: string;
        icon: string;
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
            <div className='duration-500 ease-in-out transform hover:scale-105 mb-[100px]'>
                <div className="h-[400px]">
                    <div className="h-[400px] flex mr-[80px] md:ml-[80px] float-start">
                        <div className="w-[400px] h-[400px] bg-[#d9d9d9] rounded-[30px]" style={{
                            backgroundImage: `url(${team.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                            <div className="absolute w-[400px] h-[400px]">
                                <div style={{
                                    backgroundImage: `url(${team.icon})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100px',
                                    height: '100px',
                                    position: 'absolute',
                                    top: '4%',
                                    left: '87%',
                                    margin: 'auto',
                                }}></div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center ml-[100px]">
                            <div>
                                <div className="w-[609px] h-[85px] text-center text-black text-[44px] font-semibold font-['Crimson Text']">
                                    {team.name}
                                </div>
                                <div className="w-[610px] h-[45px] text-center">
                                    <span className="text-black text-2xl font-bold font-['Crimson Text']">Trưởng ban </span>
                                    <span className="text-black text-2xl font-semibold font-['Crimson Text']">: {team.leader}</span>
                                </div>
                                <div className="w-[610px] h-[166px] text-center">
                                    <span className="text-black text-2xl font-bold font-['Crimson Text']">Hoạt động</span>
                                    <span className="text-black text-2xl font-semibold font-['Crimson Text']"> : {team.activate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[683px] h-[683px] top-[0%] right-[0%] absolute rounded-full blur-[85px]"
                    style={{
                        backgroundColor: `${randomColor}40`, // Màu cố định trong trường hợp này
                    }}
                />
            </div>
        ) : (
            <div className='duration-500 ease-in-out transform hover:scale-105 mb-[100px]'>
                <div className="h-[400px]">
                    <div className="h-[400px] flex md:mr-[80px] float-end">
                        <div className="flex justify-center items-center mr-[100px]">
                            <div>
                                <div className="w-[609px] h-[85px] text-center text-black text-[44px] font-semibold font-['Crimson Text']">
                                    {team.name}
                                </div>
                                <div className="w-[610px] h-[45px] text-center">
                                    <span className="text-black text-2xl font-bold font-['Crimson Text']">Trưởng ban </span>
                                    <span className="text-black text-2xl font-semibold font-['Crimson Text']">: {team.leader}</span>
                                </div>
                                <div className="w-[610px] h-[166px] text-center">
                                    <span className="text-black text-2xl font-bold font-['Crimson Text']">Hoạt động</span>
                                    <span className="text-black text-2xl font-semibold font-['Crimson Text']"> : {team.activate}</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-[400px] h-[400px] bg-[#d9d9d9] rounded-[30px]" style={{
                            backgroundImage: `url(${team.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                            <div className="absolute w-[400px] h-[400px]">
                                <div style={{
                                    backgroundImage: `url(${team.icon})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100px',
                                    height: '100px',
                                    position: 'absolute',
                                    top: '4%',
                                    left: '-13%',
                                    margin: 'auto',
                                }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[683px] h-[683px] top-[0%] left-[0%] absolute rounded-full blur-[85px]"
                    style={{
                        backgroundColor: `${randomColor}40`, // Màu cố định trong trường hợp này
                    }}
                />
            </div>
        )
    )
}

export default TeamCard;
