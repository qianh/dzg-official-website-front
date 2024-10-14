"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "@components/input";
import Loading from "@components/Loading";
import toast from "@components/toast";

interface IPartnersProps {}

type FieldValues = {
  user_name: string;
  mobile: string;
  email: string;
  corp_name: string;
  region: string;
  message: string;
};

type FIELD_ITEM = {
  field: keyof FieldValues;
  label: string;
  required: boolean;
  msg: string;
  pattern?: any;
};

const FORM_FIELD_LIST: FIELD_ITEM[] = [
  { field: "user_name", label: "姓名", required: true, msg: "请输入您的姓名" },
  {
    field: "mobile",
    label: "电话",
    required: true,
    msg: "请输入您的电话",
    pattern: {
      value: /^1[3-9]\d{9}$/,
      message: "手机号格式不正确",
    },
  },
  {
    field: "email",
    label: "电子邮箱",
    required: true,
    msg: "请输入您的电子邮箱",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "邮箱格式不正确",
    },
  },
  {
    field: "corp_name",
    label: "公司名称",
    required: true,
    msg: "请输入您的公司名称",
  },
];

export default function Apply(props: IPartnersProps) {

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FieldValues>();

  const summit = async (data: any) => {
    setLoading(true);
    wlCustomFormComp.linkToWL(
      {
        wl_form_id: "1832991416381472768",
        formData: data,
      },
      () => {
        toast.success("提交成功");
        reset();
        setLoading(false);
      }
    );
  };

  return (
    <div className="flex flex-col items-center ">
      {loading && <Loading />}
      <div className="text-5xl font-black pb-[88px]">立即申请</div>
      <form onSubmit={handleSubmit(summit)} className="w-[100%]">
        <div className="grid grid-cols-2 gap-x-10 gap-y-4 w-[100%]">
          {FORM_FIELD_LIST.map((item, index) => (
            <div className="h-24" key={index}>
              <Input
                label={item.label}
                placeholder={item.msg}
                required
                {...register(item.field, {
                  required: item.required ? item.msg : false,
                  pattern: item.pattern,
                })}
              />
              {errors[item.field] && (
                <p className="text-red-500 text-sm pt-2">
                  {errors[item.field]?.message}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="w-[100%] mt-2 ">
          <button
            className="pt-2 pb-2 pl-10 pr-10 bg-orange-500 text-white font-bold rounded hover:cursor-pointer"
            type="submit"
          >
            提交
          </button>
        </div>
      </form>
    </div>
  );
}
