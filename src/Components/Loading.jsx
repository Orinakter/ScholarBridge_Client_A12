import Lottie from "lottie-react";
import loading from "../assets/Lotties/loading.json";

const Loading = () => {
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center">
        <Lottie className="w-40" animationData={loading} />
      </div>
    </div>
  );
};

export default Loading;
