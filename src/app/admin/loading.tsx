import { Loader2 } from "lucide-react";

// AdminLoading component renders a loading indicator for the admin section
export default function AdminLoading() {
  return (
    // Renders a flex container to center the loading indicator horizontally
    <div className='flex justify-center'>
      {/* Renders the Loader2 component with specified size and spin animation */}
      <Loader2 className='size-24 animate-spin' />
    </div>
  );
}
