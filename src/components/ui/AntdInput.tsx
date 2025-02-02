import { AntdInputPropsType } from "@/types/uiTypes";
import { Form, Input } from "antd";

const AntdInput = ({
  name,
  label,
  rules,
  placeholder,
  className,
}: AntdInputPropsType) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[{ required: true, message: rules }]}
      className={className}
    >
      <Input placeholder={placeholder} />
    </Form.Item>
  );
};

export default AntdInput;
