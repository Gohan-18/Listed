import Image from "next/image";
import InputForm from "../components/inputform";
import { getServerSession } from "next-auth";
// import { useRouter } from "next/navigation";

export default function Home() {

  // const session = getServerSession();
  // const router = useRouter()

  // if(session === "loading") {
  //   return <>Loading...</>
  // }

  // if (session) {
  //   router.push("/profile");
  //   return null;
  // }

  return (
    <main className="flex min-h-screen items-center justify-center flex-col lg:flex-row">
      <div className="bg-gray-900 w-full lg:w-2/5 h-screen flex items-center justify-center px-5 pb-14 ">
        <h1 className="text-2xl text-slate-50 font-bold">Board.</h1>
      </div>
      <div className="bg-gray-200 w-full lg:w-3/5 h-screen flex items-center justify-center px-5 ">
        <InputForm />
      </div>
    </main>
  );
}
