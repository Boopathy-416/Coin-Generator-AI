import React from "react";
import CreateToken from "../popupfunction/cratetoken";
import TokenContainer from "../../tokenfunctionality/tokencontainer";

function CreateTokenPage() {
  return (
    <div className="px-2 md:px-20  py-10 border-[10px] md:border-x-[2rem] border-red bg-black">
      <div className="relative border-[10px]  border-black  flex border-x-[10px] overflow-x-hidden rounded-sm bg-[url('https://media1.giphy.com/media/8uSiaxCn2NL5zmqzn3/giphy.webp?cid=ecf05e47gv4awjofyheigz0gsh2la03qhe3vfj3v4t299cil&ep=v1_gifs_search&rid=giphy.webp&ct=g')] mb-4">
        <div className="animate-marquee whitespace-nowrap">
          <h1
            className="text-white inline-block p-3  text-center text-2xl md:text-7xl "
            style={{ fontFamily: "Akira" }}
          >
            Launch your token on The Coin
          </h1>
          {/* You can duplicate the text so that the marquee scrolls continuously. */}
          <h1
            className="text-white inline-block p-3  text-center text-2xl md:text-7xl "
            style={{ fontFamily: "Akira" }}
          >
            Launch your token on The Coin
          </h1>
        </div>
      </div>
      <CreateToken />


      <div className="p-1 bg-black h-full ">
       <TokenContainer />
      </div>


    </div>
  );
}

export default CreateTokenPage;
