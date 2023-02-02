import salesforce from '../assets/salesforce.svg'
import hubspot from '../assets/hubspot.svg'
import shopify from '../assets/shopify.svg'
import aws from '../assets/aws.svg'

const Companies = () => {
    return (
        <section className='bg-blue-600 w-full p-12'>
            <div className='grid grid-cols-2 place-items-center gap-8 md:grid-cols-4 grid-rows-2 md:grid-rows-1'>
                <div>
                    <img className='w-[10rem] h-[10rem]' src={salesforce}/>
                </div>
                <div>
                    <img className='w-[10rem] h-[10rem]' src={hubspot}/>
                </div>
                <div>
                    <img className='w-[10rem] h-[10rem]' src={shopify}/>
                </div>
                <div>
                    <img className='w-[10rem] h-[10rem]' src={aws}/>
                </div>
            </div>
        </section>
    )
}

export default Companies
