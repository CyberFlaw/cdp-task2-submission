import Image from "next/image";
import RecentUsers from "./recentUsers";

import cog from "../../public/assets/cog.png";
import { useEffect, useState } from "react";

export default function Dashboard(props) {
  const avatarLoader = () => props.user.user.photoURL;

  useEffect(() => {
    /* 
    -----------------------------------------------------------------------------
    THIS PART MENTIONED BELOW WILL BE DEFINED IN THE CONTEXT
    
    [This part cannoy be implemented due to the lack off time and unability to host the backend]

    - Add fetch query to get all rooms the user belong to, from the Database
    - Store the result in a list, and export that list from the context
    - A state is also kept to track the active user in the chat space
    -----------------------------------------------------------------------------
    */
  }, []);

  return (
    <div className="bg-white w-4% h-80 rounded-3xl flex items-center justify-between flex-col mr-4 min-w-17 lg:flex">
      <dir className="flex items-center justify-center p-2 rounded-3xl bg-black">
        <Image
          loader={avatarLoader}
          src="avatar.png"
          alt="avatar"
          height={32}
          width={32}
          className="rounded-3xl"
        />
      </dir>
      <div className="flex items-start justify-start flex-col h-full py-5 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
        {/*
        -------------------------------------------------------------------- 
        Replace the below code clock with the for each iteration over the 
        list thet was fetched fron the DB 
        --------------------------------------------------------------------
        */}

        <RecentUsers icon="AZ" color={0} />
        <RecentUsers icon="BY" color={1} />
        <RecentUsers icon="CX" color={2} />
        {/* <RecentUsers icon="D" color={3} />
        <RecentUsers icon="E" color={4} /> */}
      </div>
      <button onClick={console.log(props.user)}>
        <dir className="flex items-center justify-center p-2 rounded-3xl bg-black">
          <Image src={cog} alt="cog" height={36} width={32} />
        </dir>
      </button>
    </div>
  );
}
