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
      targetLink: "/shop",
      heading: "Made just for you!",
      paragraph: "Custom pieces you won't find elsewhere",
      targetText: "Personalize now",
      imgSrc: "https://i.etsystatic.com/ij/8fcb40/6831499662/ij_680x540.6831499662_s02a2djl.jpg?version=0"
    },
    {
      targetLink: "/shop",
      heading: "Weddings & Engagement",
      paragraph: "Find timeless keepsakes for special days.",
      imgSrc: "https://i.etsystatic.com/35663903/r/il/1a8f33/6704939235/il_600x600.6704939235_ahrj.jpg"

    }
  ]
  const featuredCards = [
    {
      cardImg: "https://i.etsystatic.com/19444362/r/il/6afe11/5881346621/il_fullxfull.5881346621_sgmy.jpg",
      cardText: "Movie Night",
      cardLink: "https://www.etsy.com/r/themes/1314285286094?anchor_listings=1692778521%2C1334508832%2C1264669215%2C1189561234&ref=hp_themes_module-1"
    },
    {
      cardImg: "https://i.etsystatic.com/37450997/r/il/15ecd9/5950540034/il_fullxfull.5950540034_prdj.jpg",
      cardText: "Big & Bold",
      cardLink: "https://www.etsy.com/r/themes/1319120091274?anchor_listings=1707891520%2C1598012016%2C1747685228%2C655721899&ref=hp_themes_module-2"
    },
    {
      cardImg: "https://i.etsystatic.com/5676972/r/il/7de993/6239702487/il_fullxfull.6239702487_bxj6.jpg",
      cardText: "Puzzles",
      cardLink: "https://www.etsy.com/r/themes/1368461660904?anchor_listings=1759485270%2C972233413%2C1851145739%2C492888181&ref=hp_themes_module-3"
    },
    {
      cardImg: "https://i.etsystatic.com/10138478/r/il/6a2ce3/5598138313/il_fullxfull.5598138313_lmt6.jpg",
      cardText: "Roller Skating",
      cardLink: "https://www.etsy.com/r/themes/1368461669348?anchor_listings=1622070735%2C963218875%2C1031556378%2C1733484971&ref=hp_themes_module-4"
    },
    {
      cardImg: "https://i.etsystatic.com/14319708/r/il/95fabf/4112691348/il_fullxfull.4112691348_95sq.jpg",
      cardText: "Mid-century Modern",
      cardLink: "https://www.etsy.com/r/themes/1314285285514?anchor_listings=1293727189%2C1334363479%2C249970446%2C955303254&ref=hp_themes_module-5"
    },
    {
      cardImg: "https://i.etsystatic.com/11111774/r/il/7bbe65/4169691495/il_fullxfull.4169691495_nydp.jpg",
      cardText: "Beekeeping",
      cardLink: "https://www.etsy.com/r/themes/1368461660450?anchor_listings=1295874421%2C794920728%2C1214921342%2C1443612576&ref=hp_themes_module-6"
    },
    {
      cardImg: "https://i.etsystatic.com/42826112/r/il/e1cc7c/5831311028/il_fullxfull.5831311028_ljt1.jpg",
      cardText: "Preppy Pets",
      cardLink: "https://www.etsy.com/r/themes/1314272292831?anchor_listings=1676088393%2C1190818209%2C1209401662%2C1197318805&ref=hp_themes_module-7"
    },
    {
      cardImg: "https://i.etsystatic.com/17328444/r/il/93c908/4312117516/il_fullxfull.4312117516_j3lr.jpg",
      cardText: "Seeing Spots",
      cardLink: "https://www.etsy.com/r/themes/1368497658061?anchor_listings=1338691495%2C480176106%2C400287959%2C1724866708&ref=hp_themes_module-8"
    },
    {
      cardImg: "https://i.etsystatic.com/5583437/r/il/2ad97d/1990521837/il_fullxfull.1990521837_3fdi.jpg",
      cardText: "Heirloom Era",
      cardLink: "https://www.etsy.com/r/themes/1349497499362?anchor_listings=592142689%2C1108334575%2C757672603%2C1719585203&ref=hp_themes_module-9"
    },
    {
      cardImg: "https://i.etsystatic.com/20584367/r/il/c89186/6024935397/il_fullxfull.6024935397_tcyp.jpg",
      cardText: "Burgundy Style",
      cardLink: "https://www.etsy.com/r/themes/1314272284629?anchor_listings=1714003818%2C1572202009%2C1739892479%2C1826040141&ref=hp_themes_module-10"
    }
  ]
  const specialCards = [
    {
      cardImg: "https://i.etsystatic.com/52847129/r/il/627834/6303715124/il_680x540.6303715124_nxnq.jpg",
      cardText: "Pop-ip and Confetti Birthday Cards",
      cardLink: "",
    },
    {
      cardImg: "https://i.etsystatic.com/43384973/r/il/f87246/6322233345/il_680x540.6322233345_dj5j.jpg",
      cardText: "Birthday Gift Card and Money Holders",
      cardLink: "",
    },
    {
      cardImg: "https://i.etsystatic.com/14415547/r/il/2f91cd/6703836699/il_680x540.6703836699_8o69.jpg",
      cardText: "Unique Vases",
      cardLink: "",
    }
  ]
  const discountCards = [
    {
      cardImg: "https://i.etsystatic.com/32105733/r/il/573e70/5276024314/il_680x540.5276024314_gm9l.jpg",
      cardPrice: "USD 11.97",
      cardLink: "https://www.etsy.com/listing/1549322458/the-libra-print-libra-gift-astrology?click_key=e5e28ce2fb36dafcd7aa2f8e8f0a2f5edd07a172%3A1549322458&click_sum=582458d6&external=1&ref=hp_consolidated_gifting_listings-1",
    },
    {
      cardImg: "https://i.etsystatic.com/51432507/r/il/85ec8c/6016268871/il_680x540.6016268871_qw35.jpg",
      cardPrice: "USD 490.00",
      cardLink: "https://www.etsy.com/listing/1726178629/custom-dog-enamel-necklace-pet-keepsake?click_key=a2f9c2bd352c5fb6c01eb3971d989fce6b147c18%3A1726178629&click_sum=4a0cdffd&external=1&ref=hp_consolidated_gifting_listings-2&pro=1",
    },
    {
      cardImg: "https://i.etsystatic.com/11499597/r/il/df8739/1258189961/il_680x540.1258189961_9vod.jpg",
      cardPrice: "USD 11.26",
      cardLink: "https://www.etsy.com/listing/520257680/birthday-makeup-bag-cute-birthday-gift?click_key=737a97de18752a55a922d6105551e69d9a52c041%3A520257680&click_sum=27ff1396&external=1&ref=hp_consolidated_gifting_listings-3",
    },
    {
      cardImg: "https://i.etsystatic.com/24575237/r/il/6c5f6b/6404110696/il_680x540.6404110696_mu91.jpg",
      cardPrice: "USD 10.00",
      cardLink: "https://www.etsy.com/listing/1765139788/birthday-activity-and-coloring-book-kids?click_key=c9e2b78876733c0b91bb9e40b28f4d67ceb1262b%3A1765139788&click_sum=3104c8c4&external=1&ref=hp_consolidated_gifting_listings-4",
    },
    {
      cardImg: "https://i.etsystatic.com/5265180/r/il/14dba8/6421451813/il_680x540.6421451813_fh1c.jpg",
      cardPrice: "USD 28.00",
      cardLink: "https://www.etsy.com/listing/1814582041/linen-cocktail-napkins-cake-slice-on?click_key=9c1a1110b658099031be7f6331f45146cf7450cb%3A1814582041&click_sum=33055f57&external=1&ref=hp_consolidated_gifting_listings-5",
    },
    {
      cardImg: "https://i.etsystatic.com/6985509/r/il/ccf292/5958149207/il_680x540.5958149207_6hrt.jpg",
      cardPrice: "USD 29.95",
      cardLink: "https://www.etsy.com/listing/1712678097/happy-birthday-banner-happy-birthday?click_key=4eebd7b4e4769ac468d51d2f9cccafe10378b7cb%3A1712678097&click_sum=234e3ebf&external=1&ref=hp_consolidated_gifting_listings-6&sts=1",
    }
  ]
  const giftCategories = [
    {
      catLink: "https://www.etsy.com/search?q=personalized+gift&anchor_listing_id=1258527539&ref=hp_bubbles_Gifts_Q225&mosv=sese&moci=1361133217417&mosi=1362821598866&is_merch_library=true",
      imageSrc: "https://i.etsystatic.com/10787683/r/il/1a9ec8/3971633698/il_300x300.3971633698_7pto.jpg",
      categoryName: "Personalized Gifts"
    },
    {
      catLink: "https://www.etsy.com/search?q=Gift+for+Him&anchor_listing_id=1514172577&ref=hp_bubbles_Gifts_Q225&mosv=sese&moci=1361133217417&mosi=1362832018127&is_merch_library=true",
      imageSrc: "https://i.etsystatic.com/44887041/r/il/06aa5b/5096414567/il_300x300.5096414567_831t.jpg",
      categoryName: "Gifts for Him"
    },
    {
      catLink: "https://www.etsy.com/search?q=gift+for+her&anchor_listing_id=1684900182&ref=hp_bubbles_Gifts_Q225&mosv=sese&moci=1361133217417&mosi=1362831986215&is_merch_library=true",
      imageSrc: "https://i.etsystatic.com/12769651/r/il/c6893d/5901892511/il_300x300.5901892511_tv44.jpg",
      categoryName: "Gifts for Her"
    },
    {
      catLink: "https://www.etsy.com/search?q=gift+for+kid&anchor_listing_id=737052562&ref=hp_bubbles_Gifts_Q225&mosv=sese&moci=1361133217417&mosi=1364953356091&is_merch_library=true",
      imageSrc: "https://i.etsystatic.com/14399695/c/2001/2001/642/0/il/6b3035/5171857250/il_300x300.5171857250_8a9f.jpg",
      categoryName: "Gifts for Kids"
    },
    {
      catLink: "https://www.etsy.com/search?q=food+lover+gift&anchor_listing_id=1499603686&ref=hp_bubbles_Gifts_Q225&mosv=sese&moci=1341625473142&mosi=1354923429617&is_merch_library=true",
      imageSrc: "https://i.etsystatic.com/12213308/r/il/f917a5/5688366932/il_300x300.5688366932_kv0k.jpg",
      categoryName: "Foodie Gifts"
    }
  ]
  const popularCategories = [
    {
      catLink: "https://www.etsy.com/c/home-and-living/kitchen-and-dining/drink-and-barware/drinkware/tumblers-and-water-glasses?explicit=1&ref=hp_top_in_taxo_categories-1",
      imageSrc: "https://i.etsystatic.com/8444652/c/2830/2249/60/229/il/89ad66/2029884069/il_300x300.2029884069_h9q2.jpg",
      categoryName: "Tumblers and water glasses"
    },
    {
      catLink: "https://www.etsy.com/c/clothing/mens-clothing/shirts-and-tees/tshirts?explicit=1&ref=hp_top_in_taxo_categories-2",
      imageSrc: "https://i.etsystatic.com/12788147/c/1333/1059/0/518/il/5935b7/5795772079/il_300x300.5795772079_hls2.jpg",
      categoryName: "Men's t-shirts"
    },
    {
      catLink: "https://www.etsy.com/c/craft-supplies-and-tools?explicit=1&ref=hp_top_in_taxo_categories-3",
      imageSrc: "https://i.etsystatic.com/12360908/c/2553/2027/186/383/il/b03306/2500653746/il_300x300.2500653746_kcts.jpg",
      categoryName: "Craft supplies and tools"
    },
    {
      catLink: "https://www.etsy.com/c/jewelry/rings/statement-rings?explicit=1&ref=hp_top_in_taxo_categories-4",
      imageSrc: "https://i.etsystatic.com/6891987/c/2752/2187/211/505/il/7ec61a/1969078101/il_300x300.1969078101_o8g0.jpg",
      categoryName: "Engagement rings"
    },
    {
      catLink: "https://www.etsy.com/c/home-and-living/home-decor/wall-decor?explicit=1&ref=hp_top_in_taxo_categories-5",
      imageSrc: "https://i.etsystatic.com/13920181/r/il/037f60/2081846611/il_300x300.2081846611_8vca.jpg",
      categoryName: "Wall decor"
    },
    {
      catLink: "https://www.etsy.com/c/electronics-and-accessories/car-parts-and-accessories/car-accessories?explicit=1&ref=hp_top_in_taxo_categories-6",
      imageSrc: "https://i.etsystatic.com/19620646/r/il/a420c0/3833312418/il_300x300.3833312418_1vzr.jpg",
      categoryName: "Car accessories"
    }
  ]
  const promotionCards = [
    {
      catLink: "https://www.etsy.com/search?q=custom+gift&anchor_listing_id=1302504165&ref=hp_g_DealsRow_6_9_23_25-1&mosv=sese&moci=1363084652851&mosi=1369056638091&is_discounted=true&is_merch_library=true",
      imageSrc: "https://i.etsystatic.com/29939306/r/il/8fb47d/6320467449/il_300x300.6320467449_4pyp.jpg",
      categoryName: "Personalized Gifts",
      discount: "up to 20% off"
    },
    {
      catLink: "https://www.etsy.com/search/home-and-living?q=outdoor+and+gardening&anchor_listing_id=706266055&ref=hp_g_DealsRow_6_9_23_25-2&mosv=sese&moci=1363084652851&mosi=1370104006178&is_discounted=true&is_merch_library=true&pct_discount_max=30",
      imageSrc: "https://i.etsystatic.com/14530726/r/il/5fcf96/1924845121/il_300x300.1924845121_48j0.jpg",
      categoryName: "Outdoor & Gardening",
      discount: "up to 30% off"
    },
    {
      catLink: "https://www.etsy.com/search?q=self+care+gifts&anchor_listing_id=4298522517&ref=hp_g_DealsRow_6_9_23_25-3&mosv=sese&moci=1363084652851&mosi=1387522826340&is_discounted=true&is_merch_library=true",
      imageSrc: "https://i.etsystatic.com/48688437/c/952/952/278/12/il/b39c11/6832527264/il_300x300.6832527264_9j6h.jpg",
      categoryName: "Self Care Gifts",
      discount: "up to 40% off"
    },
    {
      catLink: "https://www.etsy.com/search?q=toys+and+games&anchor_listing_id=1744750381&ref=hp_g_DealsRow_6_9_23_25-4&mosv=sese&moci=1363084652851&mosi=1363074718102&is_discounted=true&is_merch_library=true",
      imageSrc: "https://i.etsystatic.com/28063925/r/il/11143d/6096092659/il_300x300.6096092659_dat7.jpg",
      categoryName: "Toys & Games",
      discount: "up to 30% off"
    },
    {
      catLink: "https://www.etsy.com/search/clothing?q=linen&anchor_listing_id=1542317792&ref=hp_g_DealsRow_6_9_23_25-5&mosv=sese&moci=1363084652851&mosi=1374747616534&is_discounted=true&is_merch_library=true",
      imageSrc: "https://i.etsystatic.com/16064614/c/2250/2250/0/0/il/ff0789/5242870316/il_300x300.5242870316_2bah.jpg",
      categoryName: "Linen Style",
      discount: "up to 20% off"
    }
  ]
  const editorCards = [
    {
      catLink: "https://www.etsy.com/featured/hub/personalization-shop?ref=hp_editors_picks_primary",
      imageSrc: "https://i.etsystatic.com/35663903/c/1986/1986/502/454/il/1a8f33/6704939235/il_600x600.6704939235_ahrj.jpg",
      videoSrc: "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/b5b9192ba2934256db70d12db782e8a4_raw_mxtzo7.mp4",
      price: "44.05",
      discountPrice: "22.02"
    },
    {
      catLink: "https://www.etsy.com/featured/hub/personalization-shop?ref=hp_editors_picks_primary",
      imageSrc: "https://i.etsystatic.com/13648456/r/il/24df69/2919347352/il_600x600.2919347352_cqw9.jpg",
      videoSrc: "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/%D0%9A%D0%B8%D1%81%D1%82%D0%BE%D1%87%D0%BA%D0%B0-%D0%B1%D1%80%D0%B5%D0%BB%D0%BE%D0%BA_htabfn.mp4",
      price: "22.00",
      discountPrice: "17.60"
    },
    {
      catLin: "https://www.etsy.com/featured/hub/personalization-shop?ref=hp_editors_picks_primary",
      imageSrc: "https://i.etsystatic.com/27206268/c/2000/2000/582/0/il/205dc5/4533854158/il_600x600.4533854158_jogz.jpg",
      videoSrc: null,
      price: "33.00",
      discountPrice: null
    },
    {
      catLink: "https://www.etsy.com/featured/hub/personalization-shop?ref=hp_editors_picks_primary",
      imageSrc: "https://i.etsystatic.com/54437790/r/il/9116ef/6347068992/il_600x600.6347068992_9poi.jpg",
      videoSrc: "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/copy_DA4D9C4F-360C-4531-BF8A-24689DD8A044_fzhfkv.mp4",
      price: "35.00",
      discountPrice: "28.00"
    },
    {
      catLink: "https://www.etsy.com/featured/hub/personalization-shop?ref=hp_editors_picks_primary",
      imageSrc: "https://i.etsystatic.com/52522964/r/il/367d95/6772775767/il_600x600.6772775767_fgac.jpg",
      videoSrc: null,
      price: "83.56",
      discountPrice: "45.96"
    },
    {
      catLink: "https://www.etsy.com/featured/hub/personalization-shop?ref=hp_editors_picks_primary",
      imageSrc: "https://i.etsystatic.com/16565759/r/il/6ab27d/3756715256/il_600x600.3756715256_nf0t.jpg",
      videoSrc: null,
      price: "23.00",
      discountPrice: "17.25"
    }
  ]
  const dealCards = [
    {
      catLink: "https://www.etsy.com/listing/1413455244/custom-name-necklace-18k-gold-plated?click_key=1d2e3794b7a3530d4ee33fa17209b4870c3f45ec%3A1413455244&click_sum=a18f60cb&ref=hp_daily_deals-1&pro=1&sts=1&bs6=1&sei=1",
      imageSrc: "https://i.etsystatic.com/34379934/c/2000/2000/0/0/il/628644/4796937795/il_600x600.4796937795_qnr6.jpg",
      title: "Custom Name Necklace, 18K Gold Plated Name Necklace, Personalized Name Necklace, Birthday Gift for Her, Mother's Day Gift, Gift for Mom",
      review: "4.9",
      price: "USD 14.23",
      oldPrice: "USD 28.46",
      discount: "50% off",
      text: "Biggest sale in 60+ days"
    },
    {
      catLink: "https://www.etsy.com/listing/4313051459/crochet-pattern-video-caribbean-sea?click_key=c495f449fc2bb8c50c87b2866d758f487cf30dab%3A4313051459&click_sum=87718ef2&ref=hp_daily_deals-2&pro=1&sts=1&bs6=1&sei=1",
      imageSrc: "https://i.etsystatic.com/15888388/r/il/517344/6899552484/il_600x600.6899552484_mp7r.jpg",
      title: "CROCHET PATTERN & VIDEO/ Caribbean Sea Sweater, Crochet Lace Sweater Pattern, Lace Crochet Top, Gifting, Sizes Xs-5X, Womens, Pdf",
      review: "4.9",
      price: "USD 7.35",
      oldPrice: "USD 16.35",
      discount: "55% off",
      text: "Biggest sale in 60+ days"
    },
    {
      catLink: "https://www.etsy.com/listing/1775056841/personalized-vegan-leather-luggage-tag?click_key=0bd42fceb79b85d61b6ea18f2e42005f45abb2bb%3A1775056841&click_sum=4275e511&ref=hp_daily_deals-3&pro=1&sts=1",
      imageSrc: "https://i.etsystatic.com/10005660/r/il/bf9f0a/6534362226/il_600x600.6534362226_dzbe.jpg",
      title: "Personalized Vegan Leather Luggage Tag, Engraved Monogram Luggage Tag, Custom Luggage Tag, Suitcase Tag, Wedding Party Favors, Travel Gifts",
      review: "4.9",
      price: "USD 4.85",
      oldPrice: "USD 9.70",
      discount: "50% off",
      text: ""
    },
    {
      catLink: "https://www.etsy.com/listing/1798055839/personalized-embroidered-unisex-cap-with?click_key=e78371221c7a635cc0fec757ae843421e9c761a4%3A1798055839&click_sum=40f4fb01&ref=hp_daily_deals-4&pro=1&sts=1&bs6=1",
      imageSrc: "https://i.etsystatic.com/51893623/r/il/9a14f7/6289805354/il_600x600.6289805354_lali.jpg",
      title: "Personalized Embroidered Unisex Cap With Your Text For BestMan Gift,Custom Hand Embroidered Monogram Caps Gift For Her,Business Party Gift",
      review: "4.7",
      price: "USD 10.04",
      oldPrice: "USD 16.74",
      discount: "40% off",
      text: "Biggest sale in 60+ days"
    },
    {
      catLink: "https://www.etsy.com/listing/1758685873/personalized-baby-shower-gift-basket?click_key=ef6764831d06cc2a490403d9e964c700b7396f87%3A1758685873&click_sum=2c07a156&ref=hp_daily_deals-5&pro=1&sts=1",
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