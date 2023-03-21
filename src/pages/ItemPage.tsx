const ItemPage = () => {
  return (
    <div className="flex py-4 md:py-0 flex-col md:flex-row">
      <div className="bg-slate-100 md:w-1/2 py-8 flex items-center">
        <div className="mx-auto w-1/2 bg-slate-200 aspect-[3/4] shadow-2xl"></div>
      </div>
      <div className="py-4 md:p-8 md:w-1/2">
        <a className="text-slate-500 block mb-6 text-sm font-semibold">
          Art / General
        </a>
        <h3 className="mb-4 font-bold text-lg">
          J.S. Bach The Goldberg Variations in Open Score
        </h3>
        <a className="underline text-slate-500 text-sm block mb-4">
          Kendall Durellle Briggs
        </a>
        <div className="border border-slate-100 p-4">
          <p className="text-sm font-semibold">
            An open score edition of Bach's Goldberg Variations Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Quaerat autem explicabo
            earum quam ut, eum et sapiente consectetur ipsa. Fuga quas sint
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
