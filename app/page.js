import logo from "@/public/logo.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white px-28 py-10 rounded-2xl shadow-md">
        <div><Image src={logo} className="m-auto" alt="buzkar"  width={200} height={88}/></div>
        <form class="mt-6" action="#" method="POST">
          <div>
            <label class="block text-gray-700">Email Address</label>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Email Address"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autofocus
              autocomplete
              required
            />
          </div>

          <div class="mt-4">
            <label class="block text-gray-700">Password</label>
            <input
              type="password"
              name=""
              id=""
              placeholder="Enter Password"
              minlength="6"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
