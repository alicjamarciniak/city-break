const Video = () => {
  return (
    <video
      poster="/images/sunset-placeholder.png"
      preload="auto"
      autoPlay
      loop
      muted
      className="absolute h-full max-w-none lg:w-[100vw] lg:h-auto lg:left-auto md:left-[-60%] left-[-90%]"
    >
      <source src="/videos/sunset.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
