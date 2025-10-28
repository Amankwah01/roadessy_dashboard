import { MapPinCheck } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to Roadessy Dashboard</h1>
      <p className="text-lg text-center mb-8">
        This is the main page of your Roadessy Dashboard application.
      </p>
      <MapPinCheck size={100} />
    </div>
  );
}
