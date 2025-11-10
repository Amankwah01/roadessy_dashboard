import { Button } from "@/components/ui/button";
import { MapPinCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to Roadessy Dashboard</h1>
      <p className="text-lg text-center mb-8">
        This is the main page of your Roadessy Dashboard application.
      </p>
      <MapPinCheck size={100} />
      <Button className="mt-8">
        <Link className="animate-ping" href="/projects">
          View Projects
        </Link>
      </Button>
    </div>
  );
}
