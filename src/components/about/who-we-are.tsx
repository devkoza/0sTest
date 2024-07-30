import Image from "next/image";


export default function WhoweAre() {
    return (
      <>
        <div className='max-w-[1700px] h-auto mx-auto my-4  pt-16 lg:mb-3 md:mb-3 px-6 grid lg:grid-cols-3 gap-6'>
        <div className='lg:top-1 relative lg:col-span-1 col-span-2'>
            <h3 className='text-3xl font-bold mb-4 text-gray-dark'>
              Who are we?
            </h3>
            <p className='text-lg pt-6 '>

              Ocean Safaris is an online booking platform for boats along the coast of Kenya. Our mission is to make water sports activities in Kenya easily accessible, while supporting local boat owners. We offer different boats and various activities to give you the best experience Kenya has.
            
            </p>
          
            <p className='text-lg pt-4  '>

              We believe safety is of the most importance, which is why every boat registered has been checked by our team, all captains are licensed, and all necessary safety equipment is on board.

            </p>
          
          </div>

        <div className='grid grid-cols-2 mt-16 md:mt-16 col-span-2 lg:top-32 gap-4'>
          <Image
          src="/images/destinations/diani.jpg"
          className="object-cover w-full h-[80%] rounded-lg"
          width={500}
          height={500}
          alt="diani"
          />
          <Image
          src="/images/destinations/malindi.jpg"
          className="row-span-1 object-cover w-full h-[80%] rounded-lg"
          width={500}
          height={200}
          alt="malindi"
          />
          
        </div>
        </div>


      </>
      
      
    );

  }