import HeadingComponent from "./components/heading";
import HomePage from "./pages/home";

export default function App() {
  return (
    <main className="mx-auto max-w-[64rem]">
      <HeadingComponent />
      <HomePage />
    </main>
  );
}
