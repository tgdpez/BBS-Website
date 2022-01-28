import React from "react";
import tw from "twin.macro";
import { Link } from "gatsby";

import { Pagination, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PageLayoutWrapper from "../layoutWrappers/PageLayoutWrapper";

const categories = ["artistic", "bathroom", "closet", "custom", "restoration"];

export default function Categories() {
  return (
    <PageLayoutWrapper>
      <div tw=' md:width[90%] mx-auto mt-[-5.5rem]'>
        <Swiper
          tw='h-[12rem]'
          modules={[Pagination, Navigation, Scrollbar]}
          scrollbar={{ draggable: true }}
          pagination={{
            clickable: true,
          }}
          navigation
          breakpoints={{
            320: {
              slidesPerView: "3",
              spaceBetween: 10,
            },
            480: {
              slidesPerView: "3",
              spaceBetween: 50,
            },
            640: {
              slidesPerView: "4",
              spaceBetween: 20,
            },
          }}
        >
          <div tw='flex'>
            {categories.map((el) => (
              <SwiperSlide
                key={el}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link to={`/category/${el}/`}>
                  <div
                    className={`${el}-tile-texture`}
                    css={[
                      // base styles
                      tw`h-24 w-24 sm:h-28 sm:w-28 bg-contain flex justify-center items-center rounded-full bg-gradient-to-r from-beige to-tan ring-4 shadow-2xl ring-offset-0 ring-lightGray hover:(ring-orangeAmber)`,
                      // conditional styles
                      el === "artistic" &&
                        tw`bg-illus-ptrn flex justify-center items-center after:block after:w-12 after:opacity-100 `,
                      el === "bathroom" &&
                        tw`bg-shower-ptrn flex justify-center items-center after:block after:w-12 after:opacity-100 `,
                      el === "closet" &&
                        tw`bg-closet-ptrn flex justify-center items-center after:block after:w-14 after:opacity-100 `,
                      el === "custom" &&
                        tw`bg-custom-ptrn flex justify-center items-center after:block after:w-8 after:opacity-100 `,
                      el === "floor" &&
                        tw`bg-floor-ptrn flex justify-center items-center after:block after:w-12 after:opacity-100 `,
                      el === "restoration" &&
                        tw`bg-woodrpr-ptrn flex justify-center items-center after:block after:w-11 after:opacity-100 `,
                    ]}
                  >
                    <p tw='absolute text-center font-bold text-sm text-lightGray'>
                      {el}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </PageLayoutWrapper>
  );
}
