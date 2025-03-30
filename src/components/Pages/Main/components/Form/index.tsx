import { useForm } from "react-hook-form";
import { FirstName } from "./Name/FirstName"
import { formSchema, FormSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LastName } from "./Name/LastName";

export const Form = () => {
  const { register, formState: { errors } } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: 'all'
  });

	return (
		<form>
			<div className="grid gap-6 mb-6 md:grid-cols-2">
        <FirstName attr={register('name.firstName')} error={errors.name?.firstName} />
        <LastName attr={register('name.lastName')} error={errors.name?.lastName} />
				<div>
					<label
						htmlFor="company"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Company
					</label>
					<input
						type="text"
						id="company"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Flowbite"
						required
					/>
				</div>
				<div>
					<label
						htmlFor="phone"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Phone number
					</label>
					<input
						type="tel"
						id="phone"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="123-45-678"
						pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
						required
					/>
				</div>
				<div>
					<label
						htmlFor="website"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Website URL
					</label>
					<input
						type="url"
						id="website"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="flowbite.com"
						required
					/>
				</div>
				<div>
					<label
						htmlFor="visitors"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Unique visitors (per month)
					</label>
					<input
						type="number"
						id="visitors"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder=""
						required
					/>
				</div>
			</div>
			<div className="mb-6">
				<label
					htmlFor="email"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Email address
				</label>
				<input
					type="email"
					id="email"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="john.doe@company.com"
					required
				/>
			</div>
			<div className="mb-6">
				<label
					htmlFor="password"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Password
				</label>
				<input
					type="password"
					id="password"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="•••••••••"
					required
				/>
			</div>
			<div className="mb-6">
				<label
					htmlFor="confirm_password"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Confirm password
				</label>
				<input
					type="password"
					id="confirm_password"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="•••••••••"
					required
				/>
			</div>
			<div className="flex items-start mb-6">
				<div className="flex items-center h-5">
					<input
						id="remember"
						type="checkbox"
						value=""
						className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
						required
					/>
				</div>
				<label
					htmlFor="remember"
					className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				>
					I agree with the{" "}
					<a
						href="#"
						className="text-blue-600 hover:underline dark:text-blue-500"
					>
						terms and conditions
					</a>
					.
				</label>
			</div>
			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Submit
			</button>
		</form>
	);
}