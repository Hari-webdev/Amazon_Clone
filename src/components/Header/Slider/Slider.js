 import React from 'react'
 import SimpleImageSlider from "react-simple-image-slider";
 import "../Slider/Slider.css"
 const images = [
    { url: "	https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungM/M14/Summer-sale/D81073899_IN_MayART_SamsungM_M145G_DesktopTallHero_3000x1200._CB590042173_.jpg"  },
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/MAYGTM2022/2023/D11_HeroPC_3000x1200_rev._CB589422742_.jpg" },
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/Homepage_DesktopHeroTemplate_3000x1200v3._CB592770274_.jpg" },
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/BB/MAY/Desktop_tall_Hero_3000x1200_BB_May_2023_Books-to-read-this-summer_overall._CB589829390_.jpg" },
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Grocery/BevFest/May/PC_Hero_3000x1200._CB590272418_.jpg" },
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/ssserene/GW/May23/BAU/NordCE2lite/D42850095_WLD_OnePlus_OSCAR_NewLaunch_DesktopHero_3000x1200._CB589852383_.jpg"},
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/ssserene/GW/May23/BAU/10R/D43000892_WLD_OnePlus_Pickle_NewLaunch_Tall_hero_3000x1200._CB589852377_.jpg"},
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/Launches23/OnePlusNordBuds2/Sale/IBD/D75520316_IN_WLA_OnePlusNordBuds2_launch_DesktopTallHero_3000x1200._CB590113624_.jpg"},
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fresh/MAY/GW/13/V1/13th_Fresh_GW_Hero_PC2x_NC._CB590110300_.jpg"},
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Madhav/May/OPPO/teaser/13thMAY/D81035127_OPPO_F23-5G_Launch_MAY_Tall_hero_3000x1200._CB590094240_.jpg"},
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/MFD/May/Hero/Deals-Rec-Nonprime-3000-PC._CB590313084_.jpg"},




 
  ];
  
  const Slider = () => {
    return (
      <div className='slider'>
        <SimpleImageSlider
          width={1500}
          height={800}
          images={images}
          showBullets={false}
          showNavs={false}
          autoPlay={true}
          autoPlayDelay={3.0}
        
        />
      </div>
    );
    }

 export default Slider








