import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Grid = () => {
  return (
    <section id="services">
      <h1 className='text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8'>
      What we do!
        </h1>
      <BentoGrid className="w-full pb-10 md:pb-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={i ===1 || i=== 2? "md:col-span-2" : ""}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
            link={item.link}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;