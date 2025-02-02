import { AntdInputPropsType } from "@/types/uiTypes";
import { Form, Input } from "antd";

const AntdInput = ({ name, label, rules }: AntdInputPropsType) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[{ required: true, message: rules }]}
    >
      <Input />
    </Form.Item>
  );
};

export default AntdInput;
