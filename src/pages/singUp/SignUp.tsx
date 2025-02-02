import AntdInput from "@/components/ui/antdInput";
import { Button, Form, FormProps } from "antd";

type FieldType = {
  name?: string;
};

const SignUp = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="validateOnly"
      layout="vertical"
      autoComplete="off"
      onFinish={onFinish}
    >
      <AntdInput name={"name"} label={"name"} rules={"Required"} />
      <Button htmlType="submit">Sign up</Button>
    </Form>
  );
};

export default SignUp;
