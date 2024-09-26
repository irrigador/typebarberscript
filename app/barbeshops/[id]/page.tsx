import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarsIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BarbershopPageProps {
    params: {
        id: string;
    }
}

const BarbershopPage = async ({params}: BarbershopPageProps) => {


    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        }
    })
    return <div>
        <div className="relative w-full h-[250px]">
            <Image src={barbershop?.imageUrl} fill className="object-cover" alt={barbershop.name}/>
        
        <Button className="absolute left-4 top-4" variant="secondary" size="icon" asChild>
            <Link href="/">
            <ChevronLeftIcon />
            </Link>
        </Button>
        <Button className="absolute right-4 top-4" variant="secondary" size="icon">
            <MenuIcon />
        </Button>
        
        </div>
    
    <div className=" p-5 boder-solid border-b">
    <h1 className="text-xl font-bold mb-6">{barbershop.name}</h1>
    <div className="flex items-center gap-1 mp-2">
        <MapPinIcon className="text-primary" size={18}/>
        <p className="text-sm">{barbershop?.address}</p>
    </div>
    <div className="flex items-center gap-1">
        <StarsIcon className="text-primary fill-primary" size={18}/>
        <p className="text-sm">5,0 (499 Avaliações)</p>
    </div>
    </div>


        <div className="p-5 border-b border-solid space-y-3">
                <h2 className="font-bold uppercase text-gray-400 text-xs">Sobre Nós</h2>
                <p className="text-sm text-justify">{barbershop?.description}</p>
        </div>
    </div>
}

export default BarbershopPage;