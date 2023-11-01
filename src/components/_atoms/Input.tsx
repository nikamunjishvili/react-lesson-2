interface InputTypes {
  value: string;
  type: "email" | "password" | "number" | "phone" | "name";
  name: string;
  placeholder: string;
  onChange: (e: React.FocusEvent<any, Element>) => void;
  onBlur: (e: React.FocusEvent<any, Element>) => void;
}

const Input = ({
  type,
  value,
  name,
  placeholder,
  onChange,
  onBlur,
}: InputTypes) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Input;
