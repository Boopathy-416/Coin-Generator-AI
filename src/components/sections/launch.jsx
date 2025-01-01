
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Launch() {


  return (
    <div
      id="launch"
      className=" relative z-60 min-h-screen  border-[2px] border-t-[2rem] border-[#000]   w-full  bg-red-900"
    >
      <div className=" px-8 md-px-20 lg-px-40  align-center ">
        <div className=" z-20 ">
          <div className=" z-40  text-white py-8 opacity-100 translate-y-10">
            <div className="container border-[40px] border-t-[2.5rem] border-l-[1px] border-b-[5px] border-[#000] p-5 mx-auto px-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 grid place-items-center border-2 border-white">
                    <div className="w-6 h-6 bg-white" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm">Ready to Create Your Coin?</p>
                    <p className="text-sm">
                      Connect your wallet today and begin your crypto journey.{" "}
                    </p>
                    <p className="text-sm">
                      Reach out to our team for personalized assistance.
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <h1 className="text-white text-2xl mb-4">
                    Welcome to Token Creator
                  </h1>
                  <Link
                    to="/create-token"
                    className="border border-white text-white hover:bg-white hover:text-black transition-colors flex items-center px-4 py-2 rounded"
                  >
                    Start a new coin
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="p-16 text-sm opacity-60">© Boopathy E 2024</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Launch;
