import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: `John Morgan`,
    img: `/people/John_Morgan.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Jean Anderson`,
    img: `/people/Jean_Anderson.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Antoine Fountaine`,
    img: `/people/Antoine_Fountaine.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Smith Louie`,
    img: `/people/Smith_Louie.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Mia Williams`,
    img: `/people/Mia_Williams.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="xl:w-3/4 w-4/5 m-auto mt-20">
      <Slider {...settings}>
        {data.map((person) => (
          <div
            className="bg-white h-[450px] text-black rounded-xl"
            key={person.name}
          >
            <div className="h-56 rounded-t-xl bg-indigo-400 flex justify-center items-center ">
              <img
                src={person.img}
                alt={person.name}
                className="h-44 w-44 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <p className="text-xl font-semibold">{person.name}</p>
              <p>{person.description}</p>
              <button className="bg-indigo-400 text-white text-lg px-6 py-1 rounded-xl">
                Read more
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
