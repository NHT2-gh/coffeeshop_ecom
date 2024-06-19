
const Jobs = () => {
  return (
    <section>
      <div className="relative">
        <img
          src="https://www.highlandscoffee.com.vn/vnt_upload/about/Highlands_5557_R3_-_Copy.jpg"
          alt="banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r-white from-transparent to-white"></div>
      </div>
      <div className="w-[90%] lg:w-[80%] left-[15%] mx-auto bg-white mt-[10px]">
        <div className="flex">
          <div className="w-[50%] text-primary p-[60px] text-[14px]">
            <h1 className="uppercase font-RobotoSemibold text-5xl mb-3">
              Nghề Nghiệp
            </h1>
            <p className="font-RobotoMedium text-primary">
              CƠ HỘI NÀY LÀ CỦA CHÚNG MÌNH
            </p>
            <br />
            <p className=" text-primary font-normal">
              Chúng mình biết rằng để thành công, bạn muốn làm việc với những đồng nghiệp tuyệt vời, tận hưởng những khoảng thời gian đẹp nhất, hiệu quả nhất, thể hiện được tài năng, đam mê của mình và được là chính mình nhất. Tại cộng đồng Highlands của chúng mình, bạn sẽ được truyền cảm hứng từ các cơ hội việc làm chúng mình có và trở thành phiên bản tốt nhất của chính bản thân trong cộng đồng của chúng mình.
            </p>
            <br />
            <p className="font-normal text-primary">
              Chúng mình hoàn toàn tin tưởng rằng nhiệm vụ của Highlands là trao quyền cho bạn, hỗ trợ bạn trong quá trình bạn tỏa sáng, tạo kiện tốt nhất để bạn nâng cấp kỹ năng vốn có của bạn cũng như khai phá những tố chất tiềm ẩn để bạn chạm đến PHIÊN BẢN TỐT NHẤT của bản thân. Cho dù bạn mới bắt đầu sự nghiệp hay đang là một chuyên gia có thật nhiều kinh nghiệm, tương lai của bạn đều có thể bắt đầu từ đây để hoàn thiện chính mình trong hành trình chinh phục những thử thách đầy hoài bão.
            </p>
            <br />
            <p className="font-normal text-primary">
              Bạn đã sẵn sàng để nắm lấy cơ hội kiến tạo sự nghiệp cùng chúng mình để góp sức dựng xây một <span className="font-bold">Highlands Coffee® Là Của Chúng Mình?</span>
            </p>
            <br />
            <p className="font-semibold text-primary">
              HÃY CÙNG CHÚNG MÌNH KHÁM PHÁ NHÉ:
            </p>
            <br />
            <a href="https://careers.highlandscoffee.com.vn/vi/trang-chu/">
              <img
                src="https://www.highlandscoffee.com.vn/vnt_upload/about/talent-highlands.png"
                alt="img-talent"
              />
            </a>

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
                      href="/services"
                      className="flex justify-center items-end"
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Jobs
