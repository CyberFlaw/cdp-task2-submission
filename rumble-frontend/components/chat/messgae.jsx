import Image from "next/image";

import edit from "../../public/assets/edit.png";
import remove from "../../public/assets/remove.png";

export default function Message(props) {
  /* 
    -------------------------------------------------------------------------------------------------    
    [This part cannoy be implemented due to the lack off time and unability to host the backend]

    - Pass HTTP requests to end point to edit the message
    - Pass HTTP requests to end point to delete the message
    -------------------------------------------------------------------------------------------------
    */

  return props.type === "send" ? (
    <div className="rounded-2xl text-lg py-2 px-4 text-black font-medium bg-green mb-6 mx-16 mr-4">
      <div>
        <h3>{props.text}</h3>
      </div>
      <div className="flex flex-row items-center justify-end">
        <button>
          <Image
            src={edit}
            height={16}
            width={16}
            alt="edit"
            className="mx-5"
          />
        </button>
        <button>
          <Image src={remove} height={16} width={16} alt="remove" />
        </button>
      </div>
    </div>
  ) : (
    <div className="rounded-2xl text-lg py-2 px-4 text-black font-medium bg-teal mb-6 mx-16 ml-4">
      <div>
        <h3>{props.text}</h3>
      </div>
      <div className="flex flex-row items-center justify-end">
        <button>
          <Image
            src={edit}
            height={16}
            width={16}
            alt="edit"
            className="mx-5"
          />
        </button>
        <button>
          <Image src={remove} height={16} width={16} alt="remove" />
        </button>
      </div>
    </div>
  );
}
