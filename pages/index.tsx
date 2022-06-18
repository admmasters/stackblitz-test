import { ProductTemplate, TextField, Button } from '@zopauk/react-components';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types/form';

interface Inputs {
  firstname: string;
  surname: string;
}

const IndexPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ProductTemplate title="Hello World">
        <ProductTemplate.Card>
          <TextField
            label="First name"
            name="firstname"
            {...register('firstname')}
          />
          <TextField label="Surname" name="surname" {...register('surname')} />
          <Button type="submit">Submit Form</Button>
        </ProductTemplate.Card>
      </ProductTemplate>
    </form>
  );
};

export default IndexPage;
