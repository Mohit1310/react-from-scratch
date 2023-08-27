import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  //* Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // console.log(header);

  //* Check if logo is loaded
  const logo = header.getAllByTestId("logo");
  // console.log(logo[0]);

  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Online status should be green on rendering headre", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //* Check online
  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.innerHTML).toBe("✅");
});

test("Cart should have 0 items on rendering", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //* Check Cart 0-items
  const cartStatus = header.getByTestId("cart");
  expect(cartStatus.innerHTML).toBe("Cart 0-items");
});
