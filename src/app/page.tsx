import HeadingComponent from "./components/heading";
import HomePage from "./pages/home";
import TimelinePage from "./pages/timeline";

export default function App() {
  return (
    <main>
      <div className="max-w-[64rem] mx-auto">
        <HeadingComponent />
        <HomePage />
      </div>
      <TimelinePage />
    </main>
  );
}
