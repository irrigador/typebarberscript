import { MenuIcon } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import Image from "next/image";
import { Sheet, SheetTrigger } from "./sheet";

import SidebarSheet from "./sidebar-sheet";


const Header = () => {
    return (
        <Card>
            <CardContent className=" p-5 flex flex-row items-center justify-between">
                <Image alt="Logo" src="/logo.png" height={18} width={120}/>

                <Sheet>
                    <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                    <MenuIcon />
                    </Button>
                    </SheetTrigger>
                   <SidebarSheet />
                </Sheet>
            </CardContent>
        </Card>
    );
}

export default Header;