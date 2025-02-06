import { Card } from "@/components/ui/card";

export function CardSection() {
  return (
    <section className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">My Cards</h3>
        <button className="text-primary hover:underline">See All</button>
      </div>

      <Card className="bg-primary text-primary-foreground p-6 relative overflow-hidden">
        <div className="flex flex-col gap-4">
          <div className="space-y-1">
            <p className="text-sm opacity-80">Balance</p>
            <p className="text-2xl font-bold">$5,756</p>
          </div>

          <div className="flex justify-between items-end mt-8">
            <div className="space-y-1">
              <p className="text-xs opacity-80">CARD HOLDER</p>
              <p className="font-medium">Eddy Cusuma</p>
            </div>

            <div className="space-y-1">
              <p className="text-xs opacity-80">VALID THRU</p>
              <p className="font-medium">12/22</p>
            </div>
          </div>

          <p className="text-lg mt-2">3778 **** **** 1234</p>
        </div>
        
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/d542d911806ebd654d98889c76e03f40a31658650e8655f961024264eece94d3?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/d542d911806ebd654d98889c76e03f40a31658650e8655f961024264eece94d3?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/d542d911806ebd654d98889c76e03f40a31658650e8655f961024264eece94d3?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/d542d911806ebd654d98889c76e03f40a31658650e8655f961024264eece94d3?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/d542d911806ebd654d98889c76e03f40a31658650e8655f961024264eece94d3?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/d542d911806ebd654d98889c76e03f40a31658650e8655f961024264eece94d3?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/d542d911806ebd654d98889c76e03f40a31658650e8655f961024264eece94d3?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/d542d911806ebd654d98889c76e03f40a31658650e8655f961024264eece94d3?placeholderIfAbsent=true"
          alt=""
          className="absolute right-6 top-6 w-12 h-12"
        />
      </Card>
    </section>
  );
}
