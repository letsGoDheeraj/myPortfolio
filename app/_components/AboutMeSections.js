import Image from "next/image";

// Add your personal story blocks here.
// Save matching images in public/about/ and set the image filename below.
const aboutMeData = [
  {
    id: 1,
    title: "Cat Lover",
    text: "I love cats and I have two cats, Leo and Ash. They keep my days playful, calm, and full of tiny surprises. Spending time with them helps me reset after coding and come back with a fresh mind.",
    image: "cat-lover.jpg", // public/about/cat-lover.jpg
  },
  {
    id: 2,
    title: "Builder Mindset",
    text: "I enjoy turning ideas into products, especially when I can blend clean engineering with thoughtful user experience. I like experimenting, learning quickly, and polishing details until things feel right.",
    image: "builder-mindset.jpg", // public/about/builder-mindset.jpg
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
