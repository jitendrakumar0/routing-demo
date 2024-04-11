"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import 'swiper/css';
export default function Home() {
  return (
    <>
      <div className="relative bg-gray-900 py-6 md:py-8 lg:py-16 select-none text-white">
        <Swiper className="swiper portfolioSwiper w-full px-4 md:px-0 mx-auto flex max-w-7xl

        [&_.swiper-slide]:rounded-2xl [&_.swiper-slide]:overflow-hidden

        [&_.swiperInner]:p-1 [&_.swiperInner]:bg-gray-700 [&_.swiperInner]:relative [&_.swiperInner]:w-full [&_.swiperInner]:rounded-2xl [&_.swiperInner]:overflow-hidden

        [&_img]:w-full [&_img]:aspect-[4/5] [&_img]:overflow-hidden [&_img]:rounded-xl [&_img]:z-0 [&_img]:duration-[3000ms]

        [&_.content]:mt-10 [&_.content]:flex [&_.content]:rounded-xl [&_.content]:rounded-t-none [&_.content]:items-center [&_.content]:sm:justify-center [&_.content]:absolute [&_.content]:inset-1 [&_.content]:top-auto [&_.content]:z-[1] before:[&_.content]:absolute before:[&_.content]:inset-3 before:[&_.content]:z-[1] before:[&_.content]:bg-gradient-to-t before:[&_.content]:backdrop-blur-xl before:[&_.content]:rounded-xl [&_.content]:py-8

        [&_.contentInner]:w-full [&_.contentInner]:relative [&_.contentInner]:z-[3] [&_.contentInner]:text-center

        [&_.title]:text-base [&_.title]:md:text-lg [&_.title]:font-bold [&_.title]:leading-6 [&_.title]:tracking-tight

        [&_.tagline]:mt-1 [&_.tagline]:text-sm [&_.tagline]:md:text-sm [&_.tagline]:opacity-80
" 
spaceBetween={10}
slidesPerView={2}
speed={500}
loop={true}
centeredSlides={true}
pagination={{
  clickable: true,
}}
breakpoints={{
  320: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  480: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 2.5,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1350: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
}}

// data-swiper="{
//       'slidesPerView': 2,
//       'spaceBetween': 10,
//       'speed': 500,
//       'loop': true,
//       'centeredSlides': true,
//       'breakpoints': {
//           '320': {'slidesPerView': 1, 'spaceBetween': 20},
//           '480': {'slidesPerView': 2, 'spaceBetween': 20},
//           '640': {'slidesPerView': 2.5, 'spaceBetween': 30},
//           '1024': {'slidesPerView': 3, 'spaceBetween': 30},
//           '1350': {'slidesPerView': 3, 'spaceBetween': 30}
//       }
//   }"
  >
          <SwiperSlide className="swiper-slide">
            <div className="swiperInner">
              <div>
                <Image className="aspect-[133/166]" width={256} height={319} src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?cs=tinysrgb&fit=crop&fm=webp&q=100&w=1440&h=1797" alt="Pixelcut App" />
              </div>
              <div className="content before:from-violet-900/70 before:to-violet-900/70">
                <div className="contentInner">
                  <div className="title">Pixelcut</div>
                  <div className="tagline">AI Photo Editor App</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="swiperInner">
              <div>
                <Image className="aspect-[133/166]" width={256} height={319} src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?cs=tinysrgb&fit=crop&fm=webp&q=100&w=1440&h=1797" alt="Pixelcut App" />
              </div>
              <div className="content before:from-violet-900/70 before:to-violet-900/70">
                <div className="contentInner">
                  <div className="title">Pixelcut</div>
                  <div className="tagline">AI Photo Editor App</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="swiperInner">
              <div>
                <Image className="aspect-[133/166]" width={256} height={319} src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?cs=tinysrgb&fit=crop&fm=webp&q=100&w=1440&h=1797" alt="Pixelcut App" />
              </div>
              <div className="content before:from-violet-900/70 before:to-violet-900/70">
                <div className="contentInner">
                  <div className="title">Pixelcut</div>
                  <div className="tagline">AI Photo Editor App</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="swiperInner">
              <div>
                <Image className="aspect-[133/166]" width={256} height={319} src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?cs=tinysrgb&fit=crop&fm=webp&q=100&w=1440&h=1797" alt="Pixelcut App" />
              </div>
              <div className="content before:from-violet-900/70 before:to-violet-900/70">
                <div className="contentInner">
                  <div className="title">Pixelcut</div>
                  <div className="tagline">AI Photo Editor App</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="swiperInner">
              <div>
                <Image className="aspect-[133/166]" width={256} height={319} src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?cs=tinysrgb&fit=crop&fm=webp&q=100&w=1440&h=1797" alt="Pixelcut App" />
              </div>
              <div className="content before:from-violet-900/70 before:to-violet-900/70">
                <div className="contentInner">
                  <div className="title">Pixelcut</div>
                  <div className="tagline">AI Photo Editor App</div>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>


      <div className="select-none">
        <div className="bg-slate-50">
          <div className="relative bg-slate-50 py-6 md:py-8 lg:py-16 select-none ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
              <div className="absolute inset-0 size-full pointer-events-none overflow-hidden">
                <div className="absolute inset-y-0 hidden w-full min-w-[1360px] lg:block pointer-events-none" />
              </div>
              <div className="
          mx-auto max-w-container gap-7 flex max-lg:flex-col group-[]/flip:flex-row-reverse group-[]/flip:max-lg:flex-col max-lg:gap-4 

          [&>*:first-child]:[&:has(.content1-img)]:lg:block 
          [&:first-child]:hidden [&>*:last-child]:[&:has(.content1-img)]:max-w-3xl 
          [&>*:last-child]:[&:has(.content1-img)]:lg:w-3xl
      ">
                <div className="relative z-10 hidden pointer-events-none h-auto md:sticky md:top-24 self-start">
                  <div className="flex [transform:rotateY(180deg)] group-[]/flip:[transform:rotateY(0deg)]">
                    <div className="relative flex-shrink-0 p-4 w-full">
                      <div className="relative z-10 overflow-hidden *:rounded-xl [transform:rotateY(180deg)] group-[]/flip:[transform:rotateY(0deg)] [&~*]:[&:has(.mask)]:lg:hidden">
                        <Image className="object-cover w-full h-auto content1-img" width={336} height={336} src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=350&h=350&crop=entropy&cs=tinysrgb&fit=crop&q=80&fm=webp" alt="image3" />
                      </div>
                      <div className="z-0">
                        <div className="absolute -right-12 left-0 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                        <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                        <div className="absolute -right-12 bottom-14 left-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                        <div className="absolute -bottom-8 -top-2 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                        <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
                          <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
                            <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-14 flex-shrink-0 p-4 group-[]/flip:hidden">
                      <div className="overflow-hidden">
                        <div className="object-cover h-[404px] w-[336px] aspect-[336/404]" />
                      </div>
                      <div>
                        <div className="absolute -left-4 -right-8 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                        <div className="absolute -bottom-12 -top-20 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                        <div className="absolute -left-4 -right-8 bottom-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                        <div className="absolute right-10 top-[calc(100%-1px)] -mb-px flex h-8 items-start overflow-hidden">
                          <div className="flex -mt-px h-[2px] w-80 -scale-x-100">
                            <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative z-20 mx-auto lg:mx-0 lg:pr-4 md:py-6 md:md:py-8 h-auto md:sticky md:top-24 self-start shrink-1 grow-0 basis-auto w-full">
                  <p className="
              max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black text-balance

              first:*:font-normal

              last:*:font-bold last:*:text-theme4
          ">
                    <span className="font-normal">A Quick Insight Into </span> <span className="font-bold bg-gradient-to-r from-gray-500 via-sky-600 to-gray-500 bg-clip-text text-theme4">IMG Global Infotech</span>
                  </p>
                  <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">Discover innovation and excellence at IMG Global Infotech! Immerse yourself in cutting-edge services and high-quality development solutions that redefine the digital landscape. Our dynamic work environment fosters creativity and collaboration to fuel groundbreaking ideas.</p>
                  <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">At IMG, we pride ourselves on timely delivery, transforming visions into reality. From mobile app development to custom software solutions and dedicated developer hiring, we cater to businesses of all scales. Experience top-notch development, reasonable prices, and a partnership that exceeds expectations - at IMG Global Infotech, we make digital dreams come true.</p>
                  <div className="mt-8 flex gap-4">
                    <a href="https://staging.imgglobalinfotech.com/about-us.php" className="inline-flex rounded-br-none justify-center rounded-lg text-sm font-semibold py-2 md:py-3 px-3 md:px-4 bg-slate-900 text-white hover:bg-slate-700"><span className="select-none">Read More <span aria-hidden="true" className="text-slate-400 sm:inline">→</span></span></a>
                    <a className="inline-flex rounded-br-none justify-center rounded-lg text-sm font-semibold py-2 md:py-3 px-3 md:px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 " href="https://staging.imgglobalinfotech.com/contact-us.php">
                      <span className="select-none">
                        Coffee With Us <span aria-hidden="true" className="text-black/25 sm:inline">→</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]" />
            </div>
          </div>  </div>
      </div>



      <div className="relative isolate overflow-hidden bg-gray-900 py-8 sm:py-32 select-none [critical:this]">
        <Image width={1519} height={592} src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?fit=crop&crop=focalpoint&fp-y=.8&w=2048&h=1085&q=20&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="background image" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl pointer-events-none" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-yellow-700 to-pink-700 opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
        </div>
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu pointer-events-none" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-yellow-700 to-pink-700 opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-white">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div>
              <input type="radio" name="mainly" defaultChecked id="inc" className="hidden peer/inc" />
              <div className="text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl peer-checked/inc:relative absolute peer-checked/inc:z-[1] -z-20 peer-checked/inc:translate-x-0 translate-x-1/4 peer-checked/inc:opacity-100 opacity-0 duration-300 transition-[transform,opacity]">Inception</div>
              <p className="mt-6 text-sm md:text-base md:leading-8 peer-checked/inc:relative absolute peer-checked/inc:z-[1] -z-20 peer-checked/inc:translate-x-0 translate-x-1/4 peer-checked/inc:opacity-70 opacity-0 duration-300 delay-150 transition-[transform,opacity]">Commence on a digital journey with IMG Global Infotech, where ideas unfold into cutting-edge solutions, shaping a dynamic future.</p>
            </div>
            <div>
              <input type="radio" name="mainly" id="inn" className="hidden peer/inn" />
              <div className="text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl peer-checked/inn:relative absolute peer-checked/inn:z-[1] -z-20 peer-checked/inn:translate-x-0 translate-x-1/4 peer-checked/inn:opacity-100 opacity-0 duration-300 transition-[transform,opacity]">Innovation</div>
              <p className="mt-6 text-sm md:text-base md:leading-8 peer-checked/inn:relative absolute peer-checked/inn:z-[1] -z-20 peer-checked/inn:translate-x-0 translate-x-1/4 peer-checked/inn:opacity-70 opacity-0 duration-300 delay-150 transition-[transform,opacity]">IMG Global Infotech pioneers transformative solutions, pushing boundaries to redefine industries via inventive technology.</p>
            </div>
            <div>
              <input type="radio" name="mainly" id="exp" className="hidden peer/exp" />
              <div className="text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl peer-checked/exp:relative absolute peer-checked/exp:z-[1] -z-20 peer-checked/exp:translate-x-0 translate-x-1/4 peer-checked/exp:opacity-100 opacity-0 duration-300 transition-[transform,opacity]">Experience</div>
              <p className="mt-6 text-sm md:text-base md:leading-8 peer-checked/exp:relative absolute peer-checked/exp:z-[1] -z-20 peer-checked/exp:translate-x-0 translate-x-1/4 peer-checked/exp:opacity-70 opacity-0 duration-300 delay-150 transition-[transform,opacity]">Boosting online presence with a skilled team, crafting immersive experiences that resonate with precision and expertise.</p>
            </div>
            <div>
              <input type="radio" name="mainly" id="ets" className="hidden peer/ets" />
              <div className="text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl peer-checked/ets:relative absolute peer-checked/ets:z-[1] -z-20 peer-checked/ets:translate-x-0 translate-x-1/4 peer-checked/ets:opacity-100 opacity-0 duration-300 transition-[transform,opacity]">Expertise</div>
              <p className="mt-6 text-sm md:text-base md:leading-8 peer-checked/ets:relative absolute peer-checked/ets:z-[1] -z-20 peer-checked/ets:translate-x-0 translate-x-1/4 peer-checked/ets:opacity-70 opacity-0 duration-300 delay-150 transition-[transform,opacity]">Navigate the complex digital landscape with IMG Global Infotechs mastery, delivering tailored solutions fueled by unparalleled industry knowledge.</p>
            </div>
            <div>
              <input type="radio" name="mainly" id="ass" className="hidden peer/ass" />
              <div className="text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl peer-checked/ass:relative absolute peer-checked/ass:z-[1] -z-20 peer-checked/ass:translate-x-0 translate-x-1/4 peer-checked/ass:opacity-100 opacity-0 duration-300 transition-[transform,opacity]">Assurance</div>
              <p className="mt-6 text-sm md:text-base md:leading-8 peer-checked/ass:relative absolute peer-checked/ass:z-[1] -z-20 peer-checked/ass:translate-x-0 translate-x-1/4 peer-checked/ass:opacity-70 opacity-0 duration-300 delay-150 transition-[transform,opacity]">Trust our unwavering commitment to reliability, security, and excellence, ensuring your digital endeavors thrive with confidence.</p>
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-3 gap-x-8 gap-y-6 text-base font-semibold leading-7 sm:grid-cols-3 md:flex lg:gap-x-10">
              <label className="cursor-pointer hoverLink" htmlFor="inc">Inception <span aria-hidden="true">→</span></label>
              <label className="cursor-pointer hoverLink" htmlFor="inn">Innovation <span aria-hidden="true">→</span></label>
              <label className="cursor-pointer hoverLink" htmlFor="exp">Experience <span aria-hidden="true">→</span></label>
              <label className="cursor-pointer hoverLink" htmlFor="ets">Expertise <span aria-hidden="true">→</span></label>
              <label className="cursor-pointer hoverLink" htmlFor="ass">Assurance <span aria-hidden="true">→</span></label>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
              <div className="flex flex-col-reverse">
                <div className="text-base leading-7 opacity-70">Years Experience</div>
                <div className="text-2xl font-bold leading-9 tracking-tight">9</div>
              </div>
              <div className="flex flex-col-reverse">
                <div className="text-base leading-7 opacity-70">Countries Served</div>
                <div className="text-2xl font-bold leading-9 tracking-tight">80+</div>
              </div>
              <div className="flex flex-col-reverse">
                <div className="text-base leading-7 opacity-70">Successful Projects</div>
                <div className="text-2xl font-bold leading-9 tracking-tight">1200+</div>
              </div>
              <div className="flex flex-col-reverse">
                <div className="text-base leading-7 opacity-70">Client Retention Rate</div>
                <div className="text-2xl font-bold leading-9 tracking-tight">98%</div>
              </div>
              <div className="flex flex-col-reverse">
                <div className="text-base leading-7 opacity-70">Clients Worldwide</div>
                <div className="text-2xl font-bold leading-9 tracking-tight">1000+</div>
              </div>
              <div className="flex flex-col-reverse">
                <div className="text-base leading-7 opacity-70">Team Members</div>
                <div className="text-2xl font-bold leading-9 tracking-tight">100+</div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <section className="container mx-auto py-8 sm:py-16 relative select-none bg-white [critical:this]">
        <div className="absolute inset-x-0 top-0 h-96 text-slate-600/10 [mask-image:linear-gradient(to_top,transparent,white)] pointer-events-none">
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="clientJourneys" width={32} height={32} patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                <path d="M0 32V.5H32" fill="none" stroke="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#clientJourneys)" />
          </svg>
        </div>
        <div className="flex flex-col w-full max-w-7xl mx-auto pb-8 px-6 lg:px-8 text-center">
          <p className="max-md:text-2xl/tight max-xl:text-3xl/tight text-4xl/tight tracking-[-0.04em] text-black empty:hidden text-balance">
            <span>Client Journeys to Success -</span>
            <span className="font-bold text-theme4"> Glimpse of Our Case Studies</span>
          </p>
          <div className="mt-4 text-base md:text-lg leading-7 text-slate-600 empty:hidden text-balance">Explore our client success stories, witnessing transformative journeys to success. Each case study below reflects our impactful solutions, showcasing innovation, dedication, and tangible results.</div>
        </div>
        <ul className="flex relative flex-col gap-y-8 lg:gap-y-64 flex-wrap mx-auto max-w-7xl px-6 lg:px-8">
          <li className="size-full lg:sticky lg:top-36">
            <div className="bg-gray-900 opacity-100 rounded-3xl rounded-br-none overflow-hidden relative">
              <div className="absolute inset-0 z-[1] mix-blend-soft-light">
                <svg className="size-full text-white" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="l24" width={32} height={32} patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                      <path d="M0 32V.5H32" fill="none" stroke="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#l24)" />
                </svg>
              </div>
              <div className="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-900" />
              <div className="blur-[60px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-sky-500 to-indigo-500 w-[68.5625rem] [aspect-ratio:1097/845]" />
              </div>
              <div className="flex flex-col p-10 h-full relative z-50">
                <div className="w-full flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                  <div className="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                    <span className="duration-300 text-base lg:text-lg font-semibold inline-block">TractorJunction</span>
                    <div className="font-bold text-lg md:text-xl lg:text-2xl mb-4 text-balance">New Tractor, Tractor Prices, Compare Tractors, Buy &amp; Sell Used Tractors in India</div>
                    <div>
                      <a href="https://www.imgglobalinfotech.com/casestudy/tractorjunction.php" className="inline-flex justify-center rounded-lg rounded-br-none max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-white bg-white/20 xl:hover:ring-gray-400 duration-300 backdrop-blur-md shadow-sm shadow-white/50">View Case Study</a>
                    </div>
                  </div>
                  <div className="grow-0 shrink-0 max-sm:w-full">
                    <Image className="size-[20rem] lg:size-[25rem] h-auto max-sm:mx-auto" width={400} height={400} src="https://www.imgglobalinfotech.com/public/tailwind/img/case-study-tractor.webp" alt="TractorJunction" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="size-full lg:sticky lg:top-36">
            <div className="bg-gray-900 opacity-100 rounded-3xl rounded-br-none overflow-hidden relative">
              <div className="absolute inset-0 z-[1] mix-blend-soft-light">
                <svg className="size-full text-white" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="l24" width={32} height={32} patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                      <path d="M0 32V.5H32" fill="none" stroke="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#l24)" />
                </svg>
              </div>
              <div className="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-900" />
              <div className="blur-[60px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-pink-500 to-violet-500 w-[68.5625rem] [aspect-ratio:1097/845]" />
              </div>
              <div className="flex flex-col p-10 h-full relative z-50">
                <div className="w-full flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                  <div className="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                    <span className="duration-300 text-base lg:text-lg font-semibold inline-block">BOBI Live</span>
                    <div className="font-bold text-lg md:text-xl lg:text-2xl mb-4 text-balance">Socializing, interacting, exploring, all fascinating things are here for you !</div>
                    <div>
                      <a href="https://www.imgglobalinfotech.com/casestudy/bobilive.php" className="inline-flex justify-center rounded-lg rounded-br-none max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-white bg-white/20 xl:hover:ring-gray-400 duration-300 backdrop-blur-md shadow-sm shadow-white/50">View Case Study</a>
                    </div>
                  </div>
                  <div className="grow-0 shrink-0 max-sm:w-full">
                    <Image className="size-[20rem] lg:size-[25rem] h-auto max-sm:mx-auto" width={400} height={400} src="https://www.imgglobalinfotech.com/public/tailwind/img/frame12.webp" alt="BOBI Live" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="size-full lg:sticky lg:top-36">
            <div className="bg-gray-900 opacity-100 rounded-3xl rounded-br-none overflow-hidden relative">
              <div className="absolute inset-0 z-[1] mix-blend-soft-light">
                <svg className="size-full text-white" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="l24" width={32} height={32} patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                      <path d="M0 32V.5H32" fill="none" stroke="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#l24)" />
                </svg>
              </div>
              <div className="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-900" />
              <div className="blur-[60px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-lime-500 to-green-500 w-[68.5625rem] [aspect-ratio:1097/845]" />
              </div>
              <div className="flex flex-col p-10 h-full relative z-50">
                <div className="w-full flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                  <div className="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                    <span className="duration-300 text-lg font-semibold inline-block">Hozzo - Car wash</span>
                    <div className="font-bold text-lg md:text-xl lg:text-2xl mb-4 text-balance">Waterless car washing services across india</div>
                    <div>
                      <a href="https://www.imgglobalinfotech.com/casestudy/hozzo.php" className="inline-flex justify-center rounded-lg rounded-br-none max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-white bg-white/20 xl:hover:ring-gray-400 duration-300 backdrop-blur-md shadow-sm shadow-white/50">View Case Study</a>
                    </div>
                  </div>
                  <div className="grow-0 shrink-0 max-sm:w-full">
                    <Image className="size-[20rem] lg:size-[25rem] h-auto max-sm:mx-auto" width={400} height={400} src="https://www.imgglobalinfotech.com/public/tailwind/img/hozzo.webp" alt="Hozzo - Car wash" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="size-full lg:sticky lg:top-36">
            <div className="bg-gray-900 opacity-100 rounded-3xl rounded-br-none overflow-hidden relative">
              <div className="absolute inset-0 z-[1] mix-blend-soft-light">
                <svg className="size-full text-white" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="l24" width={32} height={32} patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                      <path d="M0 32V.5H32" fill="none" stroke="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#l24)" />
                </svg>
              </div>
              <div className="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-900" />
              <div className="blur-[60px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-green-500 to-violet-500 w-[68.5625rem] [aspect-ratio:1097/845]" />
              </div>
              <div className="flex flex-col p-10 h-full relative z-50">
                <div className="w-full flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                  <div className="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                    <span className="duration-300 text-lg font-semibold inline-block">MyFab11</span>
                    <div className="font-bold text-lg md:text-xl lg:text-2xl mb-4 text-balance">Principle Partner of KKR. indias most trusted Fantasy Cricket App</div>
                    <div>
                      <a href="https://www.imgglobalinfotech.com/casestudy/myfab11.php" className="inline-flex justify-center rounded-lg rounded-br-none max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-white bg-white/20 xl:hover:ring-gray-400 duration-300 backdrop-blur-md shadow-sm shadow-white/50">View Case Study</a>
                    </div>
                  </div>
                  <div className="grow-0 shrink-0 max-sm:w-full">
                    <Image className="size-[20rem] lg:size-[25rem] h-auto max-sm:mx-auto" width={400} height={400} src="https://www.imgglobalinfotech.com/public/tailwind/img/fab11.webp" alt="MyFab11" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="size-full lg:sticky lg:top-36">
            <div className="bg-gray-900 opacity-100 rounded-3xl rounded-br-none overflow-hidden relative">
              <div className="absolute inset-0 z-[1] mix-blend-soft-light">
                <svg className="size-full text-white" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="l24" width={32} height={32} patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                      <path d="M0 32V.5H32" fill="none" stroke="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#l24)" />
                </svg>
              </div>
              <div className="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-900" />
              <div className="blur-[60px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-red-700 to-pink-500 w-[68.5625rem] [aspect-ratio:1097/845]" />
              </div>
              <div className="flex flex-col p-10 h-full relative z-50">
                <div className="w-full flex max-sm:flex-col-reverse relative z-10 items-center max-sm:text-center">
                  <div className="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-7">
                    <span className="duration-300 text-lg font-semibold inline-block">Fabindia</span>
                    <div className="font-bold text-lg md:text-xl lg:text-2xl mb-4 text-balance">Shop for Handwoven Garments &amp; home fusnishings</div>
                    <div>
                      <a href="https://www.imgglobalinfotech.com/casestudy/fabindia.php" className="inline-flex justify-center rounded-lg rounded-br-none max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-white bg-white/20 xl:hover:ring-gray-400 duration-300 backdrop-blur-md shadow-sm shadow-white/50">View Case Study</a>
                    </div>
                  </div>
                  <div className="grow-0 shrink-0 max-sm:w-full">
                    <Image className="size-[20rem] lg:size-[25rem] h-auto max-sm:mx-auto" width={400} height={400} src="https://www.imgglobalinfotech.com/public/tailwind/img/fabindia.webp" alt="Fabindia" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="size-full lg:sticky lg:top-36">
            <div className="bg-gray-900 opacity-100 rounded-3xl rounded-br-none overflow-hidden relative before:absolute before:inset-6 before:border-4 before:border-white before:rounded-3xl before:rounded-br-none before:z-10">
              <div className="absolute inset-0 z-[1] mix-blend-soft-light">
                <svg className="size-full text-white" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="l24" width={32} height={32} patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                      <path d="M0 32V.5H32" fill="none" stroke="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#l24)" />
                </svg>
              </div>
              <div className="absolute inset-0 [mix-blend-mode:multiply] opacity-100 bg-gray-900" />
              <div className="blur-[60px] absolute top-[20%] left-[0%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-green-500 to-violet-500 w-[68.5625rem] [aspect-ratio:1097/845]" />
              </div>
              <div className="blur-[60px] absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-cyan-500 to-blue-500 w-[68.5625rem] [aspect-ratio:1097/845]" />
              </div>
              <div className="blur-[60px] absolute top-[70%] left-[70%] [transform:translate(-50%,_-50%);] -ml-[4rem]">
                <div className="[clip-path:polygon(74.1%_44.1%,_100%_61.6%,_97.5%_26.9%,_85.5%_0.1%,_80.7%_2%,_72.5%_32.5%,_60.2%_62.4%,_52.4%_68.1%,_47.5%_58.3%,_45.2%_34.5%,_27.5%_76.7%,_0.1%_64.9%,_17.9%_100%,_27.6%_76.8%,_76.1%_97.7%,_74.1%_44.1%)] opacity-[0.4] bg-gradient-to-tr from-red-700 to-pink-500 w-[68.5625rem] [aspect-ratio:1097/845]" />
              </div>
              <div className="flex flex-col p-10 h-full relative z-50">
                <div className="w-full flex max-sm:flex-col-reverse relative z-10 items-center text-center">
                  <div className="grow max-sm:w-full text-white flex flex-col max-sm:gap-y-4 gap-y-5">
                    <span className="duration-300 text-lg font-semibold inline-block">CaseStudy</span>
                    <div className="font-bold text-lg md:text-xl lg:text-2xl text-balance max-w-lg mx-auto">Transforming Businesses Worldwide - 100+ Success Stories and Counting</div>
                    <div>
                      <a href="https://www.imgglobalinfotech.com/casestudy.php" className="inline-flex justify-center rounded-lg rounded-br-none max-md:text-xs text-sm font-semibold max-md:py-2 py-3 px-4 ring-2 ring-white bg-white/20 xl:hover:ring-gray-400 duration-300 backdrop-blur-md shadow-sm shadow-white/50">View All CaseStudy</a>
                    </div>
                  </div>
                  <div className="grow-0 shrink-0 w-[1px] overflow-hidden opacity-0">
                    <Image className="size-[20rem] lg:size-[25rem] h-auto max-sm:mx-auto" width={1} height={1} src="https://www.imgglobalinfotech.com/public/tailwind/img/fab11.webp" alt="MyFab11 App" />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>




    </>
  );
}
