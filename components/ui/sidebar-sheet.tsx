"use client"
import { SheetClose, SheetContent, SheetHeader, SheetTitle  } from "./sheet";
import { quickSearchOptions } from "@/app/_constants/search";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "./avatar";
import Link from "next/link";
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { Button } from "./button";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import { signIn, signOut, useSession } from "next-auth/react";

const SidebarSheet = () => {
    const {data} = useSession()
    const logingoogle = () => signIn("google")
    const sairgoogle = () => signOut()

    return (

        <SheetContent className="overflow-y-auto">
        <SheetHeader>
            <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>


        <div className="py-5 border-b flex items-center border-solid justify-between">
          

         {data?.user ? (
            <div className="flex items-center gap-2">
                <Avatar>
                <AvatarImage src={data?.user.image ?? ""}/>
            </Avatar>

            <div className="flex flex-col ml-3">
                <span className="font-bold">{data.user.name}</span>
                <span className="text-gray-500 text-sm">{data.user.email}</span>
            </div> 
            </ div>
         ) : (
            <>
                <h2 className="font-bold"> Olá faça seu login!</h2>
         <Dialog>
            <DialogTrigger asChild>
                <Button size="icon">
                    <LogInIcon />
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[90%]">
                <DialogHeader>
                    <DialogTitle>Faça o login na plataforma</DialogTitle>
                    <DialogDescription>
                        Conecte-se usando sua conta do Google
                    </DialogDescription>
                </DialogHeader>

                <Button variant="outline" className="gap-1 font-bold" onClick={logingoogle}>
                    <Image src="/google.svg" width={18} height={18} alt="Login Gmail"/>
                    Google
                </Button>
            </DialogContent>
         </Dialog>
            </>
         )}
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
                    <Button key={option.title} className="gap-2 justify-start" variant="ghost" asChild>
                    <Link href={`/barbershops?search=${option.title}`}>
                    <Image alt={option.title} src={option.imageUrl} height={18} width={18}/>
                    {option.title}
                    </Link>
                    </Button>
                ))}
            </div>

            <div className="py-5 flex flex-col gap-1 border-b border-solid" onClick={sairgoogle}>
            <Button variant="ghost" className="justify-start gap-2">
                <LogOutIcon size={18} />
                Sair da conta</Button>
            </div>                             
        
        </SheetContent>
  
    );
}

export default SidebarSheet;