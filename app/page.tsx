import Image from "next/image";
import { Newletter } from "./components/Newletter";

export default function Home() {
  return (
    <main className="p-inset h-[100dvh] w-full">
      <div className="relative h-full w-full">
        
        <Newletter />
      </div>
    </main>
  );
}
