import '../index.css';
function Home() {
  return (
    <div className="home w-screen h-screen flex items-center justify-center overflow-x-hidden">
      {/* Background */}
      <div
        className="home__background w-screen h-screen bg-cover bg-no-repeat blur-sm shrink-0"
        style={{
          backgroundImage:
            "url(https://s3-alpha-sig.figma.com/img/479c/58b1/3dd9eb58510b6a43a531f1bdd4eadf04?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HYMRbl56PzpG~3S0FB3kf6vyZHFtZj0E~7AUulYJQ9ocwcwDHOYyCR9huGB-GC7CKBWD2qPN0A2Fw5pkJVAtKreCosBL7RPwmxo2QNu4MJby4wTYAgwXOzSRYna3ST-PVUpb0NvBwTav13RgeUCAmIK6u0iWBcs28-IHHyALZS-4KvAJbKepPbugtXCOpvCiyiW5ZrU1CP3v97P7sx91T1DKIDiLn~uESFaSIXlonXN8xUMyAJ0rrg47EzZ52ISWYmtjIHLMT~UmkRI4wRyBXpKzEjFYgNYpUocXhsn8dqEd25o4k8pGwyHK5CoGoEEm02fz2HBlputEY0CHMia3aw__)",
        }}
      ></div>
      <div className="home--blurring w-screen h-screen opacity-30"></div>
      {/* Main */}
      <div className="home__frame w-[125.5rem] h-[61.4rem]">
        <nav className="home__navbar inline-flex">
          <div className="w-[238px] h-14 justify-center items-center flex">
            <div className="w-[238px] h-14 text-center text-white text-[25px] font-semibold font-['Inter']">
              Trang chủ
            </div>
          </div>
          <div className="w-[250px] h-[31px] px-1.5 justify-center items-center flex">
            <div className="w-[238px] h-14 text-center text-white text-[25px] font-semibold font-['Inter']">
              Các ban trực thuộc
            </div>
          </div>
          <div className="w-[147px] h-[31px] justify-center items-center flex">
            <div className="w-[238px] h-14 text-center text-white text-[25px] font-semibold font-['Inter']">
              Hoạt động
            </div>
          </div>
          <div className="w-[107px] h-[31px] justify-center items-center flex">
            <div className="w-[238px] h-14 text-center text-white text-[25px] font-semibold font-['Inter']">
              Đào tạo
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Home;
