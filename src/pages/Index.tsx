import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { CardSection } from "@/components/dashboard/CardSection";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { TransactionList } from "@/components/dashboard/TransactionList";
import { ExpenseStats } from "@/components/dashboard/ExpenseStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="ml-64">
        <Header />
        
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <CardSection />
            <ActivityChart />
            <div className="grid grid-cols-2 gap-6 px-6">
              <div>
                <h4 className="text-lg font-medium mb-2">Quick Transfer</h4>
                <img src="https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/d6bee2f7dccdcd521b9721a31111f9f74e1fe6f22af7caf950bb73fe4d2f293c?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/d6bee2f7dccdcd521b9721a31111f9f74e1fe6f22af7caf950bb73fe4d2f293c?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/d6bee2f7dccdcd521b9721a31111f9f74e1fe6f22af7caf950bb73fe4d2f293c?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/d6bee2f7dccdcd521b9721a31111f9f74e1fe6f22af7caf950bb73fe4d2f293c?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/d6bee2f7dccdcd521b9721a31111f9f74e1fe6f22af7caf950bb73fe4d2f293c?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/d6bee2f7dccdcd521b9721a31111f9f74e1fe6f22af7caf950bb73fe4d2f293c?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/d6bee2f7dccdcd521b9721a31111f9f74e1fe6f22af7caf950bb73fe4d2f293c?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/d6bee2f7dccdcd521b9721a31111f9f74e1fe6f22af7caf950bb73fe4d2f293c?placeholderIfAbsent=true" alt="Quick transfer" className="w-full" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Balance History</h4>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b9e571ca30ed4750911ec1fc8e4b5c3e/8cb6ce876c0e0c1a026bee631de38b4bfbd39aff74232b04057c405079bf3744"
                  alt="Balance history"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          
          <div className="col-span-4">
            <TransactionList />
            <ExpenseStats />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
