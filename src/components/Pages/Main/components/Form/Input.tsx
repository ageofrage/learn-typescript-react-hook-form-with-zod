import { InputHTMLAttributes } from "react";

type RequiredIdAttr = Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> & Required<Pick<InputHTMLAttributes<HTMLInputElement>, 'id'>>

type Props = {
  label: string
  error?: string
} & RequiredIdAttr

export const Input = ({label,error, id, ...attr}: Props) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id={id}
        {...attr}
      />
      {error && (
        <span className="text-red-500 text-sm">{error}</span>
      )}
    </div>
  )
}