import { Sms } from "iconsax-react";
import Image from "next/image";

const primaryColor = "#F92E43";

export default function Home() {
  return (
    <div>
      {/* Greeting */}
      <div className="flex gap-x-4 items-center justify-center w-fit h-fit border-[1.5px] border-strokes rounded-2xl p-6">
        {/* Profile Photo */}
        <div className="h-fit w-fit bg-primary flex items-center justify-center rounded-full">
          <Image
            src={'/profile.png'}
            alt="profile_photo"
            height={100}
            width={100}
            quality={100}
            className="h-16 w-16"
          />
        </div>

        {/* User Information */}
        <div>
          <h1 className="text-xl font-bold">Welcome back! <span className="text-primary">Prathmesh</span></h1>
          <div className="flex items-center gap-x-2.5 mt-0.5">
            <Sms className="h-5 w-5" color={primaryColor} />
            <p className="text-sm font-medium text-subtitle">prathmeshgaidhane6@gmail.com</p>
          </div>
        </div>
      </div>


    </div>
  );
}
