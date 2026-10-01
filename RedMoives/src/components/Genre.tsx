
function Genre() {
  return (
    <div>
      <div className="flex justify-between px-5 items-center h-15 border">
        <h2 className="text-2xl">Genres</h2>
        <span>See all</span>
      </div>
      <div className="p-5 flex flex-col gap-5">
        <div className="relative h-24 w-full overflow-hidden rounded-lg">
          <img
            src="/imgPoster.png"
            alt="Action"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45"></div>

          <h3 className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white">
            Action
          </h3>
        </div>
        <div className="relative h-24 w-full overflow-hidden rounded-lg">
          <img
            src="/imgPoster.png"
            alt="Action"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45"></div>

          <h3 className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white">
            Comdey
          </h3>
        </div>
        <div className="relative h-24 w-full overflow-hidden rounded-lg">
          <img
            src="/imgPoster.png"
            alt="Action"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45"></div>

          <h3 className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white">
            Horror
          </h3>
        </div>
        <div className="relative h-24 w-full overflow-hidden rounded-lg">
          <img
            src="/imgPoster.png"
            alt="Action"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45"></div>

          <h3 className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white">
            Drama
          </h3>
        </div>
        <div className="relative h-24 w-full overflow-hidden rounded-lg">
          <img
            src="/imgPoster.png"
            alt="Action"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45"></div>

          <h3 className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white">
            Romance
          </h3>
        </div>
        <div className="relative h-24 w-full overflow-hidden rounded-lg">
          <img
            src="/imgPoster.png"
            alt="Action"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45"></div>

          <h3 className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white">
            Sci - Fi
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Genre
