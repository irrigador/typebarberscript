import { SheetClose, SheetContent, SheetHeader, SheetTitle  } from "./sheet";
import { quickSearchOptions } from "@/app/_constants/search";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "./avatar";
import Link from "next/link";
import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react";
import { Button } from "./button";
import Image from "next/image";

const SidebarSheet = () => {
    return (

        <SheetContent className="overflow-y-auto">
        <SheetHeader>
            <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>


        <div className="py-5 border-b flex items-center border-solid">
            <Avatar>
                <AvatarImage src="https://mundoavatar.com.br/wp-content/uploads/2021/07/avatar-filme.jpeg"/>
            </Avatar>

            <div className="flex flex-col ml-3">
                <span className="font-bold">Pedro Programer</span>
                <span className="text-gray-500 text-sm"> email@email.com.br</span>
            </div>
        </div>


            <div className="py-5 flex flex-col gap-1 border-b border-solid">
            <SheetClose asChild>
                <Button className="gap-2 justify-start" variant="ghost" asChild>
                    <Link href="/">
                        <HomeIcon size={18}/>
                            Início
                    </Link>
            </Button>
            </SheetClose>
            <Button className="gap-2 justify-start" variant="ghost">
                <CalendarIcon size={18}/>
                    Agendamentos
            </Button>
            </div>   

            <div className="py-5 flex flex-col gap-1 border-b border-solid">
                {quickSearchOptions.map(option => (
                    <Button key={option.title} className="gap-2 justify-start" variant="ghost">
                    <Image alt={option.title} src={option.imageUrl} height={18} width={18}/>
                    {option.title}</Button>
                ))}
            </div>

            <div className="py-5 flex flex-col gap-1 border-b border-solid">
            <Button variant="ghost" className="justify-start gap-2">
                <LogOutIcon size={18} />
                Sair da conta</Button>
            </div>                             
        
        </SheetContent>
  
    );
}

export default SidebarSheet;