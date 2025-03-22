interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  isSurpriseMe?: boolean;
  handleSurpriseMe?: () => void
  handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export const FormField = ({
  label,
  type,
  name,
  placeholder,
  value,
  isSurpriseMe,
  handleSurpriseMe,
  handleChange
}: Props) => {

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {label}
        </label>
        {isSurpriseMe && (
          <button
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black cursor-pointer"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        id={name}
        typeof={type}
        onChange={handleChange}
        value={value}
        className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3 border"
      />
    </div>
  );
};
