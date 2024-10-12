"use client"

import { SearchIcon } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import { useRouter } from "next/navigation";
import {   zodResolver } from "@hookform/resolvers/zod"


import { useForm } from "react-hook-form";
import { Form, FormControl,  FormField, FormItem,  FormMessage } from "./form";
 
import { z } from "zod"

const formSchema = z.object({
  search: z.string().trim().min(1, {
    message: "Digite algo para buscar",
  }),
})

const Search = () => { 
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          search: ""
        },
      })
    const router = useRouter();

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
         // Impede o comportamento padrão de recarregar a página
        router.push(`/barbershops?search=${data.search}`);
    };

    return (


            <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex items-center gap-2 w-full">
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Faça sua busca..." {...field} className="w-full"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
             <Button type="submit">
                <SearchIcon />
            </Button>
      </form>
    </Form>
  
    );
};

export default Search;
