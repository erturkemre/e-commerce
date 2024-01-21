import React, { useEffect  } from "react";
import "tailwindcss/tailwind.css";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Spinner,
  Toast,
} from "reactstrap";
import { LayoutGridIcon, List } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAction } from "../store/actions/productAction";
import { FETCH_STATES } from "../store/reducers/productReducer";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const ProductListCard = () => {
  const [limit, setLimit] = useState(25);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [sortOption, setSortOption] = useState("");
  const [filter, setFilter] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const { gender, category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.productList);
  const fetchState = useSelector((state) => state.productReducer.fetchState);
  const totalProductCount = useSelector(
    (state) => state.productReducer.totalProductCount
  );
  const categories = useSelector((state) => state.globalReducer.categories);

  const handleOptionClick = (event) => {
    const selectedSortOption = event.target.value;
    if (selectedSortOption !== "default") {
      setSortOption(selectedSortOption);
      setOffset(0);
      dispatch(fetchProductsAction("", filter, selectedSortOption));
    }
  };
  const changeFilter = (event) => {
    const value = event.target.value;
    setFilter(value);
    setOffset(0);
    dispatch(fetchProductsAction("", value, sortOption));
  };
  const buttoClickReset = () => {
    setFilter("");
    setSortOption("");
    setOffset(0);
    dispatch(fetchProductsAction("", "", ""));
  };

  const fetchMoreData = () => {
    if (products.length >= totalProductCount) {
      setHasMore(false);
      return;
    }
    setOffset(offset + 25);
  };

  useEffect(() => {
    products.length === 0 &&
      dispatch(fetchProductsAction(categoryId, filter, sortOption, "", ""));
  }, []);

  useEffect(() => {
    const findCategoryId = categories.find(
      (item) => item.code === gender?.slice(0, 1) + ":" + category
    );
    setCategoryId(findCategoryId?.id);
    console.log(categoryId);
  }, [gender, category, categories]);

  useEffect(() => {
    console.log(categoryId);

    dispatch(
      fetchProductsAction(categoryId, filter, sortOption, limit, offset)
    );
  }, [categoryId, filter, sortOption, limit, offset]);

  return (
    <div className="flex flex-col justify-evenly py-5 bg-white">
      <div className="flex justify-around items-center mx-6">
        <div className="text-[#737373]">
          Showing all results:{totalProductCount}/{[offset + 25]}
        </div>
        <div className="flex items-center">
          <p>Views:</p>
          <button className="border p-3 mx-1 rounded-md text-[#252B42]">
            <LayoutGridIcon size={16} />
          </button>
          <button className="border p-3 mx-1 rounded-md text-[#252B42]">
            <List size={16} />
          </button>
        </div>
        <div className="flex gap-[15px] justify-center items-center">
          <p className="font-bold text-second-text text-sm">search:</p>
          <input
            type="text"
            name="filter"
            className="border border-[#DADADA] rounded-md bg-[#F5F5F5] text-black p-2 sm:w-72"
            placeholder="Search"
            onChange={changeFilter}
            value={filter}
          ></input>
        </div>
        <div className="flex flex-row gap-5">
          <select
            className="p-4 rounded-md border shadow-md border-[#DADADA] text-[#252B42]"
            onChange={handleOptionClick}
            value={sortOption}
          >
            <option
              key="default"
              value="default"
              className=" text-lg text-[#252B42]"
              selected
            >
              Choose a sort option
            </option>
            <option
              key="rating:desc"
              value="rating:desc"
              className=" text-lg text-[#252B42]"
            >
              Worst Rated
            </option>
            <option
              key="rating:asc"
              value="rating:asc"
              className=" text-lg text-[#252B42]"
            >
              Best Rated
            </option>
            <option
              key="price:asc"
              value="price:asc"
              className=" text-lg text-[#252B42]"
            >
              Increasing by Price
            </option>
            <option
              key="price:desc"
              value="price:desc"
              className=" text-lg text-[#252B42]"
            >
              decreasing by price
            </option>
          </select>
          <button
            className="text-white bg-[#23A6F0] rounded-md px-5 py-2"
            onClick={buttoClickReset}
          >
            Reset Filter
          </button>
        </div>
      </div>
      {fetchState === FETCH_STATES.fetching && ( //spinner component
        <Spinner color="primary" className="mx-auto" />
      )}
      {fetchState === FETCH_STATES.fetched && hasMore && (
        <div>
          <InfiniteScroll
            dataLength={products.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>You haven seen all.</b>
              </p>
            }
          >
            <div className="flex flex-row flex-wrap mx-48 py-5">
              {products?.map((product, index) => (
                <Card
                  className="mb-10 mx-[1%] hover:shadow-xl hover:scale-110"
                  style={{
                    width: "15rem",
                  }}
                >
                  <NavLink
                    to={`/shopping/${product.id}/${product.name}`}
                  >
                    <img
                      className="w-15"
                      alt={product.id}
                      src={product.images[0].url}
                    />
                    <CardBody className="flex flex-col text-center">
                      <CardTitle
                        tag="h5"
                        className="text-lg font-bold text-[#252B42] "
                      >
                        {product.name}
                      </CardTitle>
                      <CardSubtitle
                        className="mb-2 text-sm text-[#737373]"
                        tag="h6"
                      >
                        {product.description}
                      </CardSubtitle>
                      <CardText className="text-[#23856D] font-bold ">{`${product.price}₺`}</CardText>
                    </CardBody>
                  </NavLink>

                  <ToastContainer />
                </Card>
              ))}
            </div>
          </InfiniteScroll>

          {/* <div className="flex flex-row justify-center items-center rounded-lg p-2">
              <button className="border rounded-lg bg-gray-400 text-white px-4 py-2 mx-1">
                <Link to="/shopping">First</Link>
              </button>

              <button className="border rounded-lg bg-white text-[#23A6F0] px-4 py-2 mx-1">
                <Link to="/shopping/page1">1</Link>
              </button>
              <button className="border rounded-lg bg-white text-[#23A6F0] px-4 py-2 mx-1">
                <Link to="/shopping/page2">2</Link>
              </button>
              <button className="border rounded-lg bg-white text-[#23A6F0] px-4 py-2 mx-1">
                <Link to="/shopping/page3">3</Link>
              </button>
              <button className="border rounded-lg bg-white text-[#23A6F0] px-4 py-2 mx-1">
                <Link to="/shopping">Next</Link>
              </button>
            </div> */}
        </div>
      )}
    </div>
  );
};
export default ProductListCard;
