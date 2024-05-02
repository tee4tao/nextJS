const SinglrDrinkPage = ({ params }) => {
  console.log(params);

  return (
    <div>
      <h1 className="text-7xl">{params.id}</h1>
    </div>
  );
};
export default SinglrDrinkPage;
// The nmae of the folder which is this file is inside is [id](the name is important and must have the square bracket.)
