import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: "https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/7c389f5d9f1ee0b7d437e24057bbc663a94ea2f15ec7fde0f4864015eeda677d",
    active: true
  },
  {
    title: "Transactions",
    icon: "https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/4740b747b9a95a487146542d7f7ad631aa710c9dbbfb39251cec533c4f0aa7f8"
  },
  {
    title: "Accounts",
    icon: "https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/fe68b5bfdc4cb5765d2f4d6f5bba84978db60968d751ca0d096014d897bc95d2"
  },
  {
    title: "Investments",
    icon: "https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/d63e61ac11b80869544195052a6b1e049031a39457b237c222c360143dcdad4c"
  },
  {
    title: "Credit Cards",
    icon: "https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/8e168919da955e82be911719cb768a0d092af2ff9436bbf197dbb3ab56908da1"
  },
  {
    title: "Loans",
    icon: "https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/8577e3e66570cbab7908f94f8de8ab768cf12c1018cbb74ec7431828af1ee401"
  },
  {
    title: "Services",
    icon: "https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/ee4f8d59af4e763ace12660c7dd2c395dc290e3f53ceafd2bb4ff3bf838d3fed"
  },
  {
    title: "My Privileges",
    icon: "https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/e3cb40d41cfb4dfecdb5b3c80f77a741cb7d8fb465ac1b4c9a4ba45e358cb8ad"
  },
  {
    title: "Setting",
    icon: "https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/270efbcbbe3fe5831e90aceca323438437e2721b9f83d90e67a3dcdefe61175f"
  }
];

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-sidebar fixed left-0 top-0 border-r border-sidebar-border">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <img src="https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/49a5062187afba750e0550ccc0f57a7bc0d9606e37d2a385b10a30b081d60946?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/49a5062187afba750e0550ccc0f57a7bc0d9606e37d2a385b10a30b081d60946?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/49a5062187afba750e0550ccc0f57a7bc0d9606e37d2a385b10a30b081d60946?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/49a5062187afba750e0550ccc0f57a7bc0d9606e37d2a385b10a30b081d60946?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/49a5062187afba750e0550ccc0f57a7bc0d9606e37d2a385b10a30b081d60946?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/49a5062187afba750e0550ccc0f57a7bc0d9606e37d2a385b10a30b081d60946?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/49a5062187afba750e0550ccc0f57a7bc0d9606e37d2a385b10a30b081d60946?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/49a5062187afba750e0550ccc0f57a7bc0d9606e37d2a385b10a30b081d60946?placeholderIfAbsent=true" alt="" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-sidebar-foreground">BankDash.</h1>
        </div>

        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link
                  to="/"
                  className={cn(
                    "flex items-center gap-3 px-4 py-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent",
                    item.active && "bg-sidebar-accent"
                  )}
                >
                  <img src={item.icon} alt="" className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
