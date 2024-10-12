import BarbershopItem from "@/components/ui/barbershop-items";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { db } from "@/lib/prisma";
import Image from "next/image";
import { quickSearchOptions } from "./_constants/search";
import BookingItem from "@/components/ui/booking-item";
import Search from "@/components/ui/search";
 
const Home  = async () => {

  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    }
  })
  
 return <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Pedro</h2>
        <p className="">Segunda-feira, 05 de agosto</p>
      
      
        <div className="mt-6">
            <Search/>
        </div>
      
      <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map(option => (
            <Button className="gap-2 fill-blue-500" variant="secondary" key={option.title}>
            <Image src={option.imageUrl}  alt={option.title} width={16} height={16} />  
           {option.title}</Button>
          ))}
          
         
      </div>

      <div className="relative w-full h-[150px] mt-6" >
      <Image src="/banner.png" alt="Imagem" fill className="object-cover"/>
      </div>

     <BookingItem />
          
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400"> Recomendados</h2>

      <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
      {barbershops.map((barbershop) =>(
        <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
      ))}
      </div>

      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400"> Populares</h2>

      <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
      {popularBarbershops.map((barbershop) =>(
        <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
      ))}
      </div>

      </div>
      
          </div>
      
      }
      export default Home