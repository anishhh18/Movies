function MoviePage() {
  return (
    <>
    <div className="">
      <div className=" relative h-60 w-full overflow-hidden border">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="/imgPoster.png"
        alt=""
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative flex h-full w-full items-end justify-start pl-9 pb-9">
        <div className="border text-white">
          <h2 className="text-2xl">Batman</h2>
        </div>
      </div>
    </div>
    </div>
    <div className="p-5">
      <div>
        <h2 className="text-3xl mb-3">Batman</h2>
        <p className="text-base">iMBD rating ⭐ : 8/10</p>
        <p className="text-base">Action | Sci - Fi</p>
        <p className="text-base">Virat kohli</p>
        <p className="text-base">Ravi Shashtri</p>
        <p className="text-base">English | Hindi</p>
        <p className="text-base">WEB-DL 4K | 1080p | 720p | 480p</p>
      </div>
    </div>
    <div className="p-5">
      <h2 className="text-2xl mb-3">Story-line</h2>
      <p className="text-base">Batman, Gotham City ka vigilante hero hai jo crime aur criminals se ladta hai. Apne parents ki death ke baad Bruce Wayne Batman ban kar Gotham ko protect karne ka mission leta hai.</p>
    </div>
    <div className="p-5">
      <h2 className="text-2xl mb-3">Preview</h2>
      <div className="h-55 w-full overflow-hidden">
        <img className="h-full w-full object-cover" src="/imgPoster.png" alt="" />
      </div>
      <div className="h-55 w-full overflow-hidden">
        <img className="h-full w-full object-cover" src="/imgPoster.png" alt="" />
      </div>
      <div className="h-55 w-full overflow-hidden">
        <img className="h-full w-full object-cover" src="/imgPoster.png" alt="" />
      </div>
      <div className="h-55 w-full overflow-hidden">
        <img className="h-full w-full object-cover" src="/imgPoster.png" alt="" />
      </div>
    </div>
    <div className="p-5">
      <h2 className="text-2xl mb-3">Download links</h2>
      <div className="flex flex-col gap-3">
        <p className="w-full border px-3 py-1 text-base">480p⚡[550MB]</p>
        <p className="w-full border px-3 py-1 text-base">720p x264 [1.1GB]</p>
        <p className="w-full border px-3 py-1 text-base">1080p x264 [2.9GB]</p>
        <p className="w-full border px-3 py-1 text-base">1080p WEB-DL [9.1GB]</p>
        <p className="w-full border px-3 py-1 text-base">4K [2160p SDR WEB-DL – 22.7GB]</p>
      </div>
    </div>
    </>
  );
}

export default MoviePage;