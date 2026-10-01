
function Featured() {
  return (
    <div className="relative h-60 w-full border overflow-hidden">
      <img className="absolute inset-0 h-full w-full object-cover" src="/imgPoster.png" alt="" />
      <div className="absolute inset-0 bg-black/40"></div>
    <div className="relative h-full w-full flex items-end justify-start pl-9 pb-9">
      <div className="border text-white">
        <h2 className="text-2xl">Batman</h2>
            <p className="text-sm flex gap-3"><span>4.5 ⭐</span><span>2026</span></p>
            <p className="text-sm flex gap-3"><span>Action</span><span>Action</span></p>
            <p className="text-base flex gap-3 justify-between"><span>Watch now</span><span>Download</span></p>
      </div>
    </div>
    </div>
  )
}

export default Featured
