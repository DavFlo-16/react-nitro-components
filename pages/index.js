import Wrapper from "../lib/styleguide/wrapper";
import HeroCarousel from "../fusion/HeroCarousel/HeroCarousel";

const testHeroCarousel = <HeroCarousel />;

export default () => {
  return <Wrapper children={testHeroCarousel} />;
};
