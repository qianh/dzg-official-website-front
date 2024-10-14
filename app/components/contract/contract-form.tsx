"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "@components/input";
import Checkbox from "@components/input/Checkbox";
import Loading from "@components/Loading";
import toast from "@components/toast";

interface ContractFormProps {}

type FieldValues = {
  user_name: string;
  mobile: string;
  email: string;
  corp_name: string;
  corp_address: string;
  _gongsizhuyingyewu: string;
  _gongsizhuyingyewu_other: string;
};

type FIELD_ITEM = {
  field: keyof FieldValues;
  label?: string;
  required: boolean;
  msg: string;
  type?: "input" | "checkbox";
  pattern?: any;
};

const FORM_FIELD_LIST: FIELD_ITEM[] = [
  { label: "姓名", field: "user_name", required: true, msg: "请输入您的姓名" },
  {
    label: "电话",
    field: "mobile",
    required: true,
    msg: "请输入您的电话",
    pattern: {
      value: /^1[3-9]\d{9}$/,
      message: "手机号格式不正确",
    },
  },
  {
    label: "电子邮箱",
    field: "email",
    required: true,
    msg: "请输入您的电子邮箱",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "邮箱格式不正确",
    },
  },
  {
    label: "公司名称",
    field: "corp_name",
    required: true,
    msg: "请输入您的公司名称",
  },
  {
    label: "所在省份",
    field: "corp_address",
    required: true,
    msg: "请输入所在省份",
  },
];

const MainBusiness: FIELD_ITEM = {
  field: "_gongsizhuyingyewu",
  label: "主营业务",
  required: true,
  msg: "请选择主营业务",
  type: "checkbox",
};

const OtherBusiness: FIELD_ITEM = {
  label: "",
  field: "_gongsizhuyingyewu_other",
  required: true,
  msg: "请输入其他主营业务",
};

const ContractForm: React.FC<ContractFormProps> = (
  props: ContractFormProps
) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FieldValues>();

  const [loading, setLoading] = useState(false);

  const businessType = watch("_gongsizhuyingyewu");

  const summit = (data: any) => {
    setLoading(true);
    wlCustomFormComp.linkToWL(
      {
        wl_form_id: "1820373133232832512",
        formData: data,
      },
      () => {
        toast.success("提交成功");
        reset();
        setLoading(false);
      }
    );
  };

  const showOtherBusiness = () => {
    return (businessType || [""]).includes("10000")
  };

  return (
    <div className="">
      {loading && <Loading />}
      <form onSubmit={handleSubmit(summit)} className="w-[100%]">
        <div className="grid grid-cols-2 gap-x-10 gap-y-7 w-[100%]">
          {FORM_FIELD_LIST.map((item, index) => {
            return (
              <div
                className={`${
                  item.type === "checkbox" ? "h-[48px]" : "h-[72px]"
                }`}
                key={index}
              >
                <Input
                  label={item.label}
                  placeholder={item.msg}
                  required={item.required}
                  {...register(item.field, {
                    required: item.required ? item.msg : false,
                    pattern: item.pattern,
                  })}
                />
                {errors[item.field] && (
                  <p className="text-red-500 text-sm pt-1 pl-1">
                    {errors[item.field]?.message}
                  </p>
                )}
              </div>
            );
          })}
          <div className={`flex`}>
            <div className={"h-[72px] w-[50%]"}>
              <Checkbox
                label={MainBusiness.label || ""}
                name={MainBusiness.field}
                required={MainBusiness.required}
                children={[
                  { name: "海运空运进口", value: "1" },
                  { name: "跨境电商", value: "3" },
                  { name: "其他", value: "10000" },
                ]}
                registerFunc={() =>
                  register(MainBusiness.field, {
                    required: MainBusiness.required ? MainBusiness.msg : false,
                  })
                }
              />
              {errors[MainBusiness.field] && (
                <p className="text-red-500 text-sm pt-1 pl-1">
                  {errors[MainBusiness.field]?.message}
                </p>
              )}
            </div>
            {showOtherBusiness() && (
              <div className={"h-[72px] pt-[28px] pl-4 w-[50%]"}>
                <Input
                  label={OtherBusiness.label}
                  placeholder={OtherBusiness.msg}
                  required={OtherBusiness.required}
                  {...register(OtherBusiness.field, {
                    required: OtherBusiness.required
                      ? OtherBusiness.msg
                      : false,
                    pattern: OtherBusiness.pattern,
                  })}
                />
                {errors[OtherBusiness.field] && (
                  <p className="text-red-500 text-sm pt-1 pl-1">
                    {errors[OtherBusiness.field]?.message}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="w-[100%] pt-12">
          <button
            className="w-[100%] h-12 bg-orange-500 text-white font-bold flex items-center justify-center hover:cursor-pointer"
            type="submit"
          >
            提交
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContractForm;
