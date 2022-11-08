import Image from "next/image";

// replace it with image from google
import logo from "../../public/assets/logo.png";
import cog from "../../public/assets/cog.png";

export default function CurrentChatNav(props) {
  // useEffect(() => {
  /* 
    ------------------------------------------------------------------------------------------------    
    [This part cannoy be implemented due to the lack off time and unability to host the backend]

    - Fetch user data from the API using 6 digit unique ID
    - Save the user data as a state
    - Serves the name and avatar from responce
    - Implement the cog with a hamberger menu
    - Add a option to delete user
    - Send a DELETE request to the API
    ------------------------------------------------------------------------------------------------
    */
  // }, []);

  return (
    <div className="flex items-center justify-between w-full py-5 bg-black px-10 border rounded-2xl border-white">
      <div className="rounded-full bg-plane p-1">
        {/* Edit with image */}
        <Image height={48} width={48} src={logo} alt="img" />
      </div>
      <div>
        <h1 className="text-yellow text-2xl">User.name</h1>
      </div>
      <div className="">
        <button onClick={() => {}}>
          <Image src={cog} alt="logo" height={40} width={40} />
        </button>
      </div>
    </div>
  );
}
