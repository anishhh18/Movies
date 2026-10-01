
function Trending() {
  return (
    <div>
      <div className="flex justify-between px-5 items-center h-15 border">
        <h2 className="text-2xl">Trending</h2>
        <span>See all</span>
      </div>
      <div className="relative h-60 w-full border overflow-hidden">
      <img className="absolute inset-0 h-full w-full object-cover" src="/imgPoster.png" alt="" />
      <div className="absolute inset-0 bg-black/40"></div>
    <div className="relative h-full w-full flex items-end justify-start pl-9 pb-9">
      <div className="border text-white">
        <h2 className="text-2xl">title</h2>
        <p className="text-sm flex gap-3"><span>Ratings</span><span>Year</span></p>
        <p className="text-sm flex gap-3"><span>Action</span><span>Action</span></p>
      </div>
    </div>
    </div>
    <div className="p-5 grid grid-cols-2 gap-4">
        <div className="w-48 flex flex-col p-3 border">
          <img className="w-46" src="/imgPoster.png" alt="" />
          <div className="">
            <h2 className="text-xl">Batman</h2>
            <p className="text-sm flex gap-3"><span>4.5 ⭐</span><span>2026</span></p>
            <p className="text-sm flex gap-3"><span>Action</span><span>Action</span></p>
            <p className="text-base flex justify-between"><span>Watch now</span><span>Download</span></p>
          </div>
        </div>
        <div className="w-48 flex flex-col p-3 border">
          <img className="w-46" src="/imgPoster.png" alt="" />
          <div className="">
            <h2 className="text-xl">Batman</h2>
            <p className="text-sm flex gap-3"><span>4.5 ⭐</span><span>2026</span></p>
            <p className="text-sm flex gap-3"><span>Action</span><span>Action</span></p>
            <p className="text-base flex justify-between"><span>Watch now</span><span>Download</span></p>
          </div>
        </div>
        <div className="w-48 flex flex-col p-3 border">
          <img className="w-46" src="/imgPoster.png" alt="" />
          <div className="">
            <h2 className="text-xl">Batman</h2>
            <p className="text-sm flex gap-3"><span>4.5 ⭐</span><span>2026</span></p>
            <p className="text-sm flex gap-3"><span>Action</span><span>Action</span></p>
            <p className="text-base flex justify-between"><span>Watch now</span><span>Download</span></p>
          </div>
        </div>
        <div className="w-48 flex flex-col p-3 border">
          <img className="w-46" src="/imgPoster.png" alt="" />
          <div className="">
            <h2 className="text-xl">Batman</h2>
            <p className="text-sm flex gap-3"><span>4.5 ⭐</span><span>2026</span></p>
            <p className="text-sm flex gap-3"><span>Action</span><span>Action</span></p>
            <p className="text-base flex justify-between"><span>Watch now</span><span>Download</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending
