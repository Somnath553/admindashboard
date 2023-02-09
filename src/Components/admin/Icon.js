import React from "react"
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
function Icon() {
    return (
      <div className="bg-white h-[100%]  absolute left-0 top-0 py-40 flex flex-col gap-16  w-20 justify-center items-center">
        <HomeIcon className="text-gray-500 hover:text-indigo-700 "/>
        <LeaderboardIcon  className="text-gray-500 hover:text-indigo-700" />
        <PeopleAltIcon  className="text-gray-500 hover:text-indigo-700" />
        <WidgetsIcon  className="text-gray-500 hover:text-indigo-700" />
        <MarkunreadIcon  className="text-gray-500 hover:text-indigo-700" />
        <FolderCopyIcon  className="text-gray-500 hover:text-indigo-700" />

      </div>
    );
  }
  
  export default Icon;