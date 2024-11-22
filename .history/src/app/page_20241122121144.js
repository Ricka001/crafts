import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <div className="flex col-span-2 justify-center">
        <div className="flex justify-center items-center space-x-80">
          <Image
            src="/craftit.png"
            alt="Picture of crafts"
            height={700}
            width={800}
          />
        </div>
        <div className="flex justify-center items-center space-x-80">
          <Image
            src="/craftit.png"
            alt="Picture of crafts"
            height={700}
            width={800}
          />
        </div>
      </div>
    </div>
  );
}
