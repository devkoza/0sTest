import {ExclamationTriangleIcon} from "@radix-ui/react-icons";

interface FormErrorProps {
    message?: string;
};

export const FormError = ({
    message,
}: FormErrorProps) => {
    if (!message) return null;

    return(
        <div className=" w-full bg-red-500/15 p-3 mb-4 rounded-md flex items-center justify-center gap-x-2 text-sm text-red-500">
            <ExclamationTriangleIcon className="h-4 w-4 "/>
            <p>{message}</p>

        </div>
    )

}