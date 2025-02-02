import AntdInput from "@/components/ui/AntdInput";
import instance from "@/services/interceptor";
import { AuthFormInputTypes } from "@/types/uiTypes";
import { Form, FormProps } from "antd";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const onFinish: FormProps<AuthFormInputTypes>["onFinish"] = async (
    values
  ) => {
    try {
      const response = await instance.post("auths/sign-up", values);
      if (response.status === 200) {
        navigate("/sign-in");
      }
    } catch (error) {
      console.error(error);
    }
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
        <h3 className="font-bold text-[36px]">Регистрация</h3>
        <AntdInput
          name={"fullName"}
          label={"Ф.И.О"}
          rules={"Required"}
          placeholder="Введите Ф.И.О"
          className="mb-5"
        />
        <AntdInput
          name={"login"}
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
        <NavLink to="/sign-in" className="text-[#1890FF] text-sm block">
          Вход
        </NavLink>
      </div>
      <span className="block bg-[#D9D9D9] h-0.5"></span>
      <div className="p-2.5 flex items-center justify-center">
        <button className="py-1 px-4 rounded-sm bg-[#7CB305] text-sm leading-7 text-white">
          Регистрировать
        </button>
      </div>
    </Form>
  );
};

export default SignUp;
