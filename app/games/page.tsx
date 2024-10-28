import Image from "next/image";
import Logo from "@/app/public/logo.png";
import ArrowIcon from "@/app/public/icon_titlebar.png";
import Footer from "@/components/footer";
import fb from "@/app/public/socials/icon_facebook.png";
import gplus from "@/app/public/socials/icon_gplus.png";
import BlueBird from "@/app/public/socials/icon_twitter.png";
import yt from "@/app/public/socials/icon_youtube.png";

import GamePreview from "@/components/GamePreview";

import SplinterCell from "@/app/public/Thumbs/thumb_splintercell.jpg";
import Gta5_thumb from "@/app/public/Thumbs/thumb_gtav.jpg";
import callOfDuty from "@/app/public/Thumbs/thumb_call_of_duty.jpg";
import Forza4 from "@/app/public/Thumbs/thumb_forza4.jpg";
import RedDead from "@/app/public/Thumbs/thumb_red_dead_redemption.jpg";
import Halo4 from "@/app/public/Thumbs/thumb_halo4.jpg";
import ReadDeadBanner from "@/app/public/red_dead_redemption.png";
import GameInfo from "@/components/GameInfo";

export default function Games() {
  return (
    <div className="bg-gray-400 w-full h-48 relative flex items-center justify-around">
      <Image
        src={Logo}
        alt="Gamer4Life"
        sizes="100%"
        style={{ width: "360px", height: "60px" }}
      />
      <div className="flex items-center gap-4">
        <Image src={fb} alt="Facebook" sizes="100%" style={{}} />
        <Image src={gplus} alt="Google Plus" sizes="100%" style={{}} />
        <Image src={BlueBird} alt="Twitter" sizes="100%" style={{}} />
        <Image src={yt} alt="Youtube" sizes="100%" style={{}} />
      </div>
      <section className="bg-white w-3/4 min-h-full p-8 top-[75%] absolute left-1/2 -translate-x-1/2 max-w-screen-xl">
        <div className="inline-flex flex-row w-full gap-20">
          <div className="w-[80%]">
            <div className="flex gap-2 items-center mb-2 p-2 w-full bg-black text-cyan-400 font-medium text-2xl">
              <Image
                src={ArrowIcon}
                alt="Icon"
                width={19}
                height={19}
                className="w-auto h-[19px]"
              />
              Aktuelle spil
            </div>
            {/* GameInfo */}
            <GameInfo
              src={SplinterCell}
              alt="SplinterCell"
              title="SplinterCell: Blacklist"
              publisher="Ubisoft"
              genre="Stealth"
              higlight={false}
            />
            <GameInfo
              src={Gta5_thumb}
              alt="GTAV"
              title="Grand Theft Auto V"
              publisher="Rockstar Games"
              genre="First Person Shooter"
              higlight={true}
            />
            <GameInfo
              src={callOfDuty}
              alt="callOfDuty"
              title="Call of Duty"
              publisher="Activision"
              genre="First Person Shooter"
              higlight={false}
            />
            <GameInfo
              src={Forza4}
              alt="Forza"
              title="Forza Horizon 4"
              publisher="Microsoft"
              genre="Racing"
              higlight={true}
            />
            <GameInfo
              src={RedDead}
              alt="Red Dead Redemption"
              title="Red Dead Redemption"
              publisher="Rockstar Games"
              genre="First Person Shooter"
              higlight={false}
            />
            <GameInfo
              src={Halo4}
              alt="Halo 4"
              title="Halo 4"
              publisher="Rockstar Games"
              genre="First Person Shooter"
              higlight={true}
            />
            {/* GameInfo end*/}
          </div>
          <div className="inline-flex flex-col w-[35%] max-h-fit">
            <div className="flex gap-2 items-center mb-2 p-2 w-full bg-black text-cyan-400 font-medium text-2xl">
              <Image
                src={ArrowIcon}
                alt="Icon"
                width={19}
                height={19}
                className="w-auto h-[19px]"
              />
              Nye anmeldelser
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
        </div>
        <Footer />
      </section>
    </div>
  );
}
