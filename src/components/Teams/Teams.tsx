import TeamCard from './TeamCard/TeamCard';
import { useState } from 'react';
import BAN_CHU_NHIEM from '../../assets/teams/BAN_CHU_NHIEM.jpg';
import BAN_CHUYEN_MON from '../../assets/teams/BAN_CHUYEN_MON.jpg';
import BAN_CHUYEN_MON_ICON from '../../assets/teams/BAN_CHUYEN_MON_ICON.svg';
import BAN_WEB from '../../assets/teams/BAN_WEB.jpg';
import BAN_WEB_ICON from '../../assets/teams/BAN_WEB_ICON.svg';
import BAN_GAME from '../../assets/teams/BAN_GAME.jpg';
import BAN_GAME_ICON from '../../assets/teams/BAN_GAME_ICON.svg';
import BAN_AI from '../../assets/teams/BAN_AI.jpg';
import BAN_AI_ICON from '../../assets/teams/BAN_AI_ICON.svg';
import BAN_KY_THUAT_MAY_TINH from '../../assets/teams/BAN_KY_THUAT_MAY_TINH.jpg';
import BAN_KY_THUAT_MAY_TINH_ICON from '../../assets/teams/BAN_KY_THUAT_MAY_TINH_ICON.svg';
import BAN_IOT from '../../assets/teams/BAN_IOT.jpg';
import BAN_TIENG_ANH from '../../assets/teams/BAN_TIENG_ANH.jpg';
import BAN_TRUYEN_THONG from '../../assets/teams/BAN_TRUYEN_THONG.jpg';
import BAN_HAU_CAN from '../../assets/teams/BAN_HAU_CAN.jpg';
import BAN_HAU_CAN_ICON from '../../assets/teams/BAN_HAU_CAN_ICON.svg';
import BAN_DOI_NGOAI from '../../assets/teams/BAN_DOI_NGOAI.jpg';


const teams = [
  {
    name: 'BAN CHỦ NHIỆM',
    activate: 'Đảm bảo hoạt động của CLB diễn ra suôn sẻ, quản lý các ban trực thuộc và định hướng phát triển của CLB.',
    leader: 'Nguyễn Duy Mạnh',
    image: BAN_CHU_NHIEM,
    icon: "",
  },
  {
    name: 'BAN CHUYÊN MÔN',
    activate: 'Bao gồm các sinh viên năm 2 trở lên có thành tích học tập xuất sắc, có nhiệm vụ tổ chức các lớp học và chia sẻ kiến thức chuyên môn đến các thành viên CLB.',
    leader: 'Hoàng Mạnh Khiêm',
    image: BAN_CHUYEN_MON,
    icon: BAN_CHUYEN_MON_ICON,
  },
  {
    name: 'BAN WEB',
    activate: 'Phát triển và duy trì các dự án liên quan đến lập trình web, giảng dạy các công nghệ và kỹ thuật liên quan.',
    leader: 'Chu Quang Huy',
    image: BAN_WEB,
    icon: BAN_WEB_ICON,
  },
  {
    name: 'BAN LẬP TRÌNH GAME',
    activate: 'Tạo môi trường học tập và làm việc cho những bạn muốn theo hướng phát triển game (programmer, artist, designer). Thường tổ chức chia đội để tham gia những sự kiện GameJam (GameJam VietNam, GMTK GameJam)',
    leader: 'Trịnh Thành Nam',
    image: BAN_GAME,
    icon: BAN_GAME_ICON,
  },
  {
    name: 'BAN DATA&AI',
    activate: 'Nghiên cứu và phát triển các ứng dụng trí tuệ nhân tạo, chia sẻ kiến thức về machine learning và deep learning.',
    leader: 'Phạm Huy Hoàng',
    image: BAN_AI,
    icon: BAN_AI_ICON,
  },
  {
    name: 'BAN KỸ THUẬT MÁY TÍNH',
    activate: 'Giải quyết các vấn đề liên quan đến phần cứng và kỹ thuật máy tính, tổ chức các buổi thực hành về lắp ráp và sửa chữa máy tính.',
    leader: 'Bùi Xuân Sơn',
    image: BAN_KY_THUAT_MAY_TINH,
    icon: BAN_KY_THUAT_MAY_TINH_ICON
  },
  {
    name: 'BAN IOT',
    activate: 'Nghiên cứu và phát triển các dự án về Internet of Things, giảng dạy và chia sẻ kiến thức về các thiết bị kết nối. Tham gia các cuộc thi cấp trường, ngoài trường.',
    leader: 'Nguyễn Quốc Khánh',
    image: BAN_IOT,
    icon: "",
  },
  {
    name: 'BAN TIẾNG ANH',
    activate: 'Cải thiện kỹ năng tiếng Anh cho các thành viên, tổ chức các buổi học và thảo luận bằng tiếng Anh về các chủ đề công nghệ.',
    leader: 'Nguyễn Thị Hương',
    image: BAN_TIENG_ANH,
    icon: "",
  },
  {
    name: 'BAN TRUYỀN THÔNG',
    activate: 'Xây dựng và phát triển hình ảnh của CLB, quản lý các kênh truyền thông xã hội và tổ chức các chiến dịch quảng bá.',
    leader: 'Thân Văn Quân',
    image: BAN_TRUYEN_THONG,
    icon: "",
  },
  {
    name: 'BAN HẬU CẦN',
    activate: 'Đảm bảo các hoạt động và sự kiện của CLB diễn ra suôn sẻ, quản lý các công việc hậu cần và chuẩn bị cơ sở vật chất.',
    leader: 'Lê Thanh Huyền',
    image: BAN_HAU_CAN,
    icon: BAN_HAU_CAN_ICON,
  },
  {
    name: 'BAN ĐỐI NGOẠI',
    activate: 'Chịu trách nhiệm thiết lập và duy trì mối quan hệ với các doanh nghiệp và các câu lạc bộ khác, tổ chức sự kiện, đồng thời tìm kiếm cơ hội hợp tác và tài trợ cho câu lạc bộ.',
    leader: 'Trịnh Công Đức',
    image: BAN_DOI_NGOAI,
    icon: "",
  },
];

function Teams() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id='team' className='w-screen'>
      <h1
        className="text-center tracking-normal
                       font-[Inter] md:text-5xl text-xl font-bold text-[#267452]
                       "
      >
        CÁC BAN TRỰC THUỘC
      </h1>
      <div className="mx-auto mt-2 bg-[#39906A] md:w-[525px] w-[200px] h-[4px]"></div>
      <div className='md:mt-[148px] mt-[50px]'>
        {expanded ? (
          teams.map((team, index) => (
            <TeamCard key={index} team={team} type={index % 2 === 0} />
          ))
        ) : (
          teams.slice(0, 2).map((team, index) => (
            <TeamCard key={index} team={team} type={index % 2 === 0} />
          ))
        )}
      </div>
      <button
        className="flex mx-auto mt-4 bg-[#39906A] text-white px-4 py-2 rounded relative z-10"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Thu gọn' : 'Xem thêm'}
      </button>
    </div>
  );
}

export default Teams;