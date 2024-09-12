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
            <div className='relative duration-500 ease-in-out transform hover:scale-105 mb-[120px] md:mb-72 xl:mb-[100px]'>
                <div className="h-[400px] relative z-10">
                    <div className="h-[400px] xl:flex xl:ml-[80px] xl:float-start relative z-10">
                        <div className="flex justify-center relative z-10">
                            <div className="md:w-[400px] md:h-[400px] w-[300px] h-[300px] bg-[#d9d9d9] rounded-[30px]" style={{
                                backgroundImage: `url(${team.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}>
                                <div className="hidden sm:block absolute w-[400px] h-[400px]">
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
                        </div>
                        <div className="flex justify-center items-center xl:ml-[100px] mt-[15px] md:mt-[0px] m-[5px] md:m-[0] relative z-10">
                            <div>
                                <div className="md:w-[609px] md:h-[85px] text-center text-black md:text-[44px] text-[20px] font-semibold font-['Crimson Text']">
                                    {team.name}
                                </div>
                                <div className="md:w-[610px] md:h-[45px] text-center">
                                    <span className="text-black md:text-2xl text-[16px] font-bold font-['Crimson Text']">Trưởng ban </span>
                                    <span className="text-black md:text-2xl font-semibold font-['Crimson Text']">: {team.leader}</span>
                                </div>
                                <div className="md:w-[610px] md:h-[166px] text-center">
                                    <span className="text-black md:text-2xl text-[16px] font-bold font-['Crimson Text']">Hoạt động</span>
                                    <span className="text-black md:text-2xl font-semibold font-['Crimson Text']"> : {team.activate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[683px] h-[683px] top-[0%] right-[0%] absolute rounded-full blur-[85px] z-0"
                    style={{
                        backgroundColor: `${randomColor}40`, // Màu cố định trong trường hợp này
                    }}
                />
            </div>
        ) : (
            <div className='relative duration-500 ease-in-out transform hover:scale-105 mb-[120px] md:mb-72 xl:mb-[100px]'>
                <div className="h-[400px] relative z-10">
                    <div className="h-[400px] xl:flex xl:mr-[80px] xl:float-end md:mt-[0]">
                        <div className="order-2 flex justify-center">
                            <div className="md:w-[400px] md:h-[400px] w-[300px] h-[300px] bg-[#d9d9d9] rounded-[30px]" style={{
                                backgroundImage: `url(${team.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}>
                                <div className="hidden sm:block absolute w-[400px] h-[400px]">
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
                        <div className="order-1 flex justify-center items-center xl:mr-[100px] mt-[15px] md:mt-[0px] m-[5px] md:m-[0]">
                            <div>
                                <div className="md:w-[609px] md:h-[85px] text-center text-black md:text-[44px] text-[20px] font-semibold font-['Crimson Text']">
                                    {team.name}
                                </div>
                                <div className="md:w-[610px] md:h-[45px] text-center">
                                    <span className="text-black md:text-2xl text-[16px] font-bold font-['Crimson Text']">Trưởng ban </span>
                                    <span className="text-black md:text-2xl font-semibold font-['Crimson Text']">: {team.leader}</span>
                                </div>
                                <div className="md:w-[610px] md:h-[166px] text-center">
                                    <span className="text-black md:text-2xl  text-[16px] font-bold font-['Crimson Text']">Hoạt động</span>
                                    <span className="text-black md:text-2xl  font-semibold font-['Crimson Text']"> : {team.activate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[683px] h-[683px] top-[0%] left-[0%] absolute rounded-full blur-[85px] z-0"
                    style={{
                        backgroundColor: `${randomColor}40`, // Màu cố định trong trường hợp này
                    }}
                />
            </div>
        )
    )
}

export default TeamCard;
