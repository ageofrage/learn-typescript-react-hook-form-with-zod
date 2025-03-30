import { useForm } from "react-hook-form";
import { type NameSchema, nameSchema } from "../../../../../../schemas/name";
import { zodResolver } from "@hookform/resolvers/zod";
export const FirstName = () => {
  const { register, formState: { errors } } = useForm<NameSchema>({
    resolver: zodResolver(nameSchema),
    mode: 'all'
  });

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
        {...register('firstName')}
      />
      {errors.firstName && (
        <span className="text-red-500 text-sm">{errors.firstName.message}</span>
      )}
    </div>
  )
}