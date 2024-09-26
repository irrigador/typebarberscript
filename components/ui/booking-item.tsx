import { Avatar, AvatarImage } from "./avatar";
import { Badge } from "./badge";
import { Card, CardContent } from "./card";

const BookingItem = () => {
    return(
        <>
         <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400"> Agendamentos</h2>

<Card className="mt-6">
  <CardContent className="flex justify-between p-0">
    <div className="flex flex-col gap-2 py-5 pl-5">
      <Badge className="w-fit">Confirmado</Badge>
      <h3 className="font-semibold">Corte de Cabelo</h3>


    <div className="flex items-center gap-2">
      <Avatar className="h-6 w-6">
          <AvatarImage src="https://finger.ind.br/wp-content/uploads/2023/11/post-thumbnail-c1d98a41cae1637c797d817bc1a3a48a-1170x685.jpeg" />
      </Avatar>
        <p className="text-sm">Barbearia SWF</p>
    </div>
    </div>
  
  
    <div className="flex flex-col items-center justify-center px-5">
      <p className="text-sm">Agosto</p>
      <p className="text-2xl">06</p>
      <p className="text-sm">20:00</p>

    </div>
  </CardContent>
</Card>
        </>
    );
}


export default BookingItem;