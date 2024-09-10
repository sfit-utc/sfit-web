import Question from "./Question/Question";

function FAQs() {
  return (
    <div className="w-screen items-center bg-white">
      <h2 className="font-bold md:text-[42px] text-xl mt-5 bg-green-800 text-white text-center py-2 md:py-7">
        CÁC CÂU HỎI THƯỜNG GẶP
      </h2>

      <div className="grid divide-y divide-green-200 w-screen px-4 xl:px-44 lg:px-28 mx-auto text-black">
        <Question
          question={{
            question: " Lịch sử hình thành của CLB",
            answers: [
              "CLB được thành lập từ năm 2016 do thầy Nguyễn Đức Dư Giảng viên bộ môn Công nghệ phần mềm hiện nay là Giám đốc trung tâm thông tin - thư viện đặt nền móng và sáng lập nên CLB.",
            ],
          }}
        />
        <Question
          question={{
            question: "Mục tiêu của CLB",
            answers: [
              "+ Kết nối các sinh viên có đam mê về công nghệ thông tin trong và ngoài trường đại học.",
              "+ Giúp đỡ các thành viên CLB trong việc học tập và nghiên cứu để đạt được thành tích cao.",
              "+ Xây dựng một môi trường năng động, sáng tạo để các thành viên có thể tìm tòi, phát triển các kiến thức và kỹ năng trong ngành CNTT.",
              "+ Cung cấp cơ hội cho các thành viên tham gia vào nhiều dự án, từ đó cải thiện kỹ năng lập trình và giải quyết vấn đề.",
            ],
          }}
        />
        <Question
          question={{
            question: "Mô hình tổ chức CLB",
            answers: [
              "CLB được chia thành các ban:",
              "-  Khối Chuyên môn: bao gồm các ban có nhiệm vụ giảng dạy các kiến thức lập trình từ cơ bản đến chuyên ngành",
              "+ Ban Học tập: Tổ chức các buổi học tập và thảo luận, cung cấp tài liệu và hỗ trợ thành viên trong việc học tập và ôn thi.",
              "+ Ban Chuyên môn: Bao gồm các sinh viên năm 2 trở lên có thành tích học tập xuất sắc, có nhiệm vụ tổ chức các lớp học và chia sẻ kiến thức chuyên môn đến các thành viên CLB.",
              "+ Ban Web: Phát triển và duy trì các dự án liên quan đến lập trình web, giảng dạy các công nghệ và kỹ thuật liên quan.",
              "+ Ban Game: Tạo môi trường học tập và làm việc cho những bạn muốn theo hướng phát triển game (programmer, artist, designer). Thường tổ chức chia đội để tham gia những sự kiện GameJam (GameJam VietNam, GMTK GameJam).",
              "+ Ban Data-AI: Nghiên cứu và phát triển các ứng dụng trí tuệ nhân tạo, chia sẻ kiến thức về machine learning và deep learning.",
              "+ Ban Kỹ thuật máy tính: Giải quyết các vấn đề liên quan đến phần cứng và kỹ thuật máy tính, tổ chức các buổi thực hành về lắp ráp và sửa chữa máy tính.",
              "+ Ban IOT: Nghiên cứu và phát triển các dự án về Internet of Things, giảng dạy và chia sẻ kiến thức về các thiết bị kết nối.",
              "- Khối Ngoài Chuyên môn: gồm các ban có nhiệm vụ, xây dựng, phát triển CLB trong các lĩnh vực ngoài chuyên môn",
              "+ Ban Truyền thông: Xây dựng và phát triển hình ảnh của CLB, quản lý các kênh truyền thông xã hội và tổ chức các chiến dịch quảng bá.",
              "+ Ban Hậu cần: Đảm bảo các hoạt động và sự kiện của CLB diễn ra suôn sẻ, quản lý các công việc hậu cần và chuẩn bị cơ sở vật chất.",
              "+ Ban Đối ngoại: Chịu trách nhiệm thiết lập và duy trì mối quan hệ với các doanh nghiệp và các câu lạc bộ khác, tổ chức sự kiện, đồng thời tìm kiếm cơ hội hợp tác và tài trợ cho câu lạc bộ.",
            ],
          }}
        />
        <Question
          question={{
            question: "Các lớp học bổ trợ kiến thức do CLB tổ chức",
            answers: [
              "CLB hiện đang tổ chức nhiều lớp bổ trợ kiến thức dựa theo những môn học hiện đang được giảng dạy tại trường ĐH GTVT từ năm nhất đến năm hai, bao gồm: Tin học đại cương, Kĩ thuật lập trình, Lập trình hướng đối tượng, Cấu trúc dữ liệu và giải thuật, Git/Github, Thiết kế Web,…",
            ],
          }}
        />
        <Question
          question={{
            question: "Lợi ích khi tham gia CLB",
            answers: [
              "+ Nâng cao thành tích học tập: Tham gia các lớp học bổ trợ kiến thức do CLB tổ chức, giúp cải thiện kết quả học tập trong nhà trường.",
              "+ Phát triển kiến thức và kỹ năng chuyên môn: Mở rộng hiểu biết và rèn luyện kỹ năng trong đa dạng lĩnh vực của ngành CNTT.",
              "+ Môi trường năng động và sáng tạo: Trở thành một phần của cộng đồng sôi nổi, nơi bạn có thể tìm tòi và phát triển ý tưởng mới trong lĩnh vực CNTT.",
              "+ Kết nối: Gặp gỡ và giao lưu với các sinh viên và giảng viên cùng chung niềm đam mê CNTT.",
              "+ Rèn luyện kỹ năng mềm: Phát triển kỹ năng làm việc nhóm, thuyết trình và quản lý thời gian thông qua các hoạt động và dự án của CLB.",
            ],
          }}
        />
        <Question
          question={{
            question: "Đối tượng tham gia CLB",
            answers: [
              "CLB chào đón tất cả các sinh viên trong và ngoài trường đại học. Bất kể bạn có là sinh viên ngành CNTT, Điện - điện tử, hay các khối ngành khác, nếu bạn có niềm đam mê với công nghệ thông tin, CLB luôn mở rộng cánh cửa chào đón. SFIT mong muốn tạo ra một cộng đồng đa dạng, nơi mọi sinh viên có thể cùng nhau học hỏi, chia sẻ và phát triển kỹ năng trong lĩnh vực CNTT.",
            ],
          }}
        />
        <Question
          question={{
            question: "Làm thế nào để tham gia CLB",
            answers: [
              "Kế hoạch tuyển thành viên của CLB sẽ được thông báo trên fanpage chính thức: SFIT - CLB Tin học đại học Giao Thông Vận Tải.",
            ],
          }}
        />
      </div>
    </div>
  );
}

export default FAQs;
