// "use client";
// import React from "react"
// import Image from "next/image"
// import { Swiper, SwiperSlide } from "swiper/react"

// import "swiper/css"
// import "swiper/css/effect-coverflow"
// import "swiper/css/pagination"
// import "swiper/css/navigation"
// import { SparklesIcon } from "lucide-react"
// import {
//   Autoplay,
//   EffectCoverflow,
//   Navigation,
//   Pagination,
// } from "swiper/modules"

// import { Badge } from "@/components/ui/badge"

// export const CardCarousel = ({
//   images,
//   autoplayDelay = 1500,
//   showPagination = true,
//   showNavigation = true,
// }) => {
//   const css = `
//   .swiper {
//     width: 100%;
//     padding-bottom: 50px;
//   }
  
//   .swiper-slide {
//     background-position: center;
//     background-size: cover;
//     width: 300px;
//     /* height: 300px; */
//     /* margin: 20px; */
//   }
  
//   .swiper-slide img {
//     display: block;
//     width: 100%;
//   }
  
  
//   .swiper-3d .swiper-slide-shadow-left {
//     background-image: none;
//   }
//   .swiper-3d .swiper-slide-shadow-right{
//     background: none;
//   }
//   `
//   return (
//     <section className="w-ace-y-4">
//       <style>{css}</style>
//       <div
//         className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
//         <div
//           className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 p-2 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">
//           <Badge
//             variant="outline"
//             className="absolute left-4 top-6 rounded-[14px] border border-black/10 text-base md:left-6">
//             <SparklesIcon className="fill-[#EEBDE0] stroke-1 text-neutral-800" />{" "}
//             Latest component
//           </Badge>
//           <div className="flex flex-col justify-center pb-2 pl-4 pt-14 md:items-center">
//             <div className="flex gap-2">
//               <div>
//                 <h3 className="text-4xl opacity-85 font-bold tracking-tight">
//                   Card Carousel
//                 </h3>
//                 <p>Seamless Images carousel animation.</p>
//               </div>
//             </div>
//           </div>

//           <div className="flex w-full items-center justify-center gap-4">
//             <div className="w-full">
//               <Swiper
//                 spaceBetween={50}
//                 autoplay={{
//                   delay: autoplayDelay,
//                   disableOnInteraction: false,
//                 }}
//                 effect={"coverflow"}
//                 grabCursor={true}
//                 centeredSlides={true}
//                 loop={true}
//                 slidesPerView={"auto"}
//                 coverflowEffect={{
//                   rotate: 0,
//                   stretch: 0,
//                   depth: 100,
//                   modifier: 2.5,
//                 }}
//                 pagination={showPagination}
//                 navigation={
//                   showNavigation
//                     ? {
//                         nextEl: ".swiper-button-next",
//                         prevEl: ".swiper-button-prev",
//                       }
//                     : undefined
//                 }
//                 modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}>
//                 {images.map((image, index) => (
//                   <SwiperSlide key={index}>
//                     <div className="size-full rounded-3xl">
//                       <Image
//                         src={image.src}
//                         width={500}
//                         height={500}
//                         className="size-full rounded-xl"
//                         alt={image.alt} />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//                 {images.map((image, index) => (
//                   <SwiperSlide key={index}>
//                     <div className="size-full rounded-3xl">
//                       <Image
//                         src={image.src}
//                         width={200}
//                         height={200}
//                         className="size-full rounded-xl"
//                         alt={image.alt} />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

export const CardCarousel = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const css = `
    .swiper {
      width: 100%;
      padding-bottom: 40px;
    }

    .swiper-slide {
      background: transparent;
    }

    .swiper-slide img {
      width: 100%;
      height: auto;
      border-radius: 24px;
    }

    .swiper-3d .swiper-slide-shadow-left,
    .swiper-3d .swiper-slide-shadow-right {
      background: none;
    }
  `;

  return (
    <section className="w-full">
      <style>{css}</style>

      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2,
        }}
        pagination={showPagination}
        navigation={
          showNavigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : undefined
        }
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="max-w-[500px] md:max-w-[600px] flex items-center justify-center"
          >
            <div className="rounded-3xl overflow-hidden w-full">
              <Image
                src={image.src}
                width={800}
                height={600}
                className="rounded-2xl object-contain w-full cursor-zoom-in"
                alt={image.alt}
                onClick={() => setSelectedImage(image)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Zoom Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1600}
              height={900}
              className="w-full h-auto object-contain rounded-xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full px-3 py-1"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
