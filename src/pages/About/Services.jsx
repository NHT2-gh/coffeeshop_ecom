

const Services = () => {
  return (
    <section>
      <div className="relative">
        <img
          src="https://www.highlandscoffee.com.vn/vnt_upload/about/Highlands_4577_R3_-_Copy.jpg"
          alt="banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r-white from-transparent to-white"></div>
      </div>
      <div className="w-[90%] lg:w-[80%] left-[15%] mx-auto bg-white mt-[10px]">
        <div className="flex">
          <div className="w-[50%] text-primary p-[60px] text-[14px]">
            <h1 className="uppercase font-RobotoSemibold text-5xl mb-3">
              Dịch Vụ
            </h1>
            <p className="font-normal text-primary">
              DỊCH VỤ NÀY LÀ CỦA CHÚNG MÌNH
            </p>
            <br />
            <p className=" text-primary font-RobotoMedium">
              Chúng mình có thể làm gì để hoàn thiện Highlands Coffee®?
            </p>
            <br />
            <p className="font-normal text-primary">
              Highlands Coffee® là không gian của chúng mình nên mọi thứ ở đây đều vì sự thoải mái của chúng mình.
            </p>
            <br />
            <p className="font-normal text-primary">
              Đừng giữ trong lòng, hãy chia sẻ với chúng mình điều bạn mong muốn để cùng nhau giúp Highlands Coffee® của chúng mình trở nên tuyệt vời hơn.
            </p>
            <br />
            <p className="font-bold text-primary">
              Đừng ngại chia sẻ ý kiến của bạn tại:
            </p>
            <br />
            <p className="font-normal text-primary">
              Facebook: <span className="text-main">https://www.facebook.com/highlandscoffeevietnam/</span>
            </p>
            <br />
            <p className="font-normal text-primary">
              Hoặc bạn có thể gửi email cho chúng mình đến địa chỉ: <span className="text-main">customerservice@highlandscoffee.com.vn</span>, chúng mình sẽ phản hồi trong thời gian sớm nhất có thể.
            </p>
          </div>
          <div className="w-[50%] bg-white p-[60px]">
            <div className="flex">
              <div className="w-full">
                <ul className="font-RobotoMedium">
                  <li className="mb-5">
                    <a
                      href="/origin"
                      className="flex items-end justify-center"
                    >
                      <img
                        src="https://www.highlandscoffee.com.vn/vnt_upload/about/thumbs/370_crop_ABOUT-CAREER3.jpg"
                        alt="img-origin"
                        className="relative"
                      />
                      <p
                        className="uppercase absolute text-white text-[34px] font-RobotoSemibold mb-5"
                      >
                        Nguồn Gốc
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

export default Services
