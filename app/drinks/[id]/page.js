import Link from "next/link";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
import drinkImg from "./img1.jpg";
import Image from "next/image";
console.log(drinkImg);

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch drink...");
  }
  // const data = await res.json();
  // return data;
  return res.json();
};

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  // console.log(params);

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      {/* local images
      <Image src={drinkImg} className="w-48 h-48 rounded" alt="" /> */}
      {/* Remote Images 
      1. Since Next.js does not have access to remote files during the build process, you'll need to provide the width, height and optional blurDataURL props manually.
      2. The width and height attributes are used to infer the correct aspect ratio of image and avoid layout shift from the image loading in. The width and height do not determine the rendered size of the image file.
      3. To safely allow optimizing images, define a list of supported URL patterns in next.config.js. Be as specific as possible to prevent malicious usage.
      4. restart dev server
      5. priority property to prioritize the image for loading
      */}
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 rounded shadow-lg mb-4"
        priority
        alt=""
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};
export default SingleDrinkPage;
// The nmae of the folder which is this file is inside is [id](the name is important and must have the square bracket.)
