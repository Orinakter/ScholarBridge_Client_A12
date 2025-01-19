import Lottie from "lottie-react";
import loading from "../assets/Lotties/loading.json";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Lottie className="w-40" animationData={loading} />
      </div>
    </div>
  );
};

export default Loading;
