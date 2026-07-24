import Image from "next/image";

// Add your personal story blocks here.
// Save matching images in public/about/ and set the image filename below.
const aboutMeData = [
  {
    id: 1,
    title: "Proud Gay Man & LGBTQ+ Ally",
    text: "I'm a proud gay man who believes diversity, inclusion, and authenticity make both teams and communities stronger. I strive to foster environments where everyone feels respected, valued, and empowered to be themselves, both in technology and beyond.",
    image: "prideFlag.webp", // add image if desired
  },
  {
    id: 2,
    title: "Cat Lover",
    text: "I'm a proud cat dad to Leo and Ash—the two curious faces you'll spot in the photo. They bring plenty of joy, calm, and the occasional chaos into my life. Spending time with them is my favorite way to unwind after a long day of coding and come back with a fresh perspective.",
    image: "pets.jpeg", // public/about/cat-lover.jpg
  },
  {
    id: 3,
    title: "Gardening Enthusiast",
    text: "Beyond software, I enjoy gardening and growing exotic flowers. Watching plants grow from seed to bloom is both relaxing and rewarding. Much like building software, gardening requires patience, attention to detail, and continuous care. The flowers you see here are ones I've grown myself.",
    image: "flowers.jpeg", // public/about/gardening.jpg
  },
  {
    id: 4,
    title: "Music Lover",
    text: "Music has always been a big part of my life—there's rarely a day that goes by without it. My favorites include Mariah Carey, Ariana Grande, Taylor Swift, Olivia Rodrigo, and many others. Their music has helped me navigate challenges, build confidence, and find a sense of belonging, while bringing joy to my everyday life.",
    image: "albums.jpeg", // add image if desired
  },
  {
    id: 5,
    title: "Modelling",
    text: "I'm passionate about modelling and enjoy expressing myself through fashion and visual storytelling. Modelling allows me to explore creativity beyond tech, collaborate with talented photographers and designers, and embrace my authenticity. The pictures you see here are me showcasing different styles and perspectives. The photos featured here showcase some of my favorite shoots, and you can explore more on my Instagram that is linked below.",
    image: "modelling.jpeg", // add image if desired
  },
];

export default function AboutMeSections() {
  if (!aboutMeData.length) return null;

  return (
    <div className="space-y-12 lg:space-y-16 mt-16">
      {aboutMeData.map((item, index) => (
        <article
          key={item.id}
          className={`flex flex-col lg:items-center lg:gap-12 rounded-2xl bg-white border border-gray-100 shadow-[0_20px_60px_0_rgba(43,56,76,0.08)] p-6 lg:p-8 ${
            index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div className="lg:w-1/2">
            <h3 className="text-gray-900 font-semibold text-2xl lg:text-3xl mb-4">
              {item.title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">{item.text}</p>
          </div>

          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
              {item.image ? (
                <Image
                  src={`/about/${item.image}`}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                  Add image in public/about/
                </div>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
