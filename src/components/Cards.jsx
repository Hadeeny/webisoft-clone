import users from "../assets/users.svg";
import products from "../assets/product.svg";
import cloud from "../assets/cloud.svg";
const Cards = () => {
  const cardInfo = [
    {
      image: products,
      title: "Product Development",
      text: `Full suite of on-demand design and development 
      services for your digital products, all under one roof.`,
    },
    {
      image: cloud,
      title: "IT services",
      text: `Traditional and non-traditional IT service from 
      Email management to Cloud Computing.
      `,
    },
    {
      image: users,
      title: "Recruitment",
      text: `On demand staff augmentation or quick 
      recruitment of new employees.
      `,
    },
  ];
  return (
    <ul className="w-full  my-[7rem] flex gap-12 flex-wrap">
      {cardInfo.map((card, i) => (
        <li
          key={i}
          className="relative px-6 rounded-3xl 
           
          cursor-pointer justify-between group min-w-[300px] flex flex-col 
          py-6 flexer"
        >
          {/* group hover:bg-black */}
          <div className="w-full left-0 z-[3] h-0 group-hover:h-full duration-300 bg-black rounded-3xl absolute bottom-0"></div>
          <div className="mx-auto z-[10] my-12 w-[8rem]">
            <img src={card.image} />
          </div>
          <div className="flex flex-col z-[10] justify-between ">
            <h3 className="text-xl group-hover:text-white">{card.title}</h3>
            <p className="my-6 text-lg group-hover:text-white">{card.text}</p>
            <div>
              <a className="text-lg group-hover:text-white">Learn more</a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Cards;
