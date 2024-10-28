"use client";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Thumbnail from "@/components/Thumbnail";
import TopBanner from "@/components/TopBanner";
import GamePreview from "@/components/GamePreview";
import Footer from "@/components/footer";

import ArrowIcon from "./public/icon_titlebar.png";
import Assasins from "./public/banner_assasins_creed_2.jpg";
import Forza from "./public/banner_forza4.jpg";
import Gta5_banner from "./public/banner_gta5.jpg";
import SplinterCell from "./public/Thumbs/thumb_splintercell.jpg";
import Gta5_thumb from "./public/Thumbs/thumb_gtav.jpg";
import callOfDuty from "./public/Thumbs/thumb_call_of_duty.jpg";
import Forza4 from "./public/Thumbs/thumb_forza4.jpg";
import RedDead from "./public/Thumbs/thumb_red_dead_redemption.jpg";
import Halo4 from "./public/Thumbs/thumb_halo4.jpg";
import ReadDeadBanner from "./public/red_dead_redemption.png";

import Gamer4Life from "./public/article_gamer.jpg";
import MemberImage from "./public/article_membership.png";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)] relative">
      <section className="relative">
        {/* Slider */}
        <Splide
          options={{
            type: "loop",
            width: "100%",
            height: "100%",
            arrows: true,
            pagination: true,
            position: "relative",
            zIndex: 10,
          }}
          aria-label="New Titles"
        >
          <SplideSlide>
            <TopBanner
              title="Assassin's Creed"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare imperdiet elit, eget sagittis libero gravida non. Suspendisse id nisi neque, donec commodo laoreet massa."
            />
            <Image
              src={Assasins}
              fetchPriority="high"
              alt="Assassin's Creed 2"
            />
          </SplideSlide>
          <SplideSlide>
            <TopBanner
              title="Forza Horizon 4"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare imperdiet elit, eget sagittis libero gravida non. Suspendisse id nisi neque, donec commodo laoreet massa."
            />
            <Image src={Forza} fetchPriority="high" alt="Forza Horizon 4" />
          </SplideSlide>
          <SplideSlide>
            <TopBanner
              title="Grand Theft Auto V"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare imperdiet elit, eget sagittis libero gravida non. Suspendisse id nisi neque, donec commodo laoreet massa."
            />
            <Image src={Gta5_banner} fetchPriority="high" alt="GTA 5" />
          </SplideSlide>
        </Splide>
        {/* Slider end */}
        <section className="bg-white w-3/4 min-h-full p-8 top-[95%] absolute left-1/2 -translate-x-1/2">
          {/* Thumbnails */}
          <div className="flex gap-4 py-4 w-full">
            <Thumbnail
              src={SplinterCell}
              width={300}
              height={300}
              alt="Splintercell"
              title="Splintercell: Blacklist"
            />
            <Thumbnail
              src={Gta5_thumb}
              width={300}
              height={300}
              alt="Gta V"
              title="Grand Theft Auto V"
            />
            <Thumbnail
              src={callOfDuty}
              width={300}
              height={300}
              alt="Call of Duty"
              title="Call of Duty: Ghost"
            />
            <Thumbnail
              src={Forza4}
              width={300}
              height={300}
              alt="Forza 4"
              title="Forza Horizon 4"
            />
            <Thumbnail
              src={RedDead}
              width={300}
              height={300}
              alt="Read Dead Redemption"
              title="Read Dead Redemption"
            />
            <Thumbnail
              src={Halo4}
              width={300}
              height={300}
              alt="Halo 4"
              title="Halo 4"
            />
          </div>
          {/* Thumbnails end */}
          {/* Trailer */}
          <div className="inline-flex gap-8 w-full max-h-max">
            <div className="inline-flex flex-col w-[70%]">
              <div className="flex gap-2 items-center mb-2 p-2 w-full bg-black text-cyan-400 font-medium text-2xl">
                <Image
                  src={ArrowIcon}
                  alt="Icon"
                  width={19}
                  height={19}
                  className="w-auto h-[19px]"
                />
                Seneste trailer
              </div>
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/4A05AnPSC6g?si=ILya61y6ZUbUTAXQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <h3 className="text-3xl font-medium my-4">
                Call of Duty Trailer
              </h3>
              <p className="text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                dolor voluptatibus magnam, veniam nemo voluptate modi
                consequuntur asperiores ullam iste voluptatem earum, iure,
                blanditiis laborum porro at tempore accusantium exercitationem
                doloribus. Velit dicta blanditiis consequatur!
                <button className="rounded-full bg-cyan-400 text-white flex py-2 px-4">
                  Læs Mere
                </button>
              </p>
            </div>
            {/* Trailer end */}
            {/* Popular Games */}
            <div className="inline-flex flex-col w-[35%] max-h-fit">
              <div className="flex gap-2 items-center mb-2 p-2 w-full bg-black text-cyan-400 font-medium text-2xl">
                <Image
                  src={ArrowIcon}
                  alt="Icon"
                  width={19}
                  height={19}
                  className="w-auto h-[19px]"
                />
                Mest populære spil
              </div>
              <GamePreview
                src={SplinterCell}
                alt="SplinterCell"
                title="SplinterCell: Blacklist"
                publisher="UbiSoft"
                genre="Stealth"
                higlight={false}
              />
              <GamePreview
                src={Gta5_thumb}
                alt="GTAV"
                title="Grand Theft Auto V"
                publisher="Rockstar Games"
                genre="First Person Shooter"
                higlight={true}
              />
              <GamePreview
                src={callOfDuty}
                alt="callOfDuty"
                title="Call of Duty"
                publisher="Activision"
                genre="First Person Shooter"
                higlight={false}
              />
              <GamePreview
                src={Forza4}
                alt="Forza"
                title="Forza Horizon 4"
                publisher="Microsoft"
                genre="Racing"
                higlight={true}
              />
              <GamePreview
                src={RedDead}
                alt="Red Dead Redemption"
                title="Red Dead Redemption"
                publisher="Rockstar Games"
                genre="First Person Shooter"
                higlight={false}
              />
              <GamePreview
                src={Halo4}
                alt="Halo 4"
                title="Halo 4"
                publisher="Rockstar Games"
                genre="First Person Shooter"
                higlight={true}
              />
            </div>
            {/* Popular games end */}
          </div>
          <div className="flex gap-4 py-4 w-full">
            <div className="w-1/3">
              <div className="flex gap-2 items-center mb-2 p-2 w-full bg-black text-cyan-400 font-medium text-2xl">
                <Image
                  src={ArrowIcon}
                  alt="Icon"
                  width={19}
                  height={19}
                  className="w-auto h-[19px]"
                />
                Seneste spilanmeldelse
              </div>
              <Image
                src={ReadDeadBanner}
                alt="Red Dead Redemption"
                sizes="100%"
                style={{ width: "100%", height: "auto", paddingBottom: "10px" }}
              />
              <h3 className="text-3xl font-medium pb-3">
                I en hørm af krudtslam og hestelort
              </h3>
              <p className="pb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                illum incidunt pariatur asperiores obcaecati illo nobis hic qui
                dicta quis.
              </p>
              <button className="rounded-full bg-cyan-400 text-white flex py-2 px-4">
                Læs Mere
              </button>
            </div>
            <div className="w-1/3">
              <div className="flex gap-2 items-center mb-2 p-2 w-full bg-black text-cyan-400 font-medium text-2xl">
                <Image
                  src={ArrowIcon}
                  alt="Icon"
                  width={19}
                  height={19}
                  className="w-auto h-[19px]"
                />
                Seneste artikel
              </div>
              <Image
                src={Gamer4Life}
                alt="Gamer4Life"
                sizes="100%"
                style={{ width: "100%", height: "auto", paddingBottom: "10px" }}
              />
              <h3 className="text-3xl font-medium pb-3">
                Sådan bliver du professionel gamer
              </h3>
              <p className="pb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                illum incidunt pariatur asperiores obcaecati illo nobis hic qui
                dicta quis.
              </p>
              <button className="rounded-full bg-cyan-400 text-white flex py-2 px-4">
                Læs Mere
              </button>
            </div>
            <div className="w-1/3">
              <div className="flex gap-2 items-center mb-2 p-2 w-full bg-black text-cyan-400 font-medium text-2xl">
                <Image
                  src={ArrowIcon}
                  alt="Icon"
                  width={19}
                  height={19}
                  className="w-auto h-[19px]"
                />
                Bliv medlem
              </div>
              <Image
                src={MemberImage}
                alt="Membership"
                sizes="100%"
                style={{ width: "100%", height: "auto", paddingBottom: "10px" }}
              />
              <h3 className="text-3xl font-medium pb-3">
                Bliv medlem i dag og få 30% rabat
              </h3>
              <p className="pb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                illum incidunt pariatur asperiores obcaecati illo nobis hic qui
                dicta quis.
              </p>
              <button className="rounded-full bg-cyan-400 text-white flex py-2 px-4">
                Læs Mere
              </button>
            </div>
          </div>
          <Footer />
        </section>
      </section>
    </main>
  );
}
