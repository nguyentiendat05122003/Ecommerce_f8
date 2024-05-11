import Logo from "@/components/Logo";
import Image from "next/image";
import media from "../../assets/img/banner/media.webp";
import Facebook from "../../assets/img/icons/facebook.png";
import Google from "../../assets/img/icons/google.png";
import RegisterForm from "./RegisterForm";

export default function Register() {
  return (
    <div>
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-center items-center lg:p-[60px]">
          <Logo />
          <p className="text-center tracking-[0.2px] font-semibold text-lg leading-6 max-w-[540px] my-7 mx-auto">
            Gain data-based insights, view progress at a glance, and manage your
            organization smarter
          </p>
          <Image
            className="max-w-[520px] h-[438px] object-cover"
            src={media}
            alt="media"
          />
        </div>
        <div className="bg-widget  flex flex-col items-center justify-start w-full py-10 px-4 lg:p-[60px]">
          <div className="flex flex-col gap-2.5 text-center">
            <h1 className="text-[38px]">Welcome back!</h1>
            <p className="lg:max-w-[300px] m-auto 4xl:max-w-[unset]">
              Etiam quis quam urna. Aliquam odio erat, accumsan eu nulla in
            </p>
          </div>
          <RegisterForm />
          <div className="w-full max-w-sm">
            <div className=" relative">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-border" />
              <span className="flex items-center justify-center relative z-10 w-11 h-[23px] m-auto bg-widget">
                or
              </span>
            </div>
            <div className="w-full grid grid-cols-2 gap-4 2xs:grid-cols-2 xs:gap-[30px] mt-[30px] mb-9">
              <button className="hover:bg-background max-w-[215px] flex items-center justify-center rounded-[23px] h-searchHeight text-sm gap-[15px] border-[1px] border-solid border-accent text-accent">
                <Image
                  src={Facebook}
                  alt="Facebook"
                  className="w-[16px] h-auto object-cover"
                />
                Facebook
              </button>
              <button className="hover:bg-background max-w-[215px] flex items-center justify-center rounded-[23px] h-searchHeight text-sm gap-[15px] border-[1px] border-solid border-accent text-accent">
                <Image
                  src={Google}
                  alt="Google"
                  className="w-[16px] h-auto object-cover"
                />
                Google
              </button>
            </div>
            <div className="flex justify-center items-center gap-2.5 leading-none">
              <p>Don’t have an account?</p>
              <button className="text-accent font-semibold text-base">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
