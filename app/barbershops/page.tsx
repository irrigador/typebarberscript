import BarbershopItem from "@/components/ui/barbershop-items"
import Header from "@/components/ui/header"
import Search from "@/components/ui/search"



import { db } from "@/lib/prisma"


interface BarbershopsPageProps {
    searchParams: {
        search?: string
    }
}
const BarbershopsPage =  async ({searchParams}: BarbershopsPageProps) => {
        const barbershop = await db.barbershop.findMany({
            where: {
                name: {
                    contains: searchParams?.search,
                    mode: "insensitive",
                },
            },
        })
    return (
        <div>
            <Header />
            <div className="my-6 px-5">
                <Search />
            </div>
           <div className=" px-5">
           <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
                Resultado para "{searchParams.search}"</h2>
                <div className="grid grid-cols-2 gap-4">
                            {barbershop.map((barbershop) => (
                                <BarbershopItem key={barbershop.id} 
                                barbershop={barbershop} />
                            ))}
                </div>
           </div>
        </div>
    )
}

export default BarbershopsPage;