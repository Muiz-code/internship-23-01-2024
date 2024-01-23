import { SpinnerCircle } from "./spinner";

const Loading = ({ height = '85svh' }) => {
  return (
    <div style={{ height }} className='w-full flex items-center justify-center'>
      <SpinnerCircle size="md" bg="#f2f2f2" />
    </div>
  );
};

export default Loading;
