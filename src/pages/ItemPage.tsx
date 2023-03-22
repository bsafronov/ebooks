import { useParams } from "react-router-dom";
import EmptyImageLogo from "../components/EmptyImageLogo";
import Error from "../components/Error";
import Spinner from "../components/Spinner";
import { useGetOneBookQuery } from "../store";

const ItemPage = () => {
  const { id } = useParams();
  const { data, isFetching, isError } = useGetOneBookQuery(id as string);
  console.log(data);

  const image = getImage();

  function getImage() {
    const images = data?.volumeInfo.imageLinks;

    if (images?.large) return images.large;
    if (images?.thumbnail) return images.thumbnail;
    return null;
  }

  if (isFetching) {
    return <Spinner />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <div className="flex py-4 md:py-0 flex-col md:items-start md:flex-row">
        <div className="bg-slate-100 md:w-1/2 py-8 flex items-center">
          {image ? (
            <img
              src={image}
              className="mx-auto w-1/2 bg-slate-200 aspect-[3/4] shadow-2xl"
            />
          ) : (
            <div className="relative mx-auto w-1/2 bg-slate-200 aspect-[3/4] shadow-2xl">
              <EmptyImageLogo />
            </div>
          )}
        </div>
        <div className="py-4 md:p-8 md:w-1/2">
          {data?.volumeInfo.categories && (
            <a className="text-slate-500 block mb-6 text-sm font-semibold">
              {data?.volumeInfo.categories.join(", ")}
            </a>
          )}

          {data?.volumeInfo.title && (
            <h3 className="mb-4 font-bold text-lg">{data.volumeInfo.title}</h3>
          )}
          {data?.volumeInfo.authors && (
            <a className="underline text-slate-500 text-sm block mb-4">
              {data?.volumeInfo.authors.join(", ")}
            </a>
          )}
        </div>
      </div>
      {data?.volumeInfo.description && (
        <div className="border border-slate-100 p-4">
          <p className="text-sm font-semibold">{data.volumeInfo.description}</p>
        </div>
      )}
    </>
  );
};

export default ItemPage;
