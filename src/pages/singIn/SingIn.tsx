import AntdInput from "@/components/ui/AntdInput";
import { Form, FormProps } from "antd";
import { NavLink } from "react-router-dom";

type FieldType = {
  name?: string;
  password?: string;
};

const SingIn = () => {
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
      className="block relative z-10 bg-white max-w-[462px] w-full rounded-md"
    >
      <div className="p-6 pb-4">
        <h3 className="font-bold text-[36px]">Вход</h3>
        <AntdInput
          name={"name"}
          label={"Логин"}
          rules={"Required"}
          placeholder="Введите логин"
          className="mb-5"
        />
        <AntdInput
          name={"password"}
          label={"Пароль"}
          rules={"Required"}
          placeholder="Введите пароль"
          className="mb-5"
        />
        <NavLink to="/sign-up" className="text-[#1890FF] text-sm block">
          Вход
        </NavLink>
      </div>
      <hr className="block" />
      <div className="p-2.5 flex items-center justify-center">
        <button className="py-1 px-4 rounded-sm bg-[#7CB305] text-sm leading-7 text-white">
          Регистрировать
        </button>
      </div>
    </Form>
  );
};

export default SingIn;
