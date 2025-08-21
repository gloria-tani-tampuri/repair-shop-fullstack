import { BackButton } from "@/components/BackButton";
import { tickets } from "@/db/schema";
import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTickets";

export default async function TicketFormPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    const { customerId, ticketId } = await searchParams;
    
    try {
        if (!customerId && !ticketId) {
            return (
                <div className="text-2xl mb-2">
                    Please provide a customer ID or ticket ID.
                    <BackButton title="Go Back" variant="default"/>
                </div>
            );
        }

        // New ticket form
        if (customerId) {
            const customer = await getCustomer(parseInt(customerId));
            if (!customer) {
                return (
                    <div className="text-2xl mb-2">
                        Customer ID #{customerId} not found
                        <BackButton title="Go Back" variant="default"/>
                    </div>
                );
            }
            if (!customer.active) {
                return (
                    <div className="text-2xl mb-2">
                        Customer ID #{customerId} is inactive
                        <BackButton title="Go Back" variant="default"/>
                    </div>
                );
            }

            // Return ticket form for new ticket
            console.log("New ticket for customer:", customer);
            // TODO: Return your new ticket form component here
            return (
                <div>
                    <h1>Create New Ticket for {customer.firstName} {customer.lastName}</h1>
                    {/* Your ticket form component goes here */}
                </div>
            );
        }

        // Edit existing ticket
        if (ticketId) {
            const ticket = await getTicket(parseInt(ticketId));
            if (!ticket) {
                return (
                    <div className="text-2xl mb-2">
                        Ticket ID #{ticketId} not found
                        <BackButton title="Go Back" variant="default"/>
                    </div>
                );
            }

            // Get the customer for this ticket
            const customer = await getCustomer(ticket.customerId);
            if (!customer) {
                return (
                    <div className="text-2xl mb-2">
                        Customer for ticket #{ticketId} not found
                        <BackButton title="Go Back" variant="default"/>
                    </div>
                );
            }

            console.log("Edit ticket:", ticket);
            console.log("Customer:", customer);
            
            // TODO: Return your edit ticket form component here
            return (
                <div>
                    <h1>Edit Ticket #{ticket.id}</h1>
                    <p>Customer: {customer.firstName} {customer.lastName}</p>
                    {/* Your ticket edit form component goes here */}
                </div>
            );
        }

    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        return (
            <div className="text-2xl mb-2">
                An error occurred while loading the page.
                <BackButton title="Go Back" variant="default"/>
            </div>
        );
    }
}