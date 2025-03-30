import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import { FormSchema } from "../schema";

type Props = {
  attr: UseFormRegisterReturn<FormSchema['name']['firstName']>
  error: FieldErrors<FormSchema['name']>['firstName']
}

export const FirstName = ({attr, error}: Props) => {
  return (
    <div>
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        名前
      </label>
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="John"
        {...attr}
      />
      {error && (
        <span className="text-red-500 text-sm">{error.message}</span>
      )}
    </div>
  )
}