import { Link } from "react-router-dom"

const Discover = () => {
  return (
    <>
      <section className="relative flex flex-col-reverse md:flex-row items-center bg-[url('https://www.highlandscoffee.com.vn/vnt_upload/cake/SPECIALTYCOFFEE/Untitled-1-01.png')]">
        <div className="relative md:w-[50%]">
          <div className="py-[40px] px-7 lg:px-14 md:py-14 w-full">
            <h1 className="uppercase text-center sm:text-left font-RobotoSemibold text-darkYellow hover:text-main text-3xl md:text-3xl xl:text-[3rem] mb-5 mt-0 sm:mt-5 md:leading-tight cursor-pointer">
              Dòng Cà Phê Đặc Biệt (SPECIALTY COFFEE)
            </h1>
            <p className="font-RobotoMedium text-center sm:text-left text-darkYellow text-[16px] lg:text-[18px] lg:w-[100%]">
              Với sự hội tụ giữa các hạt cà phê ngon nhất của Việt Nam và Thế Giới, cùng kết các phương pháp pha cà phê truyền thống và hiện đại. Highlands Bưu Điện Thành Phố đem lại các trải nghiệm độc đáo và mới lạ &#34;CHỈ RIÊNG TẠI ĐÂY&#34;.
            </p>
            <Link to='/products'>
              <button
                className="uppercase rounded-md shadow-md text-darkYellow border-[1px] border-darkYellow py-3 px-10 mt-5 hover:bg-main hover:text-white hover:shadow-lg ease-out duration-300"
              >
                Khám Phá Thêm
              </button>
            </Link>
          </div>
        </div>
        <div className="relative md:w-[50%]">
          <img
            src="https://www.highlandscoffee.com.vn/vnt_upload/cake/BACKGROUND/PNG/Cold_Brew_Lemon_copy.png"
            alt="coffee-img"
            className="w-full object-cover object-bottom h-full mt-[50px]"
          />
        </div>
      </section>

      <section className="relative flex flex-col-reverse md:flex-row items-center bg-[url('https://www.highlandscoffee.com.vn/vnt_upload/cake/SPECIALTYTEA/MODULE_TRA.png')]">
        <div className="relative md:w-[50%]">
          <img
            src="https://www.highlandscoffee.com.vn/vnt_upload/cake/BACKGROUND/PNG/Tra_Oi_Hong.png"
            alt="coffee-img"
            className="w-full object-cover object-bottom h-full mt-[50px]"
          />
        </div>
        <div className="relative md:w-[50%]">
          <div className="py-[40px] px-7 lg:px-14 md:py-14 w-full">
            <h1 className="uppercase text-center sm:text-right font-RobotoSemibold text-darkYellow hover:text-main text-3xl md:text-3xl xl:text-[3rem] mb-5 mt-0 sm:mt-5 md:leading-tight cursor-pointer">
              Tinh Hoa Trà HighLands (SPECIALTY TEA)
            </h1>
            <p className="font-RobotoMedium text-center sm:text-right text-darkYellow text-[16px] lg:text-[18px] lg:w-[100%]">
              Với việc kết hợp hương vị hiện đại và thảo mộc tinh tế, mang đến cho bạn hành trình trải nghiệm văn hóa Trà độc đáo, duy nhất tại Highlands Bưu Điện Thành Phố.
            </p>
            <Link to='/products'>
              <button
                className="uppercase rounded-md shadow-md text-darkYellow border-[1px] border-darkYellow py-3 px-10 mt-5 hover:bg-main hover:text-white hover:shadow-lg ease-out duration-300"
              >
                Khám Phá Thêm
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col-reverse md:flex-row items-center bg-[url('https://www.highlandscoffee.com.vn/vnt_upload/cake/STANDARDMENU/Untitled-1-03.png')]">
        <div className="relative md:w-[50%]">
          <div className="py-[40px] px-7 lg:px-14 md:py-14 w-full">
            <h1 className="uppercase text-center sm:text-left font-RobotoSemibold text-darkYellow hover:text-main text-3xl md:text-3xl xl:text-[3rem] mb-5 mt-0 sm:mt-5 md:leading-tight cursor-pointer">
              Menu Nguyên Bản (Standard Menu)
            </h1>
            <p className="font-RobotoMedium text-center sm:text-left text-darkYellow text-[16px] lg:text-[18px] lg:w-[100%]">
              Các sản phẩm đại diện của Chúng Mình mang đến hương vị tinh tế của văn hóa Việt Nam, gồm Phin Cà Phê Truyền Thống Coffee đậm đà,  Trà Sen Vàng độc đáo, Freeze Trà Xanh tuyệt vời và Phindi Hạnh Nhân ngon khó cưỡng. Mỗi sản phẩm tại Highlands Coffee là một câu chuyện, mời gọi bạn khám phá hương vị Việt qua từng ngụm, nơi giao thoa giữa Hiện Đại và Truyền Thống.
            </p>
            <Link to='/products'>
              <button
                className="uppercase rounded-md shadow-md text-darkYellow border-[1px] border-darkYellow py-3 px-10 mt-5 hover:bg-main hover:text-white hover:shadow-lg ease-out duration-300"
              >
                Khám Phá Thêm
              </button>
            </Link>
          </div>
        </div>
        <div className="relative md:w-[50%]">
          <img
            src="https://www.highlandscoffee.com.vn/vnt_upload/cake/BACKGROUND/PNG/Phin_Den_Da.png"
            alt="coffee-img"
            className="w-full object-cover object-bottom h-full mt-[50px]"
          />
        </div>
      </section>

      <section className="relative flex flex-col-reverse md:flex-row items-center bg-[url('https://www.highlandscoffee.com.vn/vnt_upload/cake/FOODMENU/Untitled-1-04.png')]">
        <div className="relative md:w-[50%]">
          <img
            src="https://www.highlandscoffee.com.vn/vnt_upload/cake/BACKGROUND/PNG/pizza1_copy.png"
            alt="coffee-img"
            className="w-full object-cover object-bottom h-full mt-[50px]"
          />
        </div>
        <div className="relative md:w-[50%]">
          <div className="py-[40px] px-7 lg:px-14 md:py-14 w-full">
            <h1 className="uppercase text-center sm:text-right font-RobotoSemibold text-darkYellow hover:text-main text-3xl md:text-3xl xl:text-[3rem] mb-5 mt-0 sm:mt-5 md:leading-tight cursor-pointer">
              Thực Đơn Món Ăn (Food menu)
            </h1>
            <p className="font-RobotoMedium text-center sm:text-right text-darkYellow text-[16px] lg:text-[18px] lg:w-[100%]">
              Khám phá Thực Đơn phong phú, các loại Bánh Mặn/Ngọt (mới) tại Highlands Bưu Điện Thành Phố được làm riêng tại nơi đây.
            </p>
            <Link to='/products'>
              <button
                className="uppercase rounded-md shadow-md text-darkYellow border-[1px] border-darkYellow py-3 px-10 mt-5 hover:bg-main hover:text-white hover:shadow-lg ease-out duration-300"
              >
                Khám Phá Thêm
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Discover
