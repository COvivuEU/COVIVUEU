
import { useEffect, useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSimPackages } from '@/lib/simApi';

interface SimPackage {
  name: string;
  description: string;
  price: number;
  duration: string;
  data: string;
}

const SimCardsPage = () => {
  const [simPackages, setSimPackages] = useState<SimPackage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSimPackages = async () => {
      try {
        const packages = await getSimPackages('france');
        setSimPackages(packages);
      } catch (error) {
        console.error('Error fetching SIM packages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSimPackages();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">SIM Cards for France</h1>
          {loading ? (
            <div>Loading packages...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {simPackages.map((pkg, index) => (
                <div key={index} className="border rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-teal-600">{pkg.price}€</span>
                    <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SimCardsPage;
