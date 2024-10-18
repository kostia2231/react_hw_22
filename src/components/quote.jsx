import { useDispatch, useSelector } from "react-redux";
import { getQuote } from "../features/quote/quoteSlice";
import { useEffect } from "react";
import Button from "./button";

const Quote = () => {
  const dispatch = useDispatch();
  const { quote, author, status, error } = useSelector((state) => state.quote);

  console.log(author);
  useEffect(() => {
    dispatch(getQuote());
  }, [dispatch]);

  const handleQuote = () => {
    dispatch(getQuote());
  };

  if (status === "loading") {
    return <p className="m-4">loading ...</p>;
  }
  if (status === "failed") {
    return <p>ERROR: {error}</p>;
  }

  return (
    <div className="grid gap-4 m-4">
      <div className="grid w-fit">
        <p>{quote}</p>
        <p className="font-black ml-auto">{author}</p>
      </div>
      <div>
        <Button onClick={handleQuote} />
      </div>
    </div>
  );
};

export default Quote;
