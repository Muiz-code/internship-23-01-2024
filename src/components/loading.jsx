import { SpinnerCircle } from "../components/spinner";

const Loading = ({ height = "85svh" }) => {
  return (
    <div style={{ height }} className="w-full flex items-center justify-center">
      <SpinnerCircle size="md" bg="#f2f2f2" color="#1C4ED8" />
    </div>
  );
};

export default Loading;
