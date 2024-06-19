import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="lg:mr-4">
          <a href="/" className="flex items-center">
            <img
              src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/White_logo800.png"
              alt="logo"
              className="w-36 ml-10 mb-4"
            />
          </a>

          <div className="flex px-8">
            <a
              href="https://www.facebook.com/highlandscoffeevietnam/"
              className="rounded-full border mx-4 mb-8 p-1 hover:bg-red ease-out duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fhighlandscoffeevietnam%2F"
              className="rounded-full border mr-4 mb-8 p-1 hover:bg-red ease-out duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/channel/UCHEqa2uTf8uXrGWrnU3ThgA"
              className="rounded-full border mr-4 mb-8 p-1 hover:bg-red ease-out duration-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="lg:mr-4">
          <p className="text-[15px] font-semibold">Highlands Coffee</p>
          <p className="text-xs">
            <br />
            123-125 Nguyễn Cơ Thạch,
            <br />
            Phường An Lợi Đông,
            <br />
            Quận 2,
            <br />
            Thành phố Hồ Chí Minh
            <br />
            Việt Nam.
          </p>
        </div>

        <div className="lg:mr-4">
          <a href="/about">
            <p className="uppercase text-xs text-white mb-2 font-bold hover:text-red ease-out duration-300">
              Về Chúng Tôi
            </p>
          </a>

          <a href="/menu">
            <p className="uppercase text-xs text-white mb-2 font-bold hover:text-red ease-out duration-300">
              Thực Đơn
            </p>
          </a>

          <a href="/news">
            <p className="uppercase text-xs text-white mb-2 font-bold hover:text-red ease-out duration-300">
              Tin Tức
            </p>
          </a>

          <a href="/card">
            <p className="uppercase text-xs text-white mb-2 font-bold hover:text-red ease-out duration-300">
              Thẻ
            </p>
          </a>
        </div>

        <div>
          <p className="uppercase text-xs text-white font-bold">
            Liên Hệ
          </p>

          <a
            className="text-white hover:text-red ease-out duration-300 text-[14px] mb-3 font-semibold"
            href="mailto:customerservice@highlandscoffee.com.vn"
          >
            customerservice@highlandscoffee.com.vn
          </a>
          <br />

          <p className="text-white uppercase tracking-normal text-[12px] font-semibold mt-3">
            MON-SUN, 7AM - 11PM
          </p>

        </div>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <p className="text-xs mb-2 md:mb-0">
          © {currentYear} Highlands Coffee. All rights reserved
        </p>

        <div className="text-center md:text-right">
          <a
            className="text-white hover:text-red focus:text-red ease-out duration-300 mr-3 text-xs"
            href="/disclaimer"
          >
            Disclaimer
          </a>

          <a
            className="border-l border-white pl-3 text-white hover:text-red focus:text-red ease-out duration-300 text-xs"
            href="/privacy-notice"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
