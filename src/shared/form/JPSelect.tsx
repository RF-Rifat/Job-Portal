// "use client"

// import { Controller, useFormContext } from "react-hook-form";
// import { TFormSelectProps } from "@/types/form.type";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// const JPSelect = ({
//   name,
//   options,
//   defaultValue,
//   disabled,
//   placeholder,
// }: TFormSelectProps): JSX.Element => {
//   const {
//     formState: { errors },
//   } = useFormContext();


//   return (
//     <Controller
//       name={name}
//       defaultValue={defaultValue}
//       render={({ field }) => (
//         <div>
//           <Select
//             disabled={disabled}
//             onValueChange={field.onChange}
//             value={field.value}
//           >
//             <SelectTrigger className="w-full">
//               <SelectValue placeholder={placeholder} />
//             </SelectTrigger>
//             <SelectContent>
//               {options?.map((option) => (
//                 <SelectItem key={option.value} value={option.value}>
//                   {option.label}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//           <>
//             {errors && typeof errors[name]?.message === "string" ? (
//               <small className="text-red-500">{errors[name]?.message}</small>
//             ) : (
//               ""
//             )}
//           </>
//         </div>
//       )}
//     />
//   );
// };

// export default JPSelect;
