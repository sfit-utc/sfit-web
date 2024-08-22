import '../index.css';
function Home() {
  return (
    <div className="relative 
                    flex items-center justify-center">
      {/* Background */}
      <div className="after:absolute after:w-screen after:h-screen after:bg-black after:opacity-30
                      relative w-screen h-screen 
                      flex items-center justify-center shrink-0
                      overflow-x-hidden  
                      bg-cover bg-no-repeat blur-sm "
      style={{
        backgroundImage:
          "url(https://s3-alpha-sig.figma.com/img/479c/58b1/3dd9eb58510b6a43a531f1bdd4eadf04?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HYMRbl56PzpG~3S0FB3kf6vyZHFtZj0E~7AUulYJQ9ocwcwDHOYyCR9huGB-GC7CKBWD2qPN0A2Fw5pkJVAtKreCosBL7RPwmxo2QNu4MJby4wTYAgwXOzSRYna3ST-PVUpb0NvBwTav13RgeUCAmIK6u0iWBcs28-IHHyALZS-4KvAJbKepPbugtXCOpvCiyiW5ZrU1CP3v97P7sx91T1DKIDiLn~uESFaSIXlonXN8xUMyAJ0rrg47EzZ52ISWYmtjIHLMT~UmkRI4wRyBXpKzEjFYgNYpUocXhsn8dqEd25o4k8pGwyHK5CoGoEEm02fz2HBlputEY0CHMia3aw__)",
      }}>
      </div>

      {/* Main */}
      <div className="absolute w-[90%] h-[80%]">

        {/* Navigation */}
        <div className="flex justify-end items-center 
                        h-14 gap-16
                        *:px-7 *:flex *:justify-center
                        [&_span]:flex [&_span]:flex-col [&_span]:justify-center [&_span]:font-semibold [&_span]:text-2xl [&_span]:text-white">
          <div><span>Trang chủ</span></div>
          <div><span>Các ban trực thuộc</span></div>
          <div><span>Hoạt động</span></div>
          <div><span>Đào tạo</span></div>
        </div>
        {/* Container */}
        <div className="min-h-full flex justify-around items-center">

          {/* Information */}
          <div className="flex flex-col w-fit">
            <span className="w-fit h-fit
             text-[11.625rem] text-transparent leading-[100%] font-bold font-['Jost']
             drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]
             bg-[linear-gradient(111deg,_#DEFFEE_10%,_#0FA858_72%,_#194C35_87%)] bg-clip-text ">
              SFIT</span>
            <span className="w-fit 
                             text-5xl font-bold text-white">UTC'S IT CLUB</span>
            <div className="w-fit 
                            flex items-center justify-center 
                            my-6">
              <button type="button" className='w-[70px] h-[70px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                  <path d="M47.2822 32.3925L28.3997 22.9484C27.8659 22.6813 27.2727 22.5551 26.6764 22.5819C26.0801 22.6087 25.5005 22.7875 24.9928 23.1015C24.4852 23.4154 24.0662 23.8539 23.7757 24.3754C23.4853 24.8969 23.3331 25.484 23.3335 26.0809V43.9192C23.3331 44.5161 23.4853 45.1032 23.7757 45.6247C24.0662 46.1462 24.4852 46.5847 24.9928 46.8986C25.5005 47.2125 26.0801 47.3914 26.6764 47.4182C27.2727 47.445 27.8659 47.3188 28.3997 47.0517L47.2822 37.6075C47.7661 37.3651 48.1729 36.9927 48.4572 36.5322C48.7415 36.0717 48.892 35.5412 48.892 35C48.892 34.4589 48.7415 33.9283 48.4572 33.4678C48.1729 33.0073 47.7661 32.635 47.2822 32.3925Z" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M35 61.25C49.4975 61.25 61.25 49.4975 61.25 35C61.25 20.5025 49.4975 8.75 35 8.75C20.5025 8.75 8.75 20.5025 8.75 35C8.75 49.4975 20.5025 61.25 35 61.25Z" stroke="#F8F8F8" stroke-width="2"/>
                </svg>
              </button>
              <span className="w-fit text-xl font-bold text-white">Xem video</span>
            </div>
            <button type="button" className="w-48 h-16
                                           bg-[#D9D9D9] rounded-[36px]
                                             shadow-[_0px_4px_4px_0px_rgba(0,0,0,0.31)]">
              <span className="text-[#267452] text-xl font-bold">Tìm hiểu thêm</span>
            </button>
          </div>

          {/* Slider */}
          <div className="[&>div]:shadow-[0px_13px_15.8px_0px_rgba(0,0,0,0.25)] 
                          relative 
                          flex items-center justify-center 
                          w-[35.25rem] h-[19.4375rem]">
            <div className="absolute 
                            w-[29rem] h-[16.3125rem] 
                            bg-cover bg-no-repeat bg-center active" style={{
                 backgroundImage: "url(https://s3-alpha-sig.figma.com/img/4572/7e8b/5d7d3a4481c08c77248c86f762001e6a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qdTWgcJriGvdYoSGUKXHMc2a4njcG3QBWcIzSJV4HfbxId0v7ETOXaL2C2-Qcob-wI6Dkx6spCtHa4f7fzpKoh8CoXfeMPHVOycliFRDnsXNiQomVXc84ofbVq4sgXeif8sT08QThAj-CSpBh5IuW7a~Zx8vpVM4EwEqN0yNUsyo5LBBMGKGnJTS4qAv25As-Wmal4WbsmmcxZlJGwQLuE9l8K3EiNRygsSZM-SGKG-viMnZLdG0w0cOQcvm5dSrVfKm2NIbNlB5VV58OX2Dx9w8PBJObXUaxey6jFGeOz5UQJhrTJQi5AVUQMCwuiLs71eWPF3ASFdtbXl2uWr~dQ__)"}}> 
            </div>
            <div className="absolute 
                            w-[29rem] h-[16.3125rem] 
                            bg-cover bg-no-repeat bg-center  " style={{
                 backgroundImage: "url(https://s3-alpha-sig.figma.com/img/98e7/8965/798500dbd51be0440aafe79fbc0b7189?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mwb35sW9Xa0HXK~xjLCA6K6bUP9ltaLhks0IW39BL8v5XfhXgFHsPhtYVAZB0eZQpHUS2fkw0KQVT7N97RRTxa2kpGZZrnHxJi95ggU7sRbjPDN9RU-uvaCOsjFbt60AvWRSkjUycnfRGOz-8xMG14EC7J9zhdtulnsv0HLzSWmm3ucQ3~dat5Jo2Uyymq-GYR6vp2CLew44lv6v68~VvkbfenoSrD8gtqqTOo62pGLC~ZVMfc0cdkIimzB4xT204Gw400JwaRIXlDcOO6g2g5BQU4emfKqRc~0nBQTv5ZWDZMW9FtCmwFSAijkvQL1Ah6Vd5kke-d1N1RPRD44ujQ__)"}}>
            </div>
            <div className="absolute 
                            w-[29rem] h-[16.3125rem] 
                            bg-cover bg-no-repeat bg-center" style={{
                 backgroundImage: "url(https://s3-alpha-sig.figma.com/img/479c/58b1/3dd9eb58510b6a43a531f1bdd4eadf04?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HYMRbl56PzpG~3S0FB3kf6vyZHFtZj0E~7AUulYJQ9ocwcwDHOYyCR9huGB-GC7CKBWD2qPN0A2Fw5pkJVAtKreCosBL7RPwmxo2QNu4MJby4wTYAgwXOzSRYna3ST-PVUpb0NvBwTav13RgeUCAmIK6u0iWBcs28-IHHyALZS-4KvAJbKepPbugtXCOpvCiyiW5ZrU1CP3v97P7sx91T1DKIDiLn~uESFaSIXlonXN8xUMyAJ0rrg47EzZ52ISWYmtjIHLMT~UmkRI4wRyBXpKzEjFYgNYpUocXhsn8dqEd25o4k8pGwyHK5CoGoEEm02fz2HBlputEY0CHMia3aw__)"}}>
            </div>
            <div className="absolute 
                            w-[29rem] h-[16.3125rem] 
                            bg-cover bg-no-repeat bg-center" style={{
                 backgroundImage: "url(https://s3-alpha-sig.figma.com/img/98e7/8965/798500dbd51be0440aafe79fbc0b7189?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mwb35sW9Xa0HXK~xjLCA6K6bUP9ltaLhks0IW39BL8v5XfhXgFHsPhtYVAZB0eZQpHUS2fkw0KQVT7N97RRTxa2kpGZZrnHxJi95ggU7sRbjPDN9RU-uvaCOsjFbt60AvWRSkjUycnfRGOz-8xMG14EC7J9zhdtulnsv0HLzSWmm3ucQ3~dat5Jo2Uyymq-GYR6vp2CLew44lv6v68~VvkbfenoSrD8gtqqTOo62pGLC~ZVMfc0cdkIimzB4xT204Gw400JwaRIXlDcOO6g2g5BQU4emfKqRc~0nBQTv5ZWDZMW9FtCmwFSAijkvQL1Ah6Vd5kke-d1N1RPRD44ujQ__)"}}>
            </div>

            
            <button className="absolute left-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M28 14C28 11.2311 27.1789 8.52431 25.6406 6.22202C24.1022 3.91973 21.9157 2.12531 19.3576 1.06569C16.7994 0.00605965 13.9845 -0.271187 11.2687 0.269007C8.553 0.8092 6.05844 2.14257 4.10051 4.10051C2.14257 6.05844 0.8092 8.553 0.269007 11.2687C-0.271187 13.9845 0.00605965 16.7994 1.06569 19.3576C2.12531 21.9157 3.91973 24.1022 6.22202 25.6406C8.52431 27.1789 11.2311 28 14 28C17.713 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14ZM22 15L9.85 15L15.43 20.607L14 22L6 14L14 6L15.43 7.427L9.85 13L22 13V15Z" fill="#F8F8F8"/>
              </svg>
            </button>
            <button className="absolute right-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M0 14C0 16.7689 0.821086 19.4757 2.35943 21.778C3.89777 24.0803 6.08427 25.8747 8.64243 26.9343C11.2006 27.9939 14.0155 28.2712 16.7313 27.731C19.447 27.1908 21.9416 25.8574 23.8995 23.8995C25.8574 21.9416 27.1908 19.447 27.731 16.7313C28.2712 14.0155 27.9939 11.2006 26.9343 8.64243C25.8747 6.08427 24.0803 3.89777 21.778 2.35943C19.4757 0.821086 16.7689 0 14 0C10.287 0 6.72601 1.475 4.1005 4.1005C1.475 6.72601 0 10.287 0 14ZM6 13H18.15L12.57 7.393L14 6L22 14L14 22L12.57 20.573L18.15 15H6V13Z" fill="#F8F8F8"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

     
  );
}

export default Home;
