
interface Class {
    image: string;
    name: string;
    desc: string;
    attendants: string;
    hours: string;
    days: string;
}

function ClassCard({ classInfor }: { classInfor: Class }) {
    return (
        <div
            className=" h-[500px]
                        md:w-80  
                        xl:w-96  
                        border-2 rounded-3xl border-[#267452] p-5
                        flex flex-col"
          >
            <div className="xl:h-72 xl:w-80 
                            self-center">
              <img src={classInfor.image} className="rounded-3xl w-full h-full object-contain " />
            </div>
            <h3
              className=" text-2xl text-center 
                          font-[Inter] font-bold tracking-wide
                          mt-3"
            >
              Lớp : {classInfor.name}
            </h3>
            <div className="flex flex-col justify-between h-full">
              <p
                className="text-center text-xl
                                      font-normal font-[crimson-text]"
              >
                {classInfor.desc}
              </p>
              <div className="mt-4 flex justify-evenly [&>div]:flex  [&>div]:items-center">
                <div className="">
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                    >
                      <path
                        d="M8.25 38.5C8.25 38.5 5.5 38.5 5.5 35.75C5.5 33 8.25 24.75 22 24.75C35.75 24.75 38.5 33 38.5 35.75C38.5 38.5 35.75 38.5 35.75 38.5H8.25ZM22 22C24.188 22 26.2865 21.1308 27.8336 19.5836C29.3808 18.0365 30.25 15.938 30.25 13.75C30.25 11.562 29.3808 9.46354 27.8336 7.91637C26.2865 6.36919 24.188 5.5 22 5.5C19.812 5.5 17.7135 6.36919 16.1664 7.91637C14.6192 9.46354 13.75 11.562 13.75 13.75C13.75 15.938 14.6192 18.0365 16.1664 19.5836C17.7135 21.1308 19.812 22 22 22Z"
                        fill="#333333"
                      />
                    </svg>
                  </div>
                  <p className="">{classInfor.attendants}</p>
                </div>
                <div className="">
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                    >
                      <path
                        d="M22 38.5C31.1127 38.5 38.5 31.1127 38.5 22C38.5 12.8873 31.1127 5.5 22 5.5C12.8873 5.5 5.5 12.8873 5.5 22C5.5 31.1127 12.8873 38.5 22 38.5Z"
                        stroke="#333333"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 12.8334V19.734C22 20.4151 22.1897 21.0827 22.5479 21.662C22.906 22.2413 23.4184 22.7094 24.0277 23.0139L29.3333 25.6667"
                        stroke="#333333"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <div className="">{classInfor.hours}</div>
                    <div className="">{classInfor.days}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default ClassCard;