import { useState, useEffect, useCallback } from "react";
import thaythong from "../../assets/thaythong.jpg";
import thayhung from "../../assets/thayhung.jpg";
import thaydung from "../../assets/thaydung.png";

const Board: React.FC = () => {
  const [boards, setBoards] = useState<HTMLDivElement[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    // Convert NodeList to Array
    const slidesArray = Array.from(
      document.querySelectorAll(".board")
    ) as HTMLDivElement[];
    setBoards(slidesArray);
  }, []);

  // useCallback to memoize changeSlide
  const changeBoard = useCallback(
    (index: number) => {
      boards.forEach((board, idx) => {
        board.classList.toggle("visible", idx === index);
        board.classList.toggle("opacity-100", idx === index);
        board.classList.toggle("invisible", idx !== index);
        board.classList.toggle("opacity-0", idx !== index);
      });
    },
    [boards]
  );

  useEffect(() => {
    changeBoard(activeIdx);
  }, [activeIdx, changeBoard]);

  const prevButton = () => {
    setActiveIdx((prevIdx) => {
      const newIdx = (prevIdx - 1 + boards.length) % boards.length;
      changeBoard(newIdx);
      return newIdx;
    });
  };

  const nextButton = () => {
    setActiveIdx((prevIdx) => {
      const newIdx = (prevIdx + 1) % boards.length;
      changeBoard(newIdx);
      return newIdx;
    });
  };
  return (
    <div className="bg-white w-screen h-screen overflow-x-hidden *:text-[#267452]">
      <h1
        className="text-center tracking-normal mt-20
                           font-[playfair-display] text-5xl font-bold
                           "
      >
        BAN CỐ VẤN
      </h1>
      <div
        className=" boards absolute w-screen h-2/3
                    [&>div]:absolute flex items-center justify-center
                    [&>div]:flex [&>div]:justify-center [&>div]:gap-16 
                    [&>div]:transition-opacity [&>div]:duration-700 [&>div]:ease-in-out"
      >
        {/* Items */}
        <div className="board visible">
          <div className="w-80 h-fit">
            <div className="h-72 w-80">
              <img
                className="w-full h-full object-contain"
                src={thaythong}
                alt="thaythong"
              />
            </div>
            <h3
              className="italic text-2xl text-center
                                            font-[playfair-display] font-bold tracking-wide
                                            mt-3"
            >
              Thầy Nguyễn Văn A
            </h3>
            <p
              className="text-center text-xl
                                            font-normal font-[Jost]"
            >
              HLV trưởng <br /> đội tuyển OLP THSV <br /> trường ĐH GTVT <br />{" "}
              GV bộ môn KHMT
            </p>
          </div>
          <div className="w-80 h-fit">
            <div className="h-72 w-80">
              <img
                className="w-full h-full object-contain"
                src={thaythong}
                alt="thaythong"
              />
            </div>
            <h3
              className="italic text-2xl text-center
                                            font-[playfair-display] font-bold tracking-wide
                                            mt-3"
            >
              Thầy Nguyễn Văn A
            </h3>
            <p
              className="text-center text-xl
                                            font-normal font-[Jost]"
            >
              HLV trưởng <br /> đội tuyển OLP THSV <br /> trường ĐH GTVT <br />{" "}
              GV bộ môn KHMT
            </p>
          </div>
          <div className="w-80 h-fit">
            <div className="h-72 w-80">
              <img
                className="w-full h-full object-contain"
                src={thaythong}
                alt="thaythong"
              />
            </div>
            <h3
              className="italic text-2xl text-center
                                            font-[playfair-display] font-bold tracking-wide
                                            mt-3"
            >
              Thầy Nguyễn Văn A
            </h3>
            <p
              className="text-center text-xl
                                            font-normal font-[Jost]"
            >
              HLV trưởng <br /> đội tuyển OLP THSV <br /> trường ĐH GTVT <br />{" "}
              GV bộ môn KHMT
            </p>
          </div>
        </div>
        <div
          className="board invisible
                                [&>div]:transition-opacity [&>div]:duration-500 [&>div]:ease-in-out"
        >
          <div className="w-80 h-fit">
            <div className="h-72 w-80">
              <img
                className="w-full h-full object-contain"
                src={thayhung}
                alt="thaythong"
              />
            </div>
            <h3
              className="italic text-2xl text-center
                                            font-[playfair-display] font-bold tracking-wide
                                            mt-3"
            >
              Thầy Nguyễn Văn A
            </h3>
            <p
              className="text-center text-xl
                                            font-normal font-[Jost]"
            >
              HLV trưởng <br /> đội tuyển OLP THSV <br /> trường ĐH GTVT <br />{" "}
              GV bộ môn KHMT
            </p>
          </div>
          <div className="w-80 h-fit">
            <div className="h-72 w-80">
              <img
                className="w-full h-full object-contain"
                src={thayhung}
                alt="thaythong"
              />
            </div>
            <h3
              className="italic text-2xl text-center
                                            font-[playfair-display] font-bold tracking-wide
                                            mt-3"
            >
              Thầy Nguyễn Văn A
            </h3>
            <p
              className="text-center text-xl
                                            font-normal font-[Jost]"
            >
              HLV trưởng <br /> đội tuyển OLP THSV <br /> trường ĐH GTVT <br />{" "}
              GV bộ môn KHMT
            </p>
          </div>
          <div className="w-80 h-fit">
            <div className="h-72 w-80">
              <img
                className="w-full h-full object-contain"
                src={thayhung}
                alt="thaythong"
              />
            </div>
            <h3
              className="italic text-2xl text-center
                                            font-[playfair-display] font-bold tracking-wide
                                            mt-3"
            >
              Thầy Nguyễn Văn A
            </h3>
            <p
              className="text-center text-xl
                                            font-normal font-[Jost]"
            >
              HLV trưởng <br /> đội tuyển OLP THSV <br /> trường ĐH GTVT <br />{" "}
              GV bộ môn KHMT
            </p>
          </div>
        </div>
        <div
          className="board invisible
                                [&>div]:transition-opacity [&>div]:duration-500 [&>div]:ease-in-out"
        >
          <div className="w-80 h-fit">
            <div className="h-72 w-80">
              <img
                className="w-full h-full object-contain"
                src={thaydung}
                alt="thaythong"
              />
            </div>
            <h3
              className="italic text-2xl text-center
                                            font-[playfair-display] font-bold tracking-wide
                                            mt-3"
            >
              Thầy Nguyễn Văn A
            </h3>
            <p
              className="text-center text-xl
                                            font-normal font-[Jost]"
            >
              HLV trưởng <br /> đội tuyển OLP THSV <br /> trường ĐH GTVT <br />{" "}
              GV bộ môn KHMT
            </p>
          </div>
          <div className="w-80 h-fit">
            <div className="h-72 w-80">
              <img
                className="w-full h-full object-contain"
                src={thaydung}
                alt="thaythong"
              />
            </div>
            <h3
              className="italic text-2xl text-center
                                            font-[playfair-display] font-bold tracking-wide
                                            mt-3"
            >
              Thầy Nguyễn Văn A
            </h3>
            <p
              className="text-center text-xl
                                            font-normal font-[Jost]"
            >
              HLV trưởng <br /> đội tuyển OLP THSV <br /> trường ĐH GTVT <br />{" "}
              GV bộ môn KHMT
            </p>
          </div>
          <div className="w-80 h-fit">
            <div className="h-72 w-80">
              <img
                className="w-full h-full object-contain"
                src={thaydung}
                alt="thaythong"
              />
            </div>
            <h3
              className="italic text-2xl text-center
                                            font-[playfair-display] font-bold tracking-wide
                                            mt-3"
            >
              Thầy Nguyễn Văn A
            </h3>
            <p
              className="text-center text-xl
                                            font-normal font-[Jost]"
            >
              HLV trưởng <br /> đội tuyển OLP THSV <br /> trường ĐH GTVT <br />{" "}
              GV bộ môn KHMT
            </p>
          </div>
        </div>
      </div>
      {/* Button */}
      <button
        onClick={prevButton}
        type="button"
        className="absolute left-32 top-1/2 translate-y-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
        >
          <path
            d="M43.125 23C43.125 19.0197 41.9447 15.1287 39.7333 11.8191C37.522 8.50961 34.3789 5.93014 30.7015 4.40693C27.0241 2.88371 22.9777 2.48517 19.0738 3.2617C15.1699 4.03822 11.584 5.95494 8.76948 8.76948C5.95494 11.584 4.03822 15.1699 3.2617 19.0738C2.48517 22.9777 2.88371 27.0241 4.40693 30.7015C5.93014 34.3789 8.50961 37.522 11.8191 39.7333C15.1287 41.9447 19.0197 43.125 23 43.125C28.3375 43.125 33.4564 41.0047 37.2305 37.2305C41.0047 33.4564 43.125 28.3375 43.125 23ZM34.5 24.4375L17.0344 24.4375L25.0556 32.4976L23 34.5L11.5 23L23 11.5L25.0556 13.5513L17.0344 21.5625L34.5 21.5625V24.4375Z"
            fill="#39906A"
          />
        </svg>
      </button>
      <button
        onClick={nextButton}
        type="button"
        className="absolute right-32 top-1/2 translate-y-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
        >
          <path
            d="M2.875 22.9999C2.875 26.9803 4.05531 30.8712 6.26667 34.1808C8.47804 37.4903 11.6211 40.0698 15.2985 41.593C18.9759 43.1162 23.0223 43.5147 26.9262 42.7382C30.8301 41.9617 34.416 40.045 37.2305 37.2304C40.0451 34.4159 41.9618 30.83 42.7383 26.9261C43.5148 23.0222 43.1163 18.9758 41.5931 15.2984C40.0699 11.621 37.4904 8.47795 34.1809 6.26658C30.8713 4.05522 26.9803 2.87491 23 2.87491C17.6625 2.87491 12.5436 4.99521 8.76948 8.76938C4.99531 12.5436 2.875 17.6624 2.875 22.9999ZM11.5 21.5624H28.9656L20.9444 13.5023L23 11.4999L34.5 22.9999L23 34.4999L20.9444 32.4486L28.9656 24.4374H11.5V21.5624Z"
            fill="#39906A"
          />
        </svg>
      </button>
    </div>
  );
};

export default Board;
