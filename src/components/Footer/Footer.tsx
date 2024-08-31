import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faPaperPlane,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4b8b74] px-12 py-12 text-white">
      <div className="max-w-9xl mx-auto flex flex-wrap items-start justify-around">
        {/* Logo và thông tin chung */}
        <div className="flex flex-col">
          <div className="text-5xl font-bold">LOGO</div>{" "}
          <p className="mt-10 text-1.9xl">
            SFIT - Cau Lac Bo Tin hoc Truong Dai hoc Giao thong Van tai
          </p>{" "}
          <p className="mt-20 text-3xl">THEO DÕI CHÚNG TÔI</p>{" "}
          <div className="ml-20 mt-6 flex space-x-8">
            {" "}
            <FontAwesomeIcon icon={faFacebook} className="text-4xl" />{" "}
            <FontAwesomeIcon icon={faTiktok} className="text-4xl" />{" "}
          </div>
        </div>

        {/* Liên hệ */}
        <div className="mt-8 flex flex-col sm:mt-0">
          <h4 className="my-8 text-3xl font-semibold">LIÊN HỆ</h4>{" "}
          <div className="mb-2 flex items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} className="my-2 text-4xl" />{" "}
            <span className="pl-5 text-xl">abc@gmail.com</span>{" "}
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} className="my-2 text-4xl" />{" "}
            <span className="pl-5 text-xl">(+84)1234567890</span>{" "}
          </div>
          <h4 className="my-8 text-3xl font-semibold">ĐỊA CHỈ</h4>{" "}
          <p className="text-2xl">
            Tầng 4, tòa A4, trường Đại học Giao thông Vận tải
          </p>{" "}
        </div>

        {/* Form gửi câu hỏi ẩn danh */}
        <div className="mt-8 flex flex-col sm:mt-0">
          <h4 className="my-8 text-3xl font-semibold">Gửi câu hỏi ẩn danh</h4>
          <div className="flex items-center py-6">
            <input
              type="text"
              className="w-full rounded-l-full bg-white p-4 text-black placeholder-gray-400"
              placeholder="Nhập câu hỏi của bạn..."
            />
            <button className="rounded-r-full bg-white p-4 text-[#4b8b74]">
              <FontAwesomeIcon icon={faPaperPlane} className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
