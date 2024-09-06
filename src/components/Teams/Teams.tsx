import TeamCard from './TeamCard/TeamCard';
import { useState } from 'react';

const teams = [
  {
    name: 'BAN CHỦ NHIỆM',
    activate: 'Đảm bảo hoạt động của CLB diễn ra suôn sẻ, quản lý các ban trực thuộc và định hướng phát triển của CLB.',
    leader: 'Nguyễn Duy Mạnh',
    image: '/src/assets/teams/BAN_CHU_NHIEM.jpg',
  },
  {
    name: 'BAN CHUYÊN MÔN',
    activate: 'Bao gồm các sinh viên năm 2 trở lên có thành tích học tập xuất sắc, có nhiệm vụ tổ chức các lớp học và chia sẻ kiến thức chuyên môn đến các thành viên CLB.',
    leader: 'Hoàng Mạnh Khiêm',
    image: '/src/assets/teams/BAN_CHUYEN_MON.jpg',
  },
  {
    name: 'BAN WEB',
    activate: 'Phát triển và duy trì các dự án liên quan đến lập trình web, giảng dạy các công nghệ và kỹ thuật liên quan.',
    leader: 'Chu Quang Huy',
    image: '/src/assets/teams/BAN_WEB.jpg',
  },
  {
    name: 'BAN GAME',
    activate: 'Tạo môi trường học tập và làm việc cho những bạn muốn theo hướng phát triển game (programmer, artist, designer). Thường tổ chức chia đội để tham gia những sự kiện GameJam (GameJam VietNam, GMTK GameJam)',
    leader: 'Trịnh Thành Nam',
    image: '/src/assets/teams/BAN_GAME.jpg',
  },
  {
    name: 'BAN AI',
    activate: 'Nghiên cứu và phát triển các ứng dụng trí tuệ nhân tạo, chia sẻ kiến thức về machine learning và deep learning.',
    leader: 'Phạm Huy Hoàng',
    image: '/src/assets/teams/BAN_AI.jpg',
  },
  {
    name: 'BAN KỸ THUẬT MÁY TÍNH',
    activate: 'Giải quyết các vấn đề liên quan đến phần cứng và kỹ thuật máy tính, tổ chức các buổi thực hành về lắp ráp và sửa chữa máy tính.',
    leader: 'Bùi Xuân Sơn',
    image: '/src/assets/teams/BAN_KY_THUAT_MAY_TINH.jpg',
  },
  {
    name: 'BAN IOT',
    activate: 'Nghiên cứu và phát triển các dự án về Internet of Things, giảng dạy và chia sẻ kiến thức về các thiết bị kết nối. Tham gia các cuộc thi cấp trường, ngoài trường.',
    leader: 'Nguyễn Quốc Khánh',
    image: '/src/assets/teams/BAN_IOT.jpg',
  },
  {
    name: 'BAN TIẾNG ANH',
    activate: 'Cải thiện kỹ năng tiếng Anh cho các thành viên, tổ chức các buổi học và thảo luận bằng tiếng Anh về các chủ đề công nghệ.',
    leader: 'Nguyễn Thị Hương',
    image: '/src/assets/teams/BAN_TIENG_ANH.jpg',
  },
  {
    name: 'BAN TRUYỀN THÔNG',
    activate: 'Xây dựng và phát triển hình ảnh của CLB, quản lý các kênh truyền thông xã hội và tổ chức các chiến dịch quảng bá.',
    leader: 'Thân Văn Quân',
    image: '/src/assets/teams/BAN_TRUYEN_THONG.jpg',
  },
  {
    name: 'BAN HẬU CẦN',
    activate: 'Đảm bảo các hoạt động và sự kiện của CLB diễn ra suôn sẻ, quản lý các công việc hậu cần và chuẩn bị cơ sở vật chất.',
    leader: 'Lê Thanh Huyền',
    image: '/src/assets/teams/BAN_HAU_CAN.jpg',
  },
  {
    name: 'BAN ĐỐI NGOẠI',
    activate: 'Chịu trách nhiệm thiết lập và duy trì mối quan hệ với các doanh nghiệp và các câu lạc bộ khác, tổ chức sự kiện, đồng thời tìm kiếm cơ hội hợp tác và tài trợ cho câu lạc bộ.',
    leader: 'Trịnh Công Đức',
    image: '/src/assets/teams/BAN_DOI_NGOAI.jpg',
  },
];

function Teams() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className='w-screen'>
      <div className="text-[#267452] text-center font-serif text-[35px] font-semibold leading-normal">
        CÁC BAN TRỰC THUỘC
      </div>
      <div className="mx-auto mt-2 bg-[#39906A] w-[525px] h-[4px]"></div>
      <div className='mt-[148px]'>
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
        className="flex mx-auto mt-4 bg-[#39906A] text-white px-4 py-2 rounded"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Thu gọn' : 'Xem thêm'}
      </button>
    </div>
  );
}

export default Teams;