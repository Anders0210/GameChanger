import Image from "next/image";
import Logo from "@/app/public/logo.png";
import ArrowIcon from "@/app/public/icon_titlebar.png";
import Footer from "@/components/footer";
import fb from "@/app/public/socials/icon_facebook.png";
import gplus from "@/app/public/socials/icon_gplus.png";
import BlueBird from "@/app/public/socials/icon_twitter.png";
import yt from "@/app/public/socials/icon_youtube.png";

export default function Contact() {
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
        <div className="flex gap-2 items-center mb-2 p-2 w-full bg-black text-cyan-400 font-medium text-2xl">
          <Image
            src={ArrowIcon}
            alt="Icon"
            width={19}
            height={19}
            className="w-auto h-[19px]"
          />
          Kontakt
        </div>
        <p className="text-lg">
          Udfyld og send formularen, hvis du har et spørgsmål eller en besked.
        </p>
        <form className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-lg">
              Fulde Navn
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Navn"
              autoComplete="on"
              className="p-2 border-2 border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="on"
              className="p-2 border-2 border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-lg">
              Besked
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Besked"
              autoComplete="on"
              className="p-2 border-2 border-gray-400 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-cyan-400 text-white py-2 rounded-md"
          >
            Send
          </button>
        </form>
        <Footer />
      </section>
    </div>
  );
}
