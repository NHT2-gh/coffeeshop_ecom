
const Origin = () => {
  return (
    <section>
      <div className="relative">
        <img
          src="https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-CAREER3.jpg"
          alt="banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r-white from-transparent to-white"></div>
      </div>
      <div className="w-[90%] lg:w-[80%] left-[15%] mx-auto bg-white mt-[10px]">
        <div className="flex">
          <div className="w-[50%] text-primary p-[60px]">
            <h1 className="uppercase font-RobotoSemibold text-5xl mb-3">
              Nguồn gốc
            </h1>
            <p className="font-normal text-primary">
              CÂU CHUYỆN NÀY LÀ CỦA CHÚNG MÌNH
            </p>
            <br />
            <p className="font-normal text-primary">
              Highlands Coffee® được thành lập vào năm 1999, bắt nguồn từ tình yêu dành cho đất Việt cùng với cà phê và cộng đồng nơi đây. Tinh thần cộng đồng luôn chảy trong ADN của mỗi người Việt mình. Ngay từ những ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ và góp phần phát triển cộng đồng bằng cách siết chặt thêm sự kết nối và sự gắn bó giữa người với người. Ngày hôm nay, với hàng trăm cửa hàng trên khắp Việt Nam và trên Thế Giới, thứ chúng mình đem lại không chỉ dừng lại ở cà phê. Chúng mình còn là nơi để thuộc về, là nơi để kết nối tất cả mọi người với nhau. Từ đó, Highlands Coffee® trở thành nơi dành riêng cho cộng đồng
            </p>
            <br />
            <p className="font-normal text-primary">
              Trong tương lai, chúng mình sẽ luôn thấy một Việt Nam đang phát triển và một Highlands Coffee® không ngừng cải tiến. Highlands Coffee® - điểm tụ họp của cộng đồng, nơi mọi người có thể kết nối và gắn kết với nhau bằng tình yêu dành cho cà phê, trà và các món ăn ngon. Tại Highlands Coffee®, chúng mình luôn sát cánh cùng bạn, chúng mình luôn ủng hộ bạn và chúng mình luôn đồng hành với nhau như một cộng đồng.
            </p>
            <br />
            <p className="font-semibold text-primary">
              Highlands Coffee® Là Của Chúng Mình.
            </p>
          </div>
          <div className="w-[50%] bg-white p-[60px]">
            <div className="flex">
              <div className="w-full">
                <ul className="font-RobotoMedium">
                  <li className="mb-5">
                    <a
                      href="/services"
                      className="flex items-end justify-center"
                    >
                      <img
                        src="https://www.highlandscoffee.com.vn/vnt_upload/about/thumbs/370_crop_Highlands_4577_R3_-_Copy.jpg"
                        alt="img-services"
                        className="relative"
                      />
                      <p
                        className="uppercase absolute text-white text-[34px] font-RobotoSemibold mb-5"
                      >
                        Dịch Vụ
                      </p>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="/jobs"
                      className="flex justify-center items-end"
                    >
                      <img
                        src="https://www.highlandscoffee.com.vn/vnt_upload/about/thumbs/370_crop_Highlands_5557_R3_-_Copy.jpg"
                        alt="img-jobs"
                        className="relative"
                      />
                      <p
                        className="uppercase absolute text-white text-[34px] font-RobotoSemibold mb-5"
                      >
                        Nghề Nghiệp
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Origin
