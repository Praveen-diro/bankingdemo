import { Card } from "@/components/ui/card";

export function TransactionList() {
  return (
    <section className="p-6">
      <h3 className="text-xl font-semibold mb-4">Recent Transaction</h3>
      <Card className="p-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/e9133e01566beaacfd6aeea4e5cfa9f13f7e48df86fe5400ed338ac928c28293"
          alt="Transaction list"
          className="w-full"
        />
      </Card>
    </section>
  );
}
