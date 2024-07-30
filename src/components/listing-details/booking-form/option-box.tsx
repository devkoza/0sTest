'use client';

interface RadioGroupProps {
  label: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  selectedValue: string;
}

export default function RadioGroup({
  label,
  options,
  onChange,
  selectedValue,
}: RadioGroupProps) {
  return (
    <div className="my-4">
      <h4 className="text-lg font-semibold mb-2">{label}</h4>
      <div className="flex gap-4">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-2">
            <input
              type="radio"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="form-radio"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
}
