import React from 'react';
import Hero from '../components/Hero';
import FeaturedInterests from '../components/FeaturedInterests';
import SpecialGifts from '../components/SpecialGifts';
import DiscountCards from '../components/DiscountCards';
import GiftCategories from '../components/GiftCategories';
import TodayDeals from '../components/TodayDeals';
import PopularCategories from '../components/PopularCategories';
import EditorsPick from '../components/EditorsPick';
import Promotions from '../components/Promotoions';
import WhatIsEtsySection from '../components/WhatIsEtsySection';


export default function Home() {
  const heroCards = [
    {
      targetLink: "/c/",
      heading: "Made just for you!",
      paragraph: "Custom pieces you won't find elsewhere",
      targetText: "Personalize now",
      imgSrc: "https://i.etsystatic.com/ij/8fcb40/6831499662/ij_680x540.6831499662_s02a2djl.jpg?version=0"
    },
    {
      targetLink: "/c/",
      heading: "Weddings & Engagement",
      paragraph: "Find timeless keepsakes for special days.",
      imgSrc: "https://i.etsystatic.com/35663903/r/il/1a8f33/6704939235/il_600x600.6704939235_ahrj.jpg"
    }
  ];

  const featuredCards = [
    {
      cardImg: "https://i.etsystatic.com/19444362/r/il/6afe11/5881346621/il_fullxfull.5881346621_sgmy.jpg",
      cardText: "Movie Night",
      cardLink: "/product/6582518933052410000"
    },
    {
      cardImg: "https://i.etsystatic.com/37450997/r/il/15ecd9/5950540034/il_fullxfull.5950540034_prdj.jpg",
      cardText: "Big & Bold",
      cardLink: "/product/6818854063512441000"
    },
    {
      cardImg: "https://i.etsystatic.com/5676972/r/il/7de993/6239702487/il_fullxfull.6239702487_bxj6.jpg",
      cardText: "Puzzles",
      cardLink: "/product/6818854063512441000"
    },
    {
      cardImg: "https://i.etsystatic.com/10138478/r/il/6a2ce3/5598138313/il_fullxfull.5598138313_lmt6.jpg",
      cardText: "Roller Skating",
      cardLink: "/product/6818854063512441000"
    },
    {
      cardImg: "https://i.etsystatic.com/14319708/r/il/95fabf/4112691348/il_fullxfull.4112691348_95sq.jpg",
      cardText: "Mid-century Modern",
      cardLink: "/product/6818854063512441000"
    },
    {
      cardImg: "https://i.etsystatic.com/11111774/r/il/7bbe65/4169691495/il_fullxfull.4169691495_nydp.jpg",
      cardText: "Beekeeping",
      cardLink: "/product/6818854063512441000"
    },
    {
      cardImg: "https://i.etsystatic.com/42826112/r/il/e1cc7c/5831311028/il_fullxfull.5831311028_ljt1.jpg",
      cardText: "Preppy Pets",
      cardLink: "/product/6818854063512441000"
    },
    {
      cardImg: "https://i.etsystatic.com/17328444/r/il/93c908/4312117516/il_fullxfull.4312117516_j3lr.jpg",
      cardText: "Seeing Spots",
      cardLink: "/product/6818854063512441000"
    },
    {
      cardImg: "https://i.etsystatic.com/5583437/r/il/2ad97d/1990521837/il_fullxfull.1990521837_3fdi.jpg",
      cardText: "Heirloom Era",
      cardLink: "/product/6818854063512441000"
    },
    {
      cardImg: "https://i.etsystatic.com/20584367/r/il/c89186/6024935397/il_fullxfull.6024935397_tcyp.jpg",
      cardText: "Burgundy Style",
      cardLink: "/product/6818854063512441000"
    }
  ];

  const specialCards = [
    {
      cardImg: "https://i.etsystatic.com/52847129/r/il/627834/6303715124/il_680x540.6303715124_nxnq.jpg",
      cardText: "Pop-ip and Confetti Birthday Cards",
      cardLink: "/product/6818854063512441000"
    },
    {
      cardImg: "https://i.etsystatic.com/43384973/r/il/f87246/6322233345/il_680x540.6322233345_dj5j.jpg",
      cardText: "Birthday Gift Card and Money Holders",
      cardLink: "/product/6818854063512441000"
    },
    {
      cardImg: "https://i.etsystatic.com/14415547/r/il/2f91cd/6703836699/il_680x540.6703836699_8o69.jpg",
      cardText: "Unique Vases",
      cardLink: "/product/6818854063512441000"
    }
  ];

  const discountCards = [
    {
      cardImg: "https://i.etsystatic.com/32105733/r/il/573e70/5276024314/il_680x540.5276024314_gm9l.jpg",
      cardPrice: "USD 11.97",
      cardLink: "/product/6818854063512441000"
    },
    {
      cardImg: "https://i.etsystatic.com/51432507/r/il/85ec8c/6016268871/il_680x540.6016268871_qw35.jpg",
      cardPrice: "USD 490.00",
      cardLink: "/product/6818854063512441000"
    },
    {
      cardImg: "https://i.etsystatic.com/11499597/r/il/df8739/1258189961/il_680x540.1258189961_9vod.jpg",
      cardPrice: "USD 11.26",
      cardLink: "/product/6818854063512441000"
    },
    {
      cardImg: "https://i.etsystatic.com/24575237/r/il/6c5f6b/6404110696/il_680x540.6404110696_mu91.jpg",
      cardPrice: "USD 10.00",
      cardLink: "/product/6818854063512441000"
    },
    {
      cardImg: "https://i.etsystatic.com/5265180/r/il/14dba8/6421451813/il_680x540.6421451813_fh1c.jpg",
      cardPrice: "USD 28.00",
      cardLink: "/product/6818854063512441000"
    },
    {
      cardImg: "https://i.etsystatic.com/6985509/r/il/ccf292/5958149207/il_680x540.5958149207_6hrt.jpg",
      cardPrice: "USD 29.95",
      cardLink: "/product/6818854063512441000"
    }
  ];

  const giftCategories = [
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/10787683/r/il/1a9ec8/3971633698/il_300x300.3971633698_7pto.jpg",
      categoryName: "Personalized Gifts"
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/44887041/r/il/06aa5b/5096414567/il_300x300.5096414567_831t.jpg",
      categoryName: "Gifts for Him"
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/12769651/r/il/c6893d/5901892511/il_300x300.5901892511_tv44.jpg",
      categoryName: "Gifts for Her"
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/14399695/c/2001/2001/642/0/il/6b3035/5171857250/il_300x300.5171857250_8a9f.jpg",
      categoryName: "Gifts for Kids"
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/12213308/r/il/f917a5/5688366932/il_300x300.5688366932_kv0k.jpg",
      categoryName: "Foodie Gifts"
    }
  ]
  const popularCategories = [
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/8444652/c/2830/2249/60/229/il/89ad66/2029884069/il_300x300.2029884069_h9q2.jpg",
      categoryName: "Tumblers and water glasses"
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/12788147/c/1333/1059/0/518/il/5935b7/5795772079/il_300x300.5795772079_hls2.jpg",
      categoryName: "Men's t-shirts"
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/12360908/c/2553/2027/186/383/il/b03306/2500653746/il_300x300.2500653746_kcts.jpg",
      categoryName: "Craft supplies and tools"
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/6891987/c/2752/2187/211/505/il/7ec61a/1969078101/il_300x300.1969078101_o8g0.jpg",
      categoryName: "Engagement rings"
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/13920181/r/il/037f60/2081846611/il_300x300.2081846611_8vca.jpg",
      categoryName: "Wall decor"
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/19620646/r/il/a420c0/3833312418/il_300x300.3833312418_1vzr.jpg",
      categoryName: "Car accessories"
    }
  ]
  const promotionCards = [
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/29939306/r/il/8fb47d/6320467449/il_300x300.6320467449_4pyp.jpg",
      categoryName: "Personalized Gifts",
      discount: "up to 20% off"
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/14530726/r/il/5fcf96/1924845121/il_300x300.1924845121_48j0.jpg",
      categoryName: "Outdoor & Gardening",
      discount: "up to 30% off"
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/48688437/c/952/952/278/12/il/b39c11/6832527264/il_300x300.6832527264_9j6h.jpg",
      categoryName: "Self Care Gifts",
      discount: "up to 40% off"
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/28063925/r/il/11143d/6096092659/il_300x300.6096092659_dat7.jpg",
      categoryName: "Toys & Games",
      discount: "up to 30% off"
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/16064614/c/2250/2250/0/0/il/ff0789/5242870316/il_300x300.5242870316_2bah.jpg",
      categoryName: "Linen Style",
      discount: "up to 20% off"
    }
  ]
  const editorCards = [
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/35663903/c/1986/1986/502/454/il/1a8f33/6704939235/il_600x600.6704939235_ahrj.jpg",
      videoSrc: "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/b5b9192ba2934256db70d12db782e8a4_raw_mxtzo7.mp4",
      price: "44.05",
      discountPrice: "22.02"
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/13648456/r/il/24df69/2919347352/il_600x600.2919347352_cqw9.jpg",
      videoSrc: "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/%D0%9A%D0%B8%D1%81%D1%82%D0%BE%D1%87%D0%BA%D0%B0-%D0%B1%D1%80%D0%B5%D0%BB%D0%BE%D0%BA_htabfn.mp4",
      price: "22.00",
      discountPrice: "17.60"
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/27206268/c/2000/2000/582/0/il/205dc5/4533854158/il_600x600.4533854158_jogz.jpg",
      videoSrc: null,
      price: "33.00",
      discountPrice: null
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/54437790/r/il/9116ef/6347068992/il_600x600.6347068992_9poi.jpg",
      videoSrc: "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/copy_DA4D9C4F-360C-4531-BF8A-24689DD8A044_fzhfkv.mp4",
      price: "35.00",
      discountPrice: "28.00"
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/52522964/r/il/367d95/6772775767/il_600x600.6772775767_fgac.jpg",
      videoSrc: null,
      price: "83.56",
      discountPrice: "45.96"
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/16565759/r/il/6ab27d/3756715256/il_600x600.3756715256_nf0t.jpg",
      videoSrc: null,
      price: "23.00",
      discountPrice: "17.25"
    }
  ]
  const dealCards = [
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/34379934/c/2000/2000/0/0/il/628644/4796937795/il_600x600.4796937795_qnr6.jpg",
      title: "Custom Name Necklace, 18K Gold Plated Name Necklace, Personalized Name Necklace, Birthday Gift for Her, Mother's Day Gift, Gift for Mom",
      review: "4.9",
      price: "USD 14.23",
      oldPrice: "USD 28.46",
      discount: "50% off",
      text: "Biggest sale in 60+ days"
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/15888388/r/il/517344/6899552484/il_600x600.6899552484_mp7r.jpg",
      title: "CROCHET PATTERN & VIDEO/ Caribbean Sea Sweater, Crochet Lace Sweater Pattern, Lace Crochet Top, Gifting, Sizes Xs-5X, Womens, Pdf",
      review: "4.9",
      price: "USD 7.35",
      oldPrice: "USD 16.35",
      discount: "55% off",
      text: "Biggest sale in 60+ days"
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/10005660/r/il/bf9f0a/6534362226/il_600x600.6534362226_dzbe.jpg",
      title: "Personalized Vegan Leather Luggage Tag, Engraved Monogram Luggage Tag, Custom Luggage Tag, Suitcase Tag, Wedding Party Favors, Travel Gifts",
      review: "4.9",
      price: "USD 4.85",
      oldPrice: "USD 9.70",
      discount: "50% off",
      text: ""
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/51893623/r/il/9a14f7/6289805354/il_600x600.6289805354_lali.jpg",
      title: "Personalized Embroidered Unisex Cap With Your Text For BestMan Gift,Custom Hand Embroidered Monogram Caps Gift For Her,Business Party Gift",
      review: "4.7",
      price: "USD 10.04",
      oldPrice: "USD 16.74",
      discount: "40% off",
      text: "Biggest sale in 60+ days"
    },
    {
      catLink: "/product/6818854063512441000",
      imageSrc: "https://i.etsystatic.com/52310025/r/il/bd07ad/6159120315/il_600x600.6159120315_4h7u.jpg",
      title: "Personalized Baby Shower Gift Basket, Rope Cotton Baby Gift Basket, Baby Gift Basket, Toy Basket, Newborn Gift, Baby Name Gift, Baby Basket",
      review: "4.8",
      price: "USD 18.07",
      oldPrice: "USD 30.12",
      discount: "40% off",
      text: ""
    }
  ]
  return (
    <>
      <Hero card1={heroCards[0]}
        card2={heroCards[1]} />
      <FeaturedInterests featuredCards={featuredCards} />
      <SpecialGifts specialCards={specialCards} />
      <DiscountCards discountCards={discountCards} />
      <GiftCategories giftCategories={giftCategories} />
      <TodayDeals dealCards={dealCards} />
      <PopularCategories popularCategories={popularCategories} />
      <EditorsPick editorCards={editorCards} />
      <Promotions promotionCards={promotionCards} />
      <WhatIsEtsySection />
    </>
  );
} 