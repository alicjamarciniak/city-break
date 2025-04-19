import Image from 'next/image';

export default function Loading() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-pink-background">
      <Image alt="loader" height={250} src="/images/compass.gif" width={250} />
    </div>
  );
}
