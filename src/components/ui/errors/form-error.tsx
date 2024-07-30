import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

interface FormErrorProps {
    message?: string,
};

export const FormError =({
    message,
}: FormErrorProps) => {
    if (!message) return null;

    return (
        <div className="bg-red/15 p-3 mb-4 rounded-md flex items-center gap-x-2 text-sm text-red">
            <ExclamationCircleIcon className="h-4 w-4" />
            <p>{message}</p>

        </div>
    )
    
};
