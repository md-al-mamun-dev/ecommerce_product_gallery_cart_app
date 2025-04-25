
import WaitingPopup from "./WaitingPopup";


export const metadata = {
  title: "Checkout",
  description: "Checkout your product",
};

export default function Layout({ children }) {
  return (
      < >
          {children}
          <WaitingPopup/>
      </>

  );
}
