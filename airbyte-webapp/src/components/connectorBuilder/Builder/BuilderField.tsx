import { useField } from "formik";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import * as yup from "yup";

import { ControlLabels } from "components/LabeledControl";
import { DropDown } from "components/ui/DropDown";
import { Input } from "components/ui/Input";
import { Text } from "components/ui/Text";

import styles from "./BuilderField.module.scss";

interface EnumFieldProps {
  options: string[];
  value: string;
  setValue: (value: string) => void;
  error: boolean;
}

interface BaseFieldProps {
  // path to the location in the Connector Manifest schema which should be set by this component
  path: string;
  label: string;
  tooltip?: string;
  optional?: boolean;
}

type BuilderFieldProps = BaseFieldProps & ({ type: "text" } | { type: "enum"; options: string[] });

const EnumField: React.FC<EnumFieldProps> = ({ options, value, setValue, error, ...props }) => {
  useEffect(() => {
    setValue(value);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <DropDown
      {...props}
      options={options.map((option) => {
        return { label: option, value: option };
      })}
      onChange={(selected) => selected && setValue(selected.value)}
      value={value}
      error={error}
    />
  );
};

export const BuilderField: React.FC<BuilderFieldProps> = ({ path, label, tooltip, optional = false, ...props }) => {
  let yupSchema = yup.string();
  if (!optional) {
    yupSchema = yupSchema.required("form.empty.error");
  }
  const fieldConfig = {
    name: path,
    validate: (value: string) => {
      try {
        yupSchema.validateSync(value);
        return undefined;
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          return err.errors.join(", ");
        }
        throw err;
      }
    },
  };
  const [field, meta, helpers] = useField(fieldConfig);
  const hasError = !!meta.error && meta.touched;

  return (
    <ControlLabels className={styles.container} label={label} infoTooltipContent={tooltip} optional={optional}>
      {props.type === "text" && <Input {...field} type={props.type} value={field.value ?? ""} error={hasError} />}
      {props.type === "enum" && (
        <EnumField
          options={props.options}
          value={field.value ?? props.options[0]}
          setValue={helpers.setValue}
          error={hasError}
        />
      )}
      {hasError && (
        <Text className={styles.error}>
          <FormattedMessage id={meta.error} />
        </Text>
      )}
    </ControlLabels>
  );
};