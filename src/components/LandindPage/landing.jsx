import React from "react";
import Intro from "../sections/introduction";
import Scroll from "../navbarScroll/ScrollIndicator";
import { OfflineContent } from "../../offline/offlineContent";
import { OfflineNotification } from "../../offline/offlineNotification";
import Portfolio from "../sections/home";
import Launch from "../sections/launch";
import Referral from "../sections/referral";


function Landing() {
  return (
    <div>
      <Scroll />
      <OfflineContent />
      <OfflineNotification />
      <Intro />
      <Portfolio />
      <Launch />
      <Referral />
    </div>
  );
}

export default Landing;
