import { BackButton } from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";
import CustomerForm from "./CustomerForm";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId } = await searchParams;

    //edit customer form
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));
      if (!customer) {
        return (
          <div className="text-2xl mb-2">
            Customer ID #{customerId} not found
            <BackButton title="Go Back" variant="default" />
          </div>
        );
      }
      //put customer form component
     return <CustomerForm customer={customer} />;
    } else {
      //new customer form
     return <CustomerForm />;

    }
  } catch (error) {
    if (error instanceof Error) {
    }
  }
}
