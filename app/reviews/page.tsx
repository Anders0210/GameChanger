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

export default function Reviews() {
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
              Anmeldelser
            </div>
            <Image src={ReadDeadBanner} alt="Read Dead Redemption" />
            <div className="mt-4">
              <h2 className="text-3xl font-medium">
                I en hørm af krudtslam og hestelort
              </h2>
              <p className="text-lg font-light">
                Anmeldelse af spillet Red Dead Redemption
                <br />
                Oprettet: 14. februar 2014
              </p>
              <p className="mt-12">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique, sed! Sunt quaerat error, expedita molestiae
                similique, quos dolor sint reprehenderit deserunt eaque
                quisquam, nulla sapiente rem impedit illo ipsam ipsa! Provident,
                sint in. Inventore doloremque dolorum nihil ad? Ut odit vel sunt
                mollitia, fugiat soluta voluptatibus magni! Dolores praesentium
                laboriosam nihil nisi quam aut aliquid, perspiciatis voluptatem
                explicabo porro sapiente fugit nam officiis beatae culpa ipsa
                dolorem molestias delectus, optio illum quaerat. Voluptatum
                earum odio animi. Itaque culpa sunt exercitationem fugit
                voluptatum ducimus unde totam doloremque harum nam eos quidem
                rem, voluptas labore quaerat odio consequatur consequuntur
                suscipit officia earum aliquid est cupiditate quos? Facere
                veritatis quisquam harum temporibus, id quibusdam optio quod
                dolore cupiditate ratione? Perferendis amet fuga dignissimos
                maxime aliquid aspernatur, impedit illum atque voluptas at qui.
                <br />
                <br />
                Nostrum, facilis inventore accusamus itaque illo ea quidem
                expedita consequuntur sint nesciunt tenetur dignissimos. Aliquam
                placeat nam laudantium molestiae, dolorem dicta sit aperiam
                excepturi quasi at id porro, inventore minus earum, in eaque
                deserunt! Impedit dolorem totam culpa cum autem debitis
                reiciendis itaque iure tempore, ducimus id quia velit
                exercitationem quasi repudiandae aperiam non porro rem quod
                ipsam numquam.
                <br />
                <br />
                Excepturi, laborum provident pariatur sequi possimus minus
                itaque quod laboriosam praesentium perspiciatis suscipit a harum
                ab, accusamus autem. Libero incidunt id iure eum eveniet
                inventore doloribus earum, rerum, numquam voluptas voluptatibus
                asperiores beatae est dicta esse, amet saepe velit iusto
                temporibus animi?
              </p>
            </div>
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
