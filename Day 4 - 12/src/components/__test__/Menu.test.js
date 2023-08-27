import "@testing-library/jest-dom";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../../utils/store";
import Header from "../Header";
import Body from "../Body";
import RestaurantMenu from "../RestaurantMenu";
import { render, waitFor, fireEvent, act } from "@testing-library/react";
import { MENU_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Add Items to Cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <Body />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menu")));

  const addBtn = body.getAllByTestId("addBtn");

  await act(async () => {
    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);
  });

  const cart = body.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart 2-items");
});
