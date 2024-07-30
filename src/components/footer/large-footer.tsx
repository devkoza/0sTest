import { footerLinks } from '@/constants'
import Link from 'next/link';


type ColumnProps = {
    title: string;
    links: Array<string>;
}

const FooterColumn = ({title, links}: ColumnProps) => {
  return (
    <div className=' '>
          <h4 className='font-semibold text-lg text-slate-900'>{title}</h4>
          <ul className='flex flex-col gap-1 font-semibold leading-relaxed text-slate-600 '>{links.map((link) => <Link href='/' key={link}>{link}</Link>)}
              
          </ul>
    </div>
  )
}



const LargeFooter = () => {
  return (
    <footer className=''>
          <div className='flex flex-col gap-6 w-full'>
              <div className='flex items-start flex-col'>

            
              </div>
              <div className='bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around gap-60 items-start p-20'>
                  <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />

                  <div className=''>
                      <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
                      
                  </div>
                  <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
                  
                  <div className=''>
                      <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />
                      
                  </div>
                  
              </div>
          </div>
    </footer>  

  )
}

export default LargeFooter