import Image from 'next/image';

export default function Loading() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-pink-background">
      <Image src="/images/compass.gif" alt="loader" width={250} height={250} />
    </div>
  );
}
