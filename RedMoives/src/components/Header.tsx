import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
function Header() {
  const [dropDown, setDropDown] = useState(false)
  return (
    <>
      <div className="border h-15 w-full flex justify-between items-center px-5">
        <div className="text-base">RedMoives</div>
        <div>
          <div className="flex h-full gap-3 items-center">
            <input className="border px-3 py-1" type="text" placeholder="Search Moives" />
            <IoIosSearch className="border text-3xl cursor-pointer" />
          </div>
        </div>
        <div>
          <IoIosMenu onClick={() => setDropDown(!dropDown)} className="border text-3xl cursor-pointer" />
        </div>
      </div>
      {dropDown && <div className="border py-2">
        <ul className="flex flex-col w-full items-center gap-2">
          <li className="border w-40 px-3 py-1 text-center">Movies</li>
          <li className="border w-40 px-3 py-1 text-center">TV Shows</li>
          <li className="border w-40 px-3 py-1 text-center">Series</li>
          <li className="border w-40 px-3 py-1 text-center">Watchlist</li>
        </ul>
      </div>}
    </>
  )
}

export default Header
