import { ComponentProps } from "react";
import Select from "react-select";
import { stylesMultiSelect } from "./stylesMultiSelect";

type MultiSelectProps<Option> = ComponentProps<typeof Select<Option, true>>;

export const MultiSelect = <Option,>({
  isMulti = true,
  ...otherProps
}: MultiSelectProps<Option>) => {
  return (
    <Select
      isMulti={isMulti}
      {...otherProps}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      styles={stylesMultiSelect}
    />
  );
};
