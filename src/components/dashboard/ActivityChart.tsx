export function ActivityChart() {
  return (
    <section className="p-6">
      <h3 className="text-xl font-semibold mb-4">Weekly Activity</h3>
      <div className="aspect-[2/1] bg-card rounded-lg p-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/ce5820d4f0123a8780537963b7e7bd7ee6e15fea1eb4dadc5ad59c9b974162a1"
          alt="Weekly activity chart"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
