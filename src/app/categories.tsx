// pages/categories.tsx
import Image from 'next/image';

const Categories: React.FC = () => {
  return (
    <div className='px-4 md:px-8 py-6 '>
      <h1 className="text-2xl font-bold mb-8">Categories</h1>
      <div className=" flex flex-wrap justify-center items-center lg:grid-cols-3 gap-8">
        <div>
          <Image src="/placeholder.avif" alt="Memoir Collection" width={400} height={300} />
          <h3 className="text-lg font-medium mt-4">Memoir Collection</h3>
        </div>
        <div>
          <Image src="/placeholder.avif" alt="Masterpiece Collection" width={400} height={300} />
          <h3 className="text-lg font-medium mt-4">Masterpiece Collection</h3>
        </div>
        <div>
          <Image src="/placeholder.avif" alt="Inspire Collection" width={400} height={300} />
          <h3 className="text-lg font-medium mt-4">Inspire Collection</h3>
        </div>
      </div>
    </div>
  );
};

export default Categories;