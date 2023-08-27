import "@testing-library/jest-dom";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../../utils/store";
import Body from "../Body";
import { render, waitFor, fireEvent, screen } from "@testing-library/react";
import { RESTAURANT_DATA } from "../../mocks/data";

//? We use this fetch because our jest don't recongnize fetch as it is a browser function and jest not running on browser i.e why we create below code for fetch to be accepted using testing
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer should load on homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  // console.log(body);
  const shimmer = body.getByTestId("shimmer");

  expect(shimmer.children.length).toBe(2);

  // console.log(shimmer);
});

test("Restaurant should load on homepage", async () => {
  const restList = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(restList.getByTestId("search-btn")))

  const resList = restList.getByTestId("restaurantList");
  expect(resList.children.length).toBe(20);
  // console.log(resList);
});

test("Search for string(food) on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));
  // await waitFor(() => {
  //   expect(body.queryByTestId("search-btn")).toBeInTheDocument();
  // });

  const input = body.getByTestId("search-input");

  fireEvent.change(input, {
    target: {
      value: "pizza",
    },
  });

  const search = body.getByTestId("search-btn");
  // Example using queryByTestId
  // const search-btn = screen.queryByTestId("search-btn");
  // expect(search-btn).toBeInTheDocument();

  fireEvent.click(search);
  const resList = body.getByTestId("restaurantList");

  expect(resList.children.length).toBe(4);
});
