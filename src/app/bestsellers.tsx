// pages/bestsellers.tsx
import Image from 'next/image';

interface Bestseller {
  id: number;
  name: string;
  price: string;
}

const Bestsellers: React.FC = () => {
  const bestsellers: Bestseller[] = [
    {
      id: 1,
      name: 'Spiral Notebook',
      price: '$7.59',
    },
    {
      id: 2,
      name: 'Complete Note-Taking Kit',
      price: '$9.99',
    },
    {
      id: 3,
      name: 'Weekly Planner Notebook',
      price: '$10.49',
    },
    {
      id: 4,
      name: 'Complete Writing Set',
      price: '$11.99',
    },
  ];

  return (
    <div className='px-4 md:px-8'>
      <h1 className="text-2xl font-bold mb-8">Bestsellers</h1>
      <div className="flex flex-wrap justify-center items-center lg:grid-cols-3 grid-cols-4 gap-8">
        {bestsellers.map((item) => (
          <div key={item.id} className="border rounded p-4">
            <Image src={`/bestseller-${item.id}.jpg`} alt={item.name} width={200} height={200}  />
            <h3 className="text-lg font-medium mt-4">{item.name}</h3>
            <p className="text-gray-500 mt-2">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestsellers;