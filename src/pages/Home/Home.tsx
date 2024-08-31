import "../../index.css";
import NavBar from "../../components/NavBar";
import Slider from "../../components/Slider";

function Home() {
  return (
    // Home
    <div className="overflow-x-hidden">
      {/* Welcome */}
      <div
        className="relative w-screen h-screen
                      flex justify-center items-center"
      >
        {/* Background */}
        <div
          className="after:absolute after:w-screen after:h-screen after:bg-black after:opacity-30
                        absolute w-screen h-screen 
                        flex items-center justify-center shrink-0
                        overflow-x-hidden  
                        bg-cover bg-no-repeat bg-[url(./assets/CLB.jpg)] blur-sm "
        ></div>

        {/* Main */}
        <div className="absolute w-[90%] h-[80%]">
          {/* Navigation */}
          <NavBar />
          {/* First Page */}
          <div className="min-h-full flex justify-around items-center">
            {/* Information */}
            <div className="flex flex-col w-fit">
              <span
                className="w-fit h-fit
              text-[11.625rem] text-transparent leading-[100%] font-bold font-['Jost']
              drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]
              bg-[linear-gradient(111deg,_#DEFFEE_10%,_#0FA858_72%,_#194C35_87%)] bg-clip-text "
              >
                SFIT
              </span>
              <span
                className="w-fit 
                              text-5xl font-bold text-white"
              >
                UTC'S IT CLUB
              </span>
              <div
                className="w-fit 
                              flex items-center justify-center 
                              my-6"
              >
                <button type="button" className="w-[70px] h-[70px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                  >
                    <path
                      d="M47.2822 32.3925L28.3997 22.9484C27.8659 22.6813 27.2727 22.5551 26.6764 22.5819C26.0801 22.6087 25.5005 22.7875 24.9928 23.1015C24.4852 23.4154 24.0662 23.8539 23.7757 24.3754C23.4853 24.8969 23.3331 25.484 23.3335 26.0809V43.9192C23.3331 44.5161 23.4853 45.1032 23.7757 45.6247C24.0662 46.1462 24.4852 46.5847 24.9928 46.8986C25.5005 47.2125 26.0801 47.3914 26.6764 47.4182C27.2727 47.445 27.8659 47.3188 28.3997 47.0517L47.2822 37.6075C47.7661 37.3651 48.1729 36.9927 48.4572 36.5322C48.7415 36.0717 48.892 35.5412 48.892 35C48.892 34.4589 48.7415 33.9283 48.4572 33.4678C48.1729 33.0073 47.7661 32.635 47.2822 32.3925Z"
                      stroke="#F8F8F8"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M35 61.25C49.4975 61.25 61.25 49.4975 61.25 35C61.25 20.5025 49.4975 8.75 35 8.75C20.5025 8.75 8.75 20.5025 8.75 35C8.75 49.4975 20.5025 61.25 35 61.25Z"
                      stroke="#F8F8F8"
                      stroke-width="2"
                    />
                  </svg>
                </button>
                <span className="w-fit text-xl font-bold text-white">
                  Xem video
                </span>
              </div>
              <button
                type="button"
                className="w-48 h-16
                                            bg-[#D9D9D9] rounded-[36px]
                                              shadow-[_0px_4px_4px_0px_rgba(0,0,0,0.31)]"
              >
                <span className="text-[#267452] text-xl font-bold">
                  Tìm hiểu thêm
                </span>
              </button>
            </div>

            {/* Slider */}
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
