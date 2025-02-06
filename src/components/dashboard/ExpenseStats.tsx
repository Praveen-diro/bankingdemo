import { Card } from "@/components/ui/card";

export function ExpenseStats() {
  return (
    <section className="p-6">
      <h3 className="text-xl font-semibold mb-4">Expense Statistics</h3>
      <Card className="p-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/59716404f4017ac52a7dbac87893da23a82ba736e0240e2c1f8835069b51789d"
          alt="Expense statistics"
          className="w-full"
        />
      </Card>
    </section>
  );
}
