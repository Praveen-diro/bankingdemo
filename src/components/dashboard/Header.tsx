import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="flex items-center justify-between p-6 border-b border-border">
      <h2 className="text-2xl font-semibold">Overview</h2>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search for something"
            className="w-64 pl-10"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/e09b7155690a915260e60ba2f0be83da8d099582e84b4faa6376d4892704bf6a"
            alt=""
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/707de28c87ebc01c67ccb6153937d880023e06962382f04d8b54a417baace568"
            alt="Notifications"
            className="w-6 h-6 cursor-pointer"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/d07a3b2f1de1b6c8b419c643c5a9c885dc86c9a7e9051bea6b8e83f3b5b4953a"
            alt="Settings"
            className="w-6 h-6 cursor-pointer"
          />
          <img src="https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/e6baee34b5e31ec7c7e04dd94866026bf3a02734c1999c0b95d289a193f216f2?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/e6baee34b5e31ec7c7e04dd94866026bf3a02734c1999c0b95d289a193f216f2?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/e6baee34b5e31ec7c7e04dd94866026bf3a02734c1999c0b95d289a193f216f2?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/e6baee34b5e31ec7c7e04dd94866026bf3a02734c1999c0b95d289a193f216f2?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/e6baee34b5e31ec7c7e04dd94866026bf3a02734c1999c0b95d289a193f216f2?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/e6baee34b5e31ec7c7e04dd94866026bf3a02734c1999c0b95d289a193f216f2?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/e6baee34b5e31ec7c7e04dd94866026bf3a02734c1999c0b95d289a193f216f2?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/e6baee34b5e31ec7c7e04dd94866026bf3a02734c1999c0b95d289a193f216f2?placeholderIfAbsent=true" alt="Profile" className="w-10 h-10 rounded-full" />
        </div>
      </div>
    </header>
  );
}
