import {
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

const Form = ({ fields, onSubmit, submitHandlerType }) => {
  const { register, handleSubmit } = useForm<submitHandlerType>();

  const onSubmit: SubmitHandler<submitHandlerType> = (data) =>
    console.log(data);

  const renderField = ({
    fieldName,
    fieldType,
    label,
    options,
    defaultValue,
  }) => {
    switch (fieldType) {
      case 'text':
      case 'email':
      case 'number':
      case 'password':
        return (
          <TextField
            key={fieldName}
            label={label || fieldName}
            fullWidth
            {...register(fieldName)}
          />
        );

      // case 'checkbox':
      //   return (
      //     <FormControlLabel
      //       key={fieldName}
      //       control={
      //         <Checkbox
      //           checked={!!formData[fieldName]}
      //           onChange={(e) => handleChange(fieldName, e.target.checked)}
      //         />
      //       }
      //       label={label || fieldName}
      //     />
      //   );

      case 'select':
        return (
          <FormControl fullWidth key={fieldName}>
            <InputLabel>{label || fieldName}</InputLabel>
            <Select
              label={label || fieldName}
              id={fieldName}
              multiple
              defaultValue={defaultValue}
              {...register(fieldName)}
            >
              {options.map(({ _id, label }) => (
                <MenuItem value={_id} key={_id}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => renderField(field))}

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Submit
      </Button>
    </form>
  );
};

export default Form;

// NOTE: change fieldName => fieldKey
