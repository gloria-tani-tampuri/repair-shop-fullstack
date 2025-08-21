"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  InsertTicketSchemaType,
  SelectTicketSchemaType,
  insertTicketSchema,
} from "@/zod-schemas/ticket";
import { SelectCustomerSchemaType } from "@/zod-schemas/customer";

type Props = {
  customer?: SelectCustomerSchemaType;
  ticket?: SelectTicketSchemaType;
};

const TicketForm = ({ customer, ticket }: Props) => {
  const defaultValues:InsertTicketSchemaType = {
    id: ticket?.id ?? "(New)",
    title: ticket?.title ?? "",
    description: ticket?.description ?? "",
    tech: ticket?.tech ?? "new-ticket@example.com",
    customerId: ticket?.customerId ?? customer?.id ,
    completed: ticket?.completed ?? false,
  };
  
  const form = useForm<InsertTicketSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertTicketSchema),
    defaultValues,
  });

  return <div></div>;
};

export default TicketForm;
