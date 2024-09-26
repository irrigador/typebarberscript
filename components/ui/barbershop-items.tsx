import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image"
import { Button } from "./button";
import { Badge } from "./badge";
import { StarsIcon } from "lucide-react";
import Link from "next/link";


interface BarbershopItemProps {
    barbershop: Barbershop
}

const BarbershopItem = ({barbershop}: BarbershopItemProps) => {
    return (
        <Card className="min-w-[167px] rounded-2xl">
            <CardContent className="p-0 pt-2">
                <div className="relative h-[159px] w-full ">
                    <Image fill alt="{barbershop.name}"
                    src={barbershop.imageUrl}
                    className="object-contain rounded-2xl"/>

                    <Badge className="absolute left-2 top-2" variant="secondary">
                        <StarsIcon size={12} className="fill-primary text-primary"/>
                        <p>
                             5,0
                        </p>
                    </Badge>
                </div>

                <div className="px-2 py-3">
                    <h3 className="truncate font-semibold">{barbershop.name}</h3>
                    <p className="truncate text-sm text-gray-400">{barbershop.address}</p>
                    <Button className="mt-3 w-full" variant="secondary">
                        <Link href={`/barbeshops/${barbershop.id}`}>
                        Reservar
                        </Link>
                    </Button>
                </div>

            </CardContent>
        </Card>
    )
}

export default BarbershopItem;